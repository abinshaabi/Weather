import './App.css';
import Navbar from './components/Navbar';
import DefaultHOC from './HOC/Default.HOC';

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Navbar} />
    </>
  );
}

export default App;
