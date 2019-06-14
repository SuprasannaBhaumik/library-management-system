import { Profile } from "../model/Profile";

import { State } from "../../state/index";

export const getSelectedProfile =
    (state: State) => state.login.data.profile;


export interface LoginState {
    data: {
        profile: Profile
    }
}