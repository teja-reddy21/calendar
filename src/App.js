
import './App.css';
import CurrentDate from './components/CurrentDate';

import ReactDatePicker from './components/ReactDatePicker';
import ReactDatePickerCustomRange from './components/ReactDatePickerCustomRange';
import CustomDatePickerDarkTheme from './components/ReactDatePickerDarkTheme/CustomDatePickerDarkTheme';

import RestricDefineDates from './components/RestricDefineDates';

function App() {
  return (
    <div className="App">
      <ReactDatePicker/>
      <CurrentDate/>
      <RestricDefineDates/>
      <ReactDatePickerCustomRange/>  
     <CustomDatePickerDarkTheme/>
    </div>
  );
}

export default App;
