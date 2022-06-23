import React, { useState } from 'react'
import { List, ListItem, ListItemAvatar, ListItemText, Modal, Button } from '@mui/material';
import './Todo.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import db from './firebase';
import { alpha } from '@mui/material/styles';

const useStyles = alpha((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();


  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({

      todo: input
    }, { merge: true });
    setOpen(false);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={e => setOpen(false)}
      >
        <div className={classes.paper}>
          <h1>Edit Post</h1>
          <input value={input} onChange={event => setInput(event.target.value)} />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>

      </Modal>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar>
          </ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Dummy Deadline ⏰" />
        </ListItem>
        <button onClick={e => setOpen(true)}>EDIT</button>
        <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
      </List>
    </>
  )
};

export default Todo;