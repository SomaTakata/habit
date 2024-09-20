package test

import (
	"github.com/google/uuid"

	"habit/backend/pkg/tenant"
)

func RandomTenantID() tenant.ID {
	return tenant.ID(uuid.NewString())
}
