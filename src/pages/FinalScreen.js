import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScreen = () => {
  const { score } = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePlayAgain = () => {
    dispatch(handleScoreChange(0))
    dispatch(handleAmountChange(50))
    navigate("/")
  }


  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>Final Score {score}</Typography>
      <Button variant="contained" onClick={handlePlayAgain} >Play Again!</Button>
    </Box>
  )
};

export default FinalScreen;
