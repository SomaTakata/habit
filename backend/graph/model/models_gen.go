// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type CreateUserInput struct {
	// ユーザ名
	Username string `json:"username"`
	// プロフィール画像のURL
	ProfileImageURL *string `json:"profileImageUrl,omitempty"`
	// 自己紹介
	Bio *string `json:"bio,omitempty"`
}

type Mutation struct {
}

type Query struct {
}

type UpdateUserInput struct {
	// ユーザーID
	ID string `json:"id"`
	// ユーザー名
	Username *string `json:"username,omitempty"`
	// プロフィール画像のURL
	ProfileImageURL *string `json:"profileImageUrl,omitempty"`
	// 自己紹介
	Bio *string `json:"bio,omitempty"`
}

type User struct {
	// ユーザーの一意なID（Supabase Authから取得）
	ID string `json:"id"`
	// ユーザー名（システム内で表示される名前）
	Username string `json:"username"`
}
