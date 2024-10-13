package repository

import (
	"context"
	pkgerrors "errors"

	app "habit/backend"
	"habit/backend/db_model"
	"habit/backend/pkg/errors"

	"gorm.io/gorm"
)

type user struct{}

func NewUser() User { return user{} }

func (r user) Get(ctx context.Context, db *gorm.DB, id string) (*db_model.User, error) {
	var user db_model.User
	if err := db.WithContext(ctx).Where("id = ?", id).First(&user).Error; err != nil {
		if pkgerrors.Is(err, gorm.ErrRecordNotFound) {
			return nil, errors.Wrap(app.ErrUserNotFound)
		}
		return nil, errors.Wrap(err)
	}
	return &user, nil
}
