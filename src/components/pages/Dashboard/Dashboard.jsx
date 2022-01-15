import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../store/auth-context';
import Classes from './Dashboard.module.css';

function Dashboard() {
  const [val, setVal] = useState(0);
  const getUserType = (props) => {
    const token = sessionStorage.getItem('tokenID');
    // ADD API CALL HERE TO DETERMINE THE TYPE OF USER

    return 1;
    // Return 0/1/2 depending on the user type;
  };

  useEffect(() => {
    setVal(getUserType());
    console.log(val);
  }, []);

  return (
    <div className={Classes.container}>
      <h1>Dashboard</h1>
      {val == 0 && (
        <div>
          <h1>
            <a href="#">Events</a>
          </h1>
          <h1>
            <a>Merch</a>
          </h1>
        </div>
      )}
      {val == 1 && (
        <div>
          <h1>
            <a href="#">Events</a>
          </h1>
        </div>
      )}
      {val == 2 && (
        <div>
          <h1>Congratulations! You get nothing by being a Campus Ambassador!</h1>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
