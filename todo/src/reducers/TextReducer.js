const initState={
  text:"hello"
}
const TextReducer = (state=initState,action) =>{
  switch (action.type) {
    case "CHANGE_TEXT":
      if (state.text==="hello") {
        return Object.assign({},state,{
          text:"world"
        })
      }else {
        return Object.assign({},state,{
          text:"hello"
        })
      }
      // state.text==="hello"?"world":"hello"
    case "BUTTON_CLICK":
      return Object.assign({},state,{
        text:"hello world"
      })
      // state.text="hello world"
    default:
      return state
  }
}
export default TextReducer