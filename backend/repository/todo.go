package repository

import (
	"context"

	"github.com/SomaTakata/habit/backend/graph/model"
	"gorm.io/gorm"
)

type Todo interface {
	List(ctx context.Context, db *gorm.DB) ([]*model.Todo, error)
}
