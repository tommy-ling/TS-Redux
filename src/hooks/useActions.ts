import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actionCreators, dispatch)
  // bindActionCreators returns back something similar to this:
  // { searchRepositories: dispatch(searchRepositories) }
  // note that searchRepositories is one key-value pair inside the actionCreators object
}