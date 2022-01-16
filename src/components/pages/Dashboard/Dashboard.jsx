import { Fragment, useContext, useEffect, useState } from 'react';
import AuthContext from '../../../store/auth-context';
import Classes from './Dashboard.module.css';

function Dashboard() {
  const authCtx = useContext(AuthContext);
  const [val, setVal] = useState(0);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'foo@foo.com',
    college: 'Blah institute of Blah Technology',
    phone: 'XXXXXXXXXX',
    year: '2',
    instaHandle: '_blah_',
    userType: '0'
  });
  const getUserType = (props) => {
    const token = sessionStorage.getItem('tokenID');
    // ADD API CALL HERE TO DETERMINE THE TYPE OF USER

    return 0;
    // Return 0/1/2 depending on the user type;
  };

  const getUserData = (name, email) => {
    // ADD API CALL HERE TO GET THE RELEVANT DETAILS OF THE USER
  };

  useEffect(() => {
    setVal(getUserType());
    // setUserData(getUserData())
    console.log(val);
  }, []);

  return (
    <div>
      <div className={Classes.container}>
        <h1>Dashboard</h1>
        <div className={`${Classes.section_accessible}`}>
          {val == 0 && (
            <Fragment>
              <h1>
                <a href="#">Events</a>
              </h1>
              <br />
              <h1>
                <a href="#">Merchandise</a>
              </h1>
            </Fragment>
          )}
          {val == 1 && (
            <h1>
              <a href="#">Events</a>
            </h1>
          )}
        </div>

        {/* <div class={`${Classes.sidenav} ${Classes.column_1}`}>
          <div class={Classes.profile}>
            <div class={Classes.name}>              
              {userData.name}
            </div>
            <div class={Classes.job}>
              {userData.userType==2 ? "Campus Ambassador" : "Participant"}              
            </div>
          </div>
          {val == 0 && (
            <div class={Classes.sidenav_url}>
              <div class={Classes.url}>
                <a href="#profile" class="active">
                  Events
                </a>
                <hr align="center" />
              </div>
              <div class={Classes.url}>
                <a href="#settings">Merchandise</a>
                <hr align="center" />
              </div>
            </div>
          )}
          {val == 1 && (
            <div class={Classes.sidenav_url}>
              <div class={Classes.url}>
                <a href="#profile" class="active">
                  Events
                </a>
                <hr align="center" />
              </div>
            </div>
          )}

        </div> */}
      </div>

      <div className={`${Classes.main} ${Classes.column_2}`}>
        <h2>User Information</h2>
        <div className={Classes.card}>
          <div className={Classes.card_body}>
            {/* <i class="fa fa-pen fa-xs edit"></i> */}
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Name</strong>
                  </td>
                  <td>:</td>
                  <td>{userData.name}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Email</strong>
                  </td>
                  <td>:</td>
                  <td>{userData.email}</td>
                </tr>
                <tr>
                  <td>
                    <strong>College/University</strong>
                  </td>
                  <td>:</td>
                  <td>{userData.college}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phone</strong>
                  </td>
                  <td>:</td>
                  <td>{userData.phone}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Year of Study</strong>
                  </td>
                  <td>:</td>
                  <td>{userData.year}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Instagram Handle</strong>
                  </td>
                  <td>:</td>
                  <td>{userData.instaHandle}</td>
                </tr>
                <tr>
                  <td>
                    <strong>User Type</strong>
                  </td>
                  <td>:</td>
                  <td>{userData.userType == 2 ? 'Campus Ambassador' : 'Participant'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
