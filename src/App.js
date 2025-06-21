
import './App.css';
import CurrentDate from './components/CurrentDate';
import ReactDatePicker from './components/ReactDatePicker';
import RestricDefineDates from './components/RestricDefineDates';

function App() {
  return (
    <div className="App">
      <ReactDatePicker/>
      <CurrentDate/>
      <RestricDefineDates/>
    </div>
  );
}

export default App;
