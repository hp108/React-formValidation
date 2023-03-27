import React from 'react'
import Card from '../UI/Card'
import styles from './UserList.module.css'

function UserList(props) {
  return (
    <Card style={styles.users}  >
        <ul>
            {props.user.map(user=>{
                return(
                <li key={user.id} >
                   {user.name} is ({user.age} years old) 
                </li> )
            })}


        </ul>







    </Card>
  )
}

export default UserList