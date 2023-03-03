import './App.css';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar'
import Event from './components/Event'
import Details from './components/Details';
import TellUs from './components/TellUs';

function App() {
  return (
    <>
    <Navbar Home="Home" Photos="Photos" TellUs="Tell us" Values="Values"></Navbar>
    <Event></Event>
    <Details></Details>
    <TellUs></TellUs>
    </>
  );
}

Navbar.propTypes = {
    Home: PropTypes.string.isRequired, 
    Photos: PropTypes.string.isRequired,
    Values: PropTypes.string.isRequired,
    TellUs: PropTypes.string.isRequired, 
}
Navbar.defaultProps = {
  Home : "Link 1",
  Photos : "Link 2", 
  Values : "Link 3", 
  TellUs: "Link 4",
}
export default App;
