import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber } from './actions/counter';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Item>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" className="counter">
            <Button onClick={() => dispatch(incNumber())}>+</Button>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={counterState} />
            <Button onClick={() => dispatch(decNumber())}>-</Button>
          </ButtonGroup>
        </Item>
      </Grid>
    </Grid>
  );
}

export default App;
