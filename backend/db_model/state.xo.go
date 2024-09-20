package db_model

// Code generated by xo. DO NOT EDIT.

import (
	"database/sql/driver"
	"fmt"
)

// State is the 'state' enum type from schema 'habit'.
type State uint16

// State values.
const (
	// StateActive is the 'active' state.
	StateActive State = 1
	// StateLocked is the 'locked' state.
	StateLocked State = 2
)

// String satisfies the [fmt.Stringer] interface.
func (s State) String() string {
	switch s {
	case StateActive:
		return "active"
	case StateLocked:
		return "locked"
	}
	return fmt.Sprintf("State(%d)", s)
}

// MarshalText marshals [State] into text.
func (s State) MarshalText() ([]byte, error) {
	return []byte(s.String()), nil
}

// UnmarshalText unmarshals [State] from text.
func (s *State) UnmarshalText(buf []byte) error {
	switch str := string(buf); str {
	case "active":
		*s = StateActive
	case "locked":
		*s = StateLocked
	default:
		return ErrInvalidState(str)
	}
	return nil
}

// Value satisfies the [driver.Valuer] interface.
func (s State) Value() (driver.Value, error) {
	return s.String(), nil
}

// Scan satisfies the [sql.Scanner] interface.
func (s *State) Scan(v interface{}) error {
	switch x := v.(type) {
	case []byte:
		return s.UnmarshalText(x)
	case string:
		return s.UnmarshalText([]byte(x))
	}
	return ErrInvalidState(fmt.Sprintf("%T", v))
}

// NullState represents a null 'state' enum for schema 'habit'.
type NullState struct {
	State State
	// Valid is true if [State] is not null.
	Valid bool
}

// Value satisfies the [driver.Valuer] interface.
func (ns NullState) Value() (driver.Value, error) {
	if !ns.Valid {
		return nil, nil
	}
	return ns.State.Value()
}

// Scan satisfies the [sql.Scanner] interface.
func (ns *NullState) Scan(v interface{}) error {
	if v == nil {
		ns.State, ns.Valid = 0, false
		return nil
	}
	err := ns.State.Scan(v)
	ns.Valid = err == nil
	return err
}

// ErrInvalidState is the invalid [State] error.
type ErrInvalidState string

// Error satisfies the error interface.
func (err ErrInvalidState) Error() string {
	return fmt.Sprintf("invalid State(%s)", string(err))
}
