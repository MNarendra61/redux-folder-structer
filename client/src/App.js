// import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {INACTION} from './action'
import {DECACTION} from './action'

const App = ({local_variable,INACTION,DECACTION}) => {
  return (
    <div >
      <center>
      <h1>{local_variable}</h1> <br></br>
      <button onClick={INACTION}>INCREMENT</button>
      <button onClick={DECACTION}>DECREMENT</button>
      </center>
    </div>
  );
}
const mapStateToProps = state =>({
local_variable : state
})
export default  connect(mapStateToProps,{INACTION,DECACTION})(App);
