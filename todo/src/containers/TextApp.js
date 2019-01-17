import {connect} from 'react-redux';
import Text from "../components/Text"
import {ChangeTextAction,ButtonClickAction} from "../actions";

function mapStateToProps(state) {
  return {
    text:state.TextReducer.text
  };
}
const mapDispatchToProps=(dispatch) =>({
  ChangeText:()=>dispatch(ChangeTextAction()),
  ButtonClick:() =>dispatch(ButtonClickAction())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Text);