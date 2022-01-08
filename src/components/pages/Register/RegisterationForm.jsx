import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import Classes from './Registeration.module.css';
function RegisterationForm() {

const authCtx = useContext(AuthContext);
  return (      
      <div className={Classes.section}>
    <form className={Classes.section}>
      <div className={Classes.container}>
        <label for="name">
          <b>Name</b>
        </label>
        <input type="text" name="name" value={localStorage.getItem('name')} required readonly/>
        <label for="email">
          <b>E-mail</b>
        </label>
        <input type="email" name="email" value={localStorage.getItem('email')} required readonly/>
        <label for="college">
          <b>University / College</b>
        </label>
        <input type="text" name="college" placeholder="e.g. - Indian Institute of Technology (BHU) Varanasi" required/>
        <label for="phone">
          <b>Phone Number (+91)</b>
        </label>
        <input type="tel" name="phone"  required/>
        <label for="year">
          <b>Year of Study</b>
        </label>
        <input type="text" name="year" placeholder="2nd" required/>
        <label for="name">
          <b>Name</b>
        </label>
        <input type="text" name="name" placeholder="name" required/>
        <label for="position">
          <b>Wanna be a?</b>
        </label>
        <select name="position">
            <option value="participant">Participant</option>
            <option value="campusAmbassador">Campus Ambassador</option>
        </select>
      </div>
    </form>
    </div>
    //     <form>

    //     <div className={Classes.container}>
    //       <h1>Sign Up</h1>
    //       <p>Please fill in this form to create an account.</p>

    //           <label for="email"><b>Username</b></label>
    //         <input type="text" name="username" placeholder="Enter Username" required />
    //       <label for="email"><b>Email</b></label>
    //       <input type="text" placeholder="Enter Email" name="email" required />

    //       <label for="psw"><b>Password</b></label>
    //       <input type="password" placeholder="Enter Password" name="psw" required />

    //               <label for="email"><b>Phone Number</b></label>
    //         <br/>
    //        <select name="phoneCode" required>
    //         <option selected hidden value="">Code</option>
    //         <option value="66">+98</option>
    //         <option value="66">+99</option>
    //         <option value="66">+90</option>
    //         <option value="66">+66</option>
    //        </select>
    //        <input type="phone" name="phone" placeholder="812345678" required />

    //       <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

    //       <div class="clearfix">

    //         <button type="submit" class="btn">Sign Up</button>
    //       </div>
    //     </div>

    //   </form>
  );
}

export default RegisterationForm;
