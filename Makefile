MD := $(subst $(BSLASH),$(FSLASH),$(shell dirname "$(realpath $(lastword $(MAKEFILE_LIST)))"))
export GOBIN := $(MD)/bin
export PATH := $(GOBIN):$(PATH)

# RDB Connection Parameters
RDB_HOST ?= 127.0.0.1
RDB_PORT ?= 5432
RDB_USER ?= ts221
RDB_PASS ?=
RDB_NAME ?= postgres
DBMATE_DB_SCHEMA ?= "backend"
DATABASE_URL := postgres://$(RDB_USER):$(RDB_PASS)@$(RDB_HOST):$(RDB_PORT)/$(RDB_NAME)?sslmode=disable

# Color output for help
CYAN := \033[36m
RESET := \033[0m

.PHONY: help
help: ## ヘルプを出力
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "$(CYAN)%-20s$(RESET) %s\n", $$1, $$2}'

.PHONY: gen-help-md
gen-help-md: ## ヘルプをMarkdown形式で出力
	@printf "| コマンド | 説明 |\n"
	@printf "|---------|-------------|\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "| make %-20s | %s |\n", $$1, $$2}'

.PHONY: start
start: ## サービス起動
	@devbox services up

.PHONY: stop
stop: ## サービス停止
	@devbox services stop

.PHONY: go-install-tools
go-install-tools: ## Goツールをインストール
	@echo "Installing Go tools"
	@mkdir -p $(GOBIN)
	@cat tools.go | grep _ | awk -F'"' '{print $$2}' | xargs -t -n 1 go install

.PHONY: start-postgres
start-postgres: ## PostgreSQLを起動
	@process-compose up postgres

.PHONY: pgcli
pgcli: ## PostgreSQLに接続
	@psql -h $(RDB_HOST) -p $(RDB_PORT) -U $(RDB_USER) -d $(RDB_NAME)

.PHONY: migrate-new
migrate-new: ## マイグレーションファイル作成
	@read -p "Migration comment: " COMMENT; \
	DATABASE_URL=$(DATABASE_URL) dbmate -d $(DBMATE_DB_SCHEMA)/db_schema/migrations -s $(DBMATE_DB_SCHEMA)/db_schema/schema.sql new "$$COMMENT"

.PHONY: migrate-status
migrate-status: ## マイグレーションステータス確認
	@DATABASE_URL=$(DATABASE_URL) dbmate -d $(DBMATE_DB_SCHEMA)/db_schema/migrations -s $(DBMATE_DB_SCHEMA)/db_schema/schema.sql status

.PHONY: migrate-up
migrate-up: ## マイグレーション実行
	@DATABASE_URL=$(DATABASE_URL) dbmate -d $(DBMATE_DB_SCHEMA)/db_schema/migrations -s $(DBMATE_DB_SCHEMA)/db_schema/schema.sql up

.PHONY: migrate-down
migrate-down: ## マイグレーションロールバック
	@DATABASE_URL=$(DATABASE_URL) dbmate -d $(DBMATE_DB_SCHEMA)/db_schema/migrations -s $(DBMATE_DB_SCHEMA)/db_schema/schema.sql down

.PHONY: migrate-drop
migrate-drop: ## データベース削除
	@DATABASE_URL=$(DATABASE_URL) dbmate -d $(DBMATE_DB_SCHEMA)/db_schema/migrations -s $(DBMATE_DB_SCHEMA)/db_schema/schema.sql drop

.PHONY: migrate-seed
migrate-seed: ## データベース初期データ投入
	@DATABASE_URL=$(DATABASE_URL) dbmate -d $(DBMATE_DB_SCHEMA)/db_schema/seed -s $(DBMATE_DB_SCHEMA)/db_schema/schema.sql up

.PHONY: migrate-reset
migrate-reset: migrate-drop migrate-up migrate-seed ## マイグレーションリセット

.PHONY: backend/format
backend/format: ## コードのフォーマット
	@goimports -local habit -w ./backend

.PHONY: gen
gen: gen-dbmodel gen-api backend/format ## 生成系のコマンドを実行

.PHONY: gen-dbmodel
gen-dbmodel: clean-dbmodel ## DBモデルを生成
	@go run -mod=mod github.com/xo/xo schema $(DATABASE_URL) --out backend/db_model -e *.created_at -e *.updated_at --src backend/db_model/templates/go 

.PHONY: clean-dbmodel
clean-dbmodel: ## DBモデルを削除
	@rm -rf backend/db_model/*.xo.go

.PHONY: gen-api
gen-api: ## GraphQL API生成
	@gqlgen

.PHONY: serve
serve: serve-api ## サーバーを起動

.PHONY: serve-api
serve-api: ## APIサーバーを起動
	@air

.PHONY: backend/run
backend/run: ## APIサーバーを起動
	@go run -mod=mod ./backend/cmd/api

.PHONY: backend/test
backend/test: ## テストを実行
	@go test -count=1 -race -v ./backend/...

.PHONY: backend/lint
backend/lint: ## Lintを実行
	@golangci-lint run ./...
