import React,{Component} from "react";
class Text extends Component{
  render(){
    const {text,ChangeText,ButtonClick} =this.props
    console.log(text)
    return(
        <div>
          <h4 onClick={ChangeText}>{text}</h4>
          <button onClick={ButtonClick}>click me</button>
        </div>
    )
  }
}
export default Text