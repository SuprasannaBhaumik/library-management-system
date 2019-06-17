import { Profile } from "../model/Profile";

import { State } from "../../state/index";

export const getSelectedProfile =
    (state: State) => state.login.profile;


export interface LoginState {
	profile: Profile;
}