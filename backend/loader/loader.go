package loader

import (
	"context"

	"github.com/vikstrous/dataloadgen"

	"habit/backend/db_model"
	"habit/backend/service"
)

type Loaders struct {
	UserLoader *dataloadgen.Loader[string, *db_model.User]
}

func New(userSvc service.User) *Loaders {
	return &Loaders{
		UserLoader: dataloadgen.NewLoader(newUserLoader(userSvc)),
	}
}

type loadersKey struct{}

func (l *Loaders) Attach(ctx context.Context) context.Context {
	ctx = context.WithValue(ctx, loadersKey{}, l)
	return ctx
}

func getLoaders(ctx context.Context) *Loaders {
	return ctx.Value(loadersKey{}).(*Loaders)
}
