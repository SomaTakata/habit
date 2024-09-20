package model

import (
	"habit/backend/db_model"
	"habit/backend/pkg/errors"
	"habit/backend/pkg/null"

	"github.com/iancoleman/strcase"
)

func FormatUserResponse(row *db_model.User) *User {
	return &User{
		ID:   row.ID,
		Name: row.Name,
	}
}

func FormatCardResponse(row *db_model.Card) (*Card, error) {
	var s CardState
	if err := s.UnmarshalGQL(strcase.ToScreamingSnake(row.State.String())); err != nil {
		return nil, errors.Wrap(err)
	}
	return &Card{
		ID:               row.ID,
		Name:             row.Name,
		OwnerID:          row.OwnerID,
		State:            s,
		LastFour:         null.FromSQLNullString(row.LastFour),
		ExpirationMonth:  null.FromSQLNullInt64ToUint(row.ExpirationMonth),
		ExpirationYear:   null.FromSQLNullInt64ToUint(row.ExpirationYear),
		Description:      row.Description,
		OnceMaxAmount:    null.FromSQLNullInt64ToUint32(row.OnceMaxAmount),
		MonthlyMaxAmount: null.FromSQLNullInt64ToUint32(row.MonthlyMaxAmount),
		TotalMaxAmount:   null.FromSQLNullInt64ToUint(row.TotalMaxAmount),
		StartDate:        null.FromSQLNullTimeToDate(row.StartDate),
		EndDate:          null.FromSQLNullTimeToDate(row.EndDate),
		ModifiedAt:       row.ModifiedAt,
	}, nil
}
