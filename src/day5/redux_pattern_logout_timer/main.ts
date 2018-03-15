import {combineReducers, StoreModule} from "@ngrx/store";
import {counterReducer} from "./app.reducer";
import {initialState} from "./state.model";
import {AppComponent} from "./app.component";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AutoLogoutService} from "./auto-logout.service";
import {usersRecuder} from "./users.reducer";
import {CounterComponent} from "./counter-component";

function LoginReducer(state, action): boolean {
	switch (action.type) {
		case "USER_LOGGED_IN":
			return true;
		case "USER_LOGGED_OUT":
		case "ACTIVITY_TIMEOUT_OCCURRED":
			return false;
		default:
			return state;
	}
}

@NgModule({
	declarations: [AppComponent, CounterComponent],
	imports: [BrowserModule, StoreModule.forRoot({
		counter: counterReducer,
		users: usersRecuder,
		loggedIn: LoginReducer
	})],
	bootstrap: [AppComponent],
	providers: [AutoLogoutService]
})
class AppModule {
	constructor(al: AutoLogoutService) {
		al.start();
	}

}

platformBrowserDynamic().bootstrapModule(AppModule).catch((e) => console.error(e));

