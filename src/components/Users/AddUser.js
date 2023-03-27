import React, { useState } from "react";
import Card from "../UI/Card";
import style from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [User, setUser] = useState("");
  const [Age, setAge] = useState("");
  const [Error,setError]=useState();

  const fun1 = (event) => {
    event.preventDefault();
    if(User.trim().length ===0 || Age.trim().length === 0)
    {
        setError({title:"Invalid Input", message:"Please enter valid name and age(non empty values)"})
        return
    }
    if(+Age < 1)
    {
      setError({title:"Invalid Age", message:"Please enter valid age(>0)"})
      return
    }
    props.onAddUser(User,Age);
    setAge('');
    setUser('');
  };

  const onchangeUser = (event) => {
    setUser(event.target.value);
  };
  const onchangeAge = (event) => {
    setAge(event.target.value);
  };
  const onCancel=()=>{
    setError(null);
  }

  return (
    <div>
    {Error && <ErrorModal title={Error.title} cancel={onCancel}  message={Error.message}/>}
    <Card style={style.input}>
      <form onSubmit={fun1}>
        <label htmlFor="username">Username</label>
        <input value={User} id="username" type="text" onChange={onchangeUser} />
        <label htmlFor="age">Age(Years)</label>
        <input value={Age} id="age" type="number" onChange={onchangeAge} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
}

export default AddUser;
