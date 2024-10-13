package loader

import (
	"context"

	"habit/backend/db_model"
	"habit/backend/pkg/errors"
	"habit/backend/service"
)

func newUserLoader(svc service.User) func(context.Context, []string) ([]*db_model.User, []error) {
	return nil
}

func LoadUsers(ctx context.Context, userIDs []string) ([]*db_model.User, error) {
	rows, err := getLoaders(ctx).UserLoader.LoadAll(ctx, userIDs)
	if err != nil {
		return nil, errors.Wrap(err)
	}
	return rows, nil
}
