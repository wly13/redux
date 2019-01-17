import {connect} from "react-redux";
import {add,subtract} from "../actions";
import Counter from "../components/Counter"
const mapStateToProps=(state) =>({
    ...state
})
const mapDispatchToProps=(dispatch) =>({
  addButton:()=>dispatch(add()),
  subtractButton:()=>dispatch(subtract())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

