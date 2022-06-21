import React from 'react'
import { List, ListItem, ListItemAvatar, ListItemText, Button} from '@mui/material';
import './Todo.css';
import db from './firebase';

function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy Deadline ⏰" />
      </ListItem>
      <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>DELETE POST</Button>
    </List>
  )
}

export default Todo