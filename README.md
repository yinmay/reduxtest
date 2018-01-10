### install create-react-app, redux

```
const greeting = ()=>({welcome:'hello'})
console.log(store.getState())

```
* defaultstate, first create the reducer
* then create a store and using the reducer(the only reducer) and create a redux store
* getState is to see the state of our current redux store looks like
* `action.type`reducer get the state and action and output new state
* dispatch, a method of store, is to output the state under that action 
* `...state` can keep our previous state
```
//#1 const greeting = ()=>({welcome:'hello'})// the function == reducer
const defaultState = {
  welcome:'hi',
  otherState:'some stuff'
}
const greeting = (state = defaultState, action)=>{
 switch (action.type){
  case 'GREET_ME':
    return {...state, welcome:'hello mei'};//...state can keep our previous state and only modify what we want to modify
  case 'GREET_WORLD':
    return {...state, welcome:'hello world'}
  default:
   return state;
 }
}  
//#2
const store = createStore(greeting)//create store the function

console.log(store.getState())
//#3
store.dispatch({
  type:'GREET_ME'
})

console.log(store.getState())
```

