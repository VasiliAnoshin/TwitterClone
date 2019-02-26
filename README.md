# Chirper Project

This repo is a code-along with the first project in the [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

Most of the commits in this repository correspond to videos in the program.

## Project Setup

* clone the Project - `git@github.com:udacity/reactnd-chirper-app.git`
* install the dependencies - `npm install`

## Contributing

Because this is a code-along project and the commits correspond to specific videos in the program, we will not be accepting pull requests.

If you feel like there's a major problem, please open an issue to discuss the problem and potential resolution.

## License

MIT

mapStateToProps - If this argument is specified, the new component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the component’s props. If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.

Why don't I have this.props.dispatch available in my connected component?
The connect() function takes two primary arguments, both optional. The first, mapStateToProps, is a function you provide to pull data from the store when it changes, and pass those values as props to your component. The second, mapDispatchToProps, is a function you provide to make use of the store's dispatch function, usually by creating pre-bound versions of action creators that will automatically dispatch their actions as soon as they are called.

If you do not provide your own mapDispatchToProps function when calling connect(), React Redux will provide a default version, which simply returns the dispatch function as a prop. That means that if you do provide your own function, dispatch is not automatically provided. If you still want it available as a prop, you need to explicitly return it yourself in your mapDispatchToProps implementation.
