package db_model

// Code generated by xo. DO NOT EDIT.

// Todo represents a row from 'public.todos'.
type Todo struct {
	ID     int    `json:"id"`      // id
	Text   string `json:"text"`    // text
	Done   bool   `json:"done"`    // done
	UserID int    `json:"user_id"` // user_id
}
