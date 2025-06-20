
import './App.css';
import CurrentDate from './components/CurrentDate';
import ReactDatePicker from './components/ReactDatePicker';

function App() {
  return (
    <div className="App">
      <ReactDatePicker/>
      <CurrentDate/>
    </div>
  );
}

export default App;
