import React from 'react'
import Card from '../UI/Card'
import styles from './UserList.module.css'

function UserList(props) {
  return (
<div>
  {props.user.length >0 && <Card style={styles.users}  >
        <ul>
            {props.user.map(user=>{
                return(
                <li key={user.id} >
                   {user.name} is ({user.age} years old) 
                </li> )
            })}
        </ul>
    </Card>}
    {props.user.length === 0 && <Card style={styles.users}>
      <ul>
            <li>No users Found</li>

      </ul>
      
      </Card>}
   </div>
    
  )
}

export default UserList