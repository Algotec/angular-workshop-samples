import {Action, ActionReducer} from "@ngrx/store";

export interface ActionWithPayload extends Action {
	payload?: any;
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";

// This is the action fired when the activity timeout occured.
//  We keep it generic so the reducer can take any number 
//  of actions based on it (including perhaps none)
//
export const ACTIVITY_TIMEOUT_OCCURRED = "ACTIVITY_TIMEOUT_OCCURRED";

export const counterReducer: ActionReducer<number> = (counter: number, action: ActionWithPayload): number => {
	switch (action.type) {
		case INCREMENT:
			return counter + (+action.payload);
		case DECREMENT:
			return counter--;
		case RESET:
			return 0;
		default:
			return counter;
	}

}