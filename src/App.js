import './App.css';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar'
import Event from './components/Event'
import Details from './components/Details';

function App() {
  return (
    <>
    <Navbar Home="Home" Photos="Photos" Vision="Vision" Values="Values"></Navbar>
    <Event></Event>
    <Details></Details>
    </>
  );
}

Navbar.propTypes = {
    Home: PropTypes.string.isRequired, 
    Photos: PropTypes.string.isRequired,
    Vision: PropTypes.string.isRequired,
    Values: PropTypes.string.isRequired, 
}
Navbar.defaultProps = {
  Home : "Link 1",
  Photos : "Link 2", 
  Vision : "Link 3",
  Values : "Link 4"
}
export default App;
