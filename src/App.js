import './App.css';
import ClockF from './Components/ClockF';
import ToggleF from './Components/ToggleF';
import UserList from './Components/UserList';
import NoticeList from './Components/NoticeList';
import '@fontsource/roboto';
import { AppBar, Container, IconButton, Toolbar } from '@material-ui/core';

function App() {
  const users = [{id: "1", name: "Kim In Yeob", age: 24, sex: "남"}];

  return (
    <div>
      <Container maxWidth="sm">
        <AppBar position="static">
          <Toolbar>
            <IconButton>
              
            </IconButton>
            <ClockF></ClockF>
          </Toolbar>
        </AppBar>
        <ToggleF></ToggleF>
        <UserList users={users}></UserList>
        <NoticeList></NoticeList>
      </Container>
    </div>
  );
}

export default App;
