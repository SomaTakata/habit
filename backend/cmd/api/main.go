package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/SomaTakata/habit/backend/graph"
	gormpkg "github.com/SomaTakata/habit/backend/pkg/gorm"
	"github.com/SomaTakata/habit/backend/repository"
	"github.com/SomaTakata/habit/backend/service"
)

const defaultPort = "8080"

func main() {
	// 環境変数からポートを取得。存在しない場合はデフォルト値8080を使用
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	// DB接続の初期化とエラーハンドリング
	db, err := gormpkg.Open(gormpkg.NewDefaultPostgresConfig(), &log.Logger{})
	if err != nil {
		log.Fatalf("failed to connect to the database: %v", err)
	}

	// リポジトリとサービスの初期化
	todoRepo := repository.NewTodo()
	userRepo := repository.NewUser()
	todoSvc := service.NewTodo(db, todoRepo)
	userSvc := service.NewUser(db, userRepo)

	// GraphQLのサーバー設定
	config := graph.Config{Resolvers: graph.NewResolver(todoSvc, userSvc)}
	srv := handler.NewDefaultServer(graph.NewExecutableSchema(config))

	// HTTPハンドラの設定
	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	// サーバー起動
	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
