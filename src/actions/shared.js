import {getInitialData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {recieveTweets} from '../actions/tweets'
import {setAuthedUser} from '../actions/authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData(){
    return(dispatch) =>{
        dispatch(showLoading())
        return getInitialData().then(({users, tweets}) => {
            dispatch(receiveUsers(users))
            dispatch(recieveTweets(tweets))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}