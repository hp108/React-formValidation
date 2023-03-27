import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [List,setList]= useState([]);


  const fun1 = (userName,Age)=>{
    setList((prev)=>{
      return(
      [...prev,{name:userName,age:Age,id:Math.random().toString()}])
    })

  }

  return (
    <div>
        <AddUser onAddUser={fun1}  />
        <UserList user={List}  />
    </div>
  );
}

export default App;
