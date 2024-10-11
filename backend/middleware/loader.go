package middleware

import (
	"net/http"

	"habit/backend/loader"
	"habit/backend/service"
)

func LoaderMiddleware(userSvc service.User) func(next http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			loaders := loader.New(userSvc)
			next.ServeHTTP(w, r.WithContext(loaders.Attach(r.Context())))
		})
	}
}
