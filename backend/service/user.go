package service

import (
	"github.com/SomaTakata/habit/backend/repository"
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
