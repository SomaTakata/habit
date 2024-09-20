package repository

import (
	"context"

	"github.com/SomaTakata/habit/backend/db_model"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

type todo struct{}

func NewTodo() Todo { return todo{} }

func (r todo) List(ctx context.Context, db *gorm.DB) ([]*db_model.Todo, error) {
	var todos []*db_model.Todo
	if err := db.Find(&todos).Error; err != nil {
		return nil, errors.Wrap(err, "failed to list todos")
	}
	return todos, nil
}
