package graph

import "github.com/SomaTakata/habit/backend/service"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	TodoSvc service.Todo
	UserSvc service.User
}

func NewResolver(
	todoService service.Todo,
	userService service.User,
) *Resolver {
	return &Resolver{
		TodoSvc: todoService,
		UserSvc: userService,
	}
}
