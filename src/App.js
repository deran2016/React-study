import './App.css';
import Clock from './Components/Clock';
import ClockF from './Components/ClockF';
import Toggle from './Components/Toggle';
import ToggleF from './Components/ToggleF';
import List from './Components/List';
import UserList from './Components/UserList';
import NoticeList from './Components/NoticeList';
import '@fontsource/roboto';

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const users = [{id: "1", name: "Kim In Yeob", age: 24, sex: "남"}];

  return (
    <div>
      <Clock></Clock>
      <ClockF></ClockF>
      <Toggle></Toggle>
      <ToggleF></ToggleF>
      <List numbers={numbers}></List>
      <UserList users={users}></UserList>
      <NoticeList></NoticeList>
    </div>
  );
}

export default App;
