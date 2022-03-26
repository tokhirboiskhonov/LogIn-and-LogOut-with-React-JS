import React from 'react';
import './App.css';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import {Context} from './Context/Authentication'

function App() {

  const {token} = React.useContext(Context)


  if(token){
    return <AuthenticatedApp/>
  }else{
    return <UnauthenticatedApp/>
  }
  }
  export default App;
  