package service

import (
	"context"

	"github.com/SomaTakata/habit/backend/db_model"
	"github.com/SomaTakata/habit/backend/pkg/errors"
	"github.com/SomaTakata/habit/backend/repository"
	"gorm.io/gorm"
)

type Todo struct {
	db       *gorm.DB
	todoRepo repository.Todo
}

func NewTodo(db *gorm.DB, todoRepo repository.Todo) Todo {
	return Todo{
		db:       db,
		todoRepo: todoRepo,
	}
}
func (s *Todo) List(ctx context.Context) ([]*db_model.Todo, error) {
	rows, err := s.todoRepo.List(ctx, s.db)
	if err != nil {
		return nil, errors.Wrap(err)
	}
	return rows, nil
}
