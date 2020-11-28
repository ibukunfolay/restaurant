import { PROFILE_LIST_REQUEST, PROFILE_LIST_SUCCESS, PROFILE_LIST_FAIL} from "../constants/homeConstants"

function profileListReducers(state={data: {}}, action){
    switch (action.type){

        case PROFILE_LIST_REQUEST:
        return {loading: true}

        case PROFILE_LIST_SUCCESS:
        return {loading: false, data: action.payload}

        case PROFILE_LIST_FAIL:
        return {loading: false, error: action.payload}

        default:
            return state

    }

}

export {profileListReducers}
