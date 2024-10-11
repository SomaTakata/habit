package model

import "habit/backend/db_model"

func FormatUserResponse(row *db_model.User) *User {
	return &User{
		ID:       row.ID,
		Username: row.Username,
	}
}
