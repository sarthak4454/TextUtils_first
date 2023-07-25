
import React , {useState} from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from  './components/TextForm'
import Alert from './components/Alert';


function App() {
  
const[Mode,setMode]= useState('light');
const[alert,SetAlert]= useState(null);
const ShowAlert = (message,type)=>{
SetAlert({
  msf: message,
  type:type
})
}
  return (
    <div className="App">
    <NavBar title='TextUtils' mode={Mode}/>;
    <Alert alert={alert}/>
   <div className='container'>
    <TextForm/>
   </div>
     </div>
  );
}

export default App;
