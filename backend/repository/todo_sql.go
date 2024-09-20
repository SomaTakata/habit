package repository

import (
	"context"

	"github.com/SomaTakata/habit/backend/graph/model"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

type todo struct{}

func NewTodo() Todo { return todo{} }

func (r todo) List(ctx context.Context, db *gorm.DB) ([]*model.Todo, error) {
	var todos []*model.Todo
	if err := db.Find(&todos).Error; err != nil {
		return nil, errors.Wrap(err, "failed to list todos")
	}
	return todos, nil
}
