package gorm

import (
	"fmt"
	"time"

	"github.com/SomaTakata/habit/backend/env"
	"github.com/SomaTakata/habit/backend/pkg/errors"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	gormlogger "gorm.io/gorm/logger"
)

// PostgreSQL用の設定を作成
func NewDefaultPostgresConfig() string {
	conf := env.Get().RDB
	// DSN（Data Source Name）を作成
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=%s",
		conf.Address, conf.User, conf.Password, conf.Name, conf.Port, time.Local)
	return dsn
}

// DBオープン処理
func Open(postgresDSN string, logger gormlogger.Writer) (*gorm.DB, error) {
	db, err := openDB(postgresDSN, logger)
	if err != nil {
		return nil, errors.Wrap(err)
	}
	return db, nil
}

// PostgreSQL用のDBオープン
func openDB(postgresDSN string, logger gormlogger.Writer) (*gorm.DB, error) {
	gormLogger := gormlogger.New(
		logger,
		gormlogger.Config{
			LogLevel:                  gormlogger.Info, // ログレベル
			IgnoreRecordNotFoundError: true,            // ErrRecordNotFoundエラーを無視
			Colorful:                  true,
		},
	)
	db, err := gorm.Open(
		postgres.Open(postgresDSN),
		&gorm.Config{
			Logger: gormLogger,
		},
	)
	if err != nil {
		return nil, errors.Wrap(err)
	}
	return db, nil
}
