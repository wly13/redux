import React,{Component} from "react";
import CounterApp from "../containers/CounterApp";
import TextApp from "../containers/TextApp"
class App extends Component{
  render(){
    return(
        <div>
          <CounterApp/>
          <TextApp/>
        </div>
    )
  }
}
export default App;
