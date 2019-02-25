//export our invocation to combine reducers

import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import tweets from '/tweets'

export default combineReducers({
    authedUser,
    users,
    tweets
})