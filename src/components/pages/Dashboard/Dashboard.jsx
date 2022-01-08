import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import Classes from "./Dashboard.module.css";

function Dashboard() {  
  return (
    <div className={Classes.container}>
      <h1>Dashboard</h1>
      {localStorage.getItem("userType") === 'institute' && (
        <div>
          <h1>
            <a href="#">Events</a>
          </h1>
          <h1>
            <a>Merch</a>
          </h1>
        </div>
      )}
      {localStorage.getItem("userType") === 'participant' && (
        <div>
          <h1>
            <a href="#">Events</a>
          </h1>
        </div>
      )}
      {localStorage.getItem("userType") === 'campusAmbassador' && (
        <div>
          <h1>Congratulations! You get nothing by being a Campus Ambassador!</h1>
        </div>
      )}



      <h1>{localStorage.getItem("userType")}</h1>
     
    </div>
    
  );
}

export default Dashboard;
