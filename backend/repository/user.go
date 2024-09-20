package repository

import (
	"context"

	"gorm.io/gorm"

	"habit/backend/db_model"
	"habit/backend/pkg/tenant"
)

type User interface {
	Create(ctx context.Context, db *gorm.DB, tenantID tenant.ID, user *db_model.User) (*db_model.User, error)
	List(ctx context.Context, db *gorm.DB, tenantID tenant.ID) ([]*db_model.User, error)
	BatchGet(ctx context.Context, db *gorm.DB, tenantID tenant.ID, ids []string) ([]*db_model.User, error)
}
