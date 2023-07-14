import { useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { addTodo, deleteTodo } from './actions/todo';
import { useSelector, useDispatch } from 'react-redux';
import { Chip } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

/**
 * Renders a list of search result.
 * @param {object} searchResult 
 */
const List = ({ todos, handler }) => (
    todos.map((todo, index) => (
        <Chip key={index} label={todo} onDelete={(e) => handler(e, todo)} />
    ))
);


function Todo() {
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const handleChange = () => {
        const inputVal = inputRef.current.value;
        if (inputVal !== "")
            dispatch(addTodo(inputVal));
    }

    const handleDelete = (e, todo) => {
        e.preventDefault();
        dispatch(deleteTodo(todo));
    }

    return (
        <Grid container >
            <Grid item xs={12}>
                <Item>
                    <TextField inputRef={inputRef} label="Outlined" variant="outlined" placeholder="type your todo" />
                    <Button onClick={handleChange}>Add</Button>
                </Item>
                <Item>
                    {todos.todos?.length ? <List todos={todos.todos} handler={handleDelete} /> : "No Todos Added"}
                </Item>
            </Grid>
        </Grid>
    );
}

export default Todo;