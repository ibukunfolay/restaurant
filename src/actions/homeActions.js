import Axios from 'axios'
import{ PROFILE_LIST_SUCCESS, PROFILE_LIST_FAIL, PROFILE_LIST_REQUEST} from "../constants/homeConstants"

const listProfile = () => async (dispatch)=>{
try {
    dispatch({type: PROFILE_LIST_REQUEST})
    const files = await Axios.get('https://indapi.kumba.io/webdev/assignment')
    dispatch({type: PROFILE_LIST_SUCCESS, payload: files.data})
    
} catch (error) {
    dispatch({type: PROFILE_LIST_FAIL, payload: error.message})
    
}
}

export {listProfile}
