import React from 'react'
import { List, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import './Todo.css';

function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary="Dummy Deadline ⏰" />
      </ListItem>
    </List>
  )
}

export default Todo