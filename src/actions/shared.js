import {getInitialData} from '../utils/api'
import {recieveUsers} from '../actions/users'
import {receiveTweets} from '../actions/tweets'

export function handleInitialData(){
    return(dispatch) =>{
        return getInitialData().then(({users, tweets}) => {
            dispatch(recieveUsers(users))
            dispatch(receiveTweets(tweets))
        })
    }
}