package repository

import (
	"context"

	"github.com/SomaTakata/habit/backend/db_model"
	"gorm.io/gorm"
)

type Todo interface {
	List(ctx context.Context, db *gorm.DB) ([]*db_model.Todo, error)
}
