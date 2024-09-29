package db_model

// Code generated by xo. DO NOT EDIT.

import (
	"database/sql"
)

// Notification represents a row from 'habit.notifications'.
type Notification struct {
	ID               string           `json:"id"`                // id
	UserID           string           `json:"user_id"`           // user_id
	ActorID          sql.NullString   `json:"actor_id"`          // actor_id
	NotificationType NotificationType `json:"notification_type"` // notification_type
	ObjectID         string           `json:"object_id"`         // object_id
	IsRead           bool             `json:"is_read"`           // is_read
}
