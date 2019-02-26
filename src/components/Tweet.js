import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatTweet} from '../utils/helpers'

class Tweet extends Component{
    render(){
        const { tweet } = this.props
        if(tweet === null){
            return <p> This Tweet doesn't existed </p>
        }

        console.log(this.props)
        
        return(
            <div className ='tweet'>
                
            </div>
    )}
}
//ownProps (optional)
//You may define the function with a second argument, ownProps, if your component needs the data from its own props to 
//retrieve data from the store. This argument will contain all of the props given to the wrapper component that was generated 
//by connect.
//ownProps recieved as {id}
function mapStateToProps({authedUser,users,tweets}, {id}){
    const tweet = tweets[id]
    const parentTweet =tweet? tweets[tweet.replyingTo] : null
    return{
        authedUser,
        tweet: 
        tweet ? formatTweet(tweet, users[tweet.author],authedUser,parentTweet)
        : null
    }
}

export default connect(mapStateToProps)(Tweet)