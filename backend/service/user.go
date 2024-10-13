package service

import (
	"context"

	"habit/backend/db_model"
	"habit/backend/pkg/errors"
	"habit/backend/repository"

	"gorm.io/gorm"
)

type User struct {
	db       *gorm.DB
	userRepo repository.User
}

func NewUser(db *gorm.DB, userRepo repository.User) User {
	return User{
		db:       db,
		userRepo: userRepo,
	}
}

func (s *User) Get(ctx context.Context,
	id string) (*db_model.User, error) {
	row, err := s.userRepo.Get(ctx, s.db, id)
	if err != nil {
		return nil, errors.Wrap(err)
	}
	return row, nil
}
