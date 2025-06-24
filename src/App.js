
import './App.css';
import CurrentDate from './components/CurrentDate';
import ReactDatePicker from './components/ReactDatePicker';
import ReactDatePickerCustomRange from './components/ReactDatePickerCustomRange';

import RestricDefineDates from './components/RestricDefineDates';

function App() {
  return (
    <div className="App">
      <ReactDatePicker/>
      <CurrentDate/>
      <RestricDefineDates/>
      <ReactDatePickerCustomRange/>    
    </div>
  );
}

export default App;
