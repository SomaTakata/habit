package service

import (
	"context"

	"github.com/SomaTakata/habit/backend/graph/model"
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
func (s *Todo) List(ctx context.Context) ([]*model.Todo, error) {
	return s.todoRepo.List(ctx, s.db)
}
