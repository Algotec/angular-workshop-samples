import {Action} from "@ngrx/store";
import {User} from "./state.model";
import {ActionWithPayload} from "./app.reducer";

export type UserState = User[];

export function usersRecuder(state: UserState, action: ActionWithPayload): UserState {
	switch (action.type) {
		case 'ADD_USER':
			return [...state, {firstName: action.payload}];
		case 'DEL_USER':
			let index = action.payload;
			return [...state.slice(0, index), ...state.slice(index + 1)];
		default:
			return state;
	}
}