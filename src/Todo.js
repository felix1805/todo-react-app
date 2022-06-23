import React, { useState } from 'react'
import { List, ListItem, ListItemAvatar, ListItemText, Modal, Button, Typography, Box, FormControl, Input, InputLabel, Fab  } from '@mui/material';
import './Todo.css';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import EditIcon from '@mui/icons-material/Edit';
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
          <Typography id="modal-modal-title" variant="h4" component="h3">
            Edit Post
          </Typography>
          <form>
            <FormControl>
              <InputLabel>✅ Update a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button onClick={updateTodo}  variant="contained" color="secondary">Update</Button>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            Edit Post and Update to Server
          </Typography>
          </FormControl>
          </form>
        </Box>
        </div>

      </Modal>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar>
          </ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Posted To Database" />
        </ListItem>
        <Fab size="small" onClick={e => setOpen(true)}color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
        <DeleteForeverTwoToneIcon fontSize="large" onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
      </List>
    </>
  )
};

export default Todo;