import { Box, FormControl, TextField } from '@mui/material'
import { useDispatch } from 'react-redux/es/exports';
import React from 'react'
import { handleAmountChange } from '../redux/actions';

function TextFieldComp() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value))
  }

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField onChange={handleChange} variant="outlined" label="Amount of Questions" type="number" size="small"></TextField>
      </FormControl>
    </Box>
  )
}

export default TextFieldComp