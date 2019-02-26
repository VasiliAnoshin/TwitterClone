
const logger = (store) => (next) =>(action)=> {
    console.group(action.type)
        console.log('The action: ', action)
        const returnValue = next(action) //call reducer , return next action object and set it to result . 
        console.log('The new state: ', store.getState())
    console.groupEnd()
    return returnValue //Return the next action object to middleware.
}

export default logger