package repository

import (
	"context"

	"gorm.io/gorm"

	"habit/backend/db_model"
)

type User interface {
	Get(ctx context.Context, db *gorm.DB, id string) (*db_model.User, error)
}
