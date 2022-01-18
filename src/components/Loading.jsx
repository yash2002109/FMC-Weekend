import { CircularProgress } from '@mui/material';
import "./Loading.css";

function Loading() {
  return (
    <div className="loading_div">
      <CircularProgress />
    </div>
  );
}

export default Loading;
