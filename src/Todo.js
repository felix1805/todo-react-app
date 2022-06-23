import React, { useState } from 'react'
import { List, ListItem, ListItemAvatar, ListItemText, Modal, Button, Typography, Box } from '@mui/material';
import './Todo.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import db from './firebase';

const style = {
  paper: {
    position: 'absolute',
    width: 400,
    height: 150,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 'spacing(2, 4, 3)',
    textAlign: 'center',

  },
};

function Todo(props) {
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
        <div>
        <Box sx={style.paper}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Post
          </Typography>
          <input value={input} onChange={event => setInput(event.target.value)} />
          <Button onClick={updateTodo}>Update Todo</Button>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Edit Post and Update to Server
          </Typography>
        </Box>
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