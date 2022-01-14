import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import Classes from './Registeration.module.css';
function RegisterationForm() {
async function handleSubmit(e){
	e.preventDefault();
	let obj = {
    email: e.target[1].value,
		college: e.target[2].value,
		number: e.target[3].value,
		year: e.target[4].value,
		redeem : e.target[5].value, 
		instaHandle: e.target[6].value,
		userType: e.target[7].value, //insti user usertype 0
	};

	const res = await fetch('api/user', {
		method: "PATCH",
		body: JSON.stringify(obj),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await res.json();
  console.log(data);
  if(data.message == 'success'){
    window.location.href = "/dashboard"; 
  }else{
    alert('login failed, please try later')
    // window.location.href = "/register"; 
  }
}
const authCtx = useContext(AuthContext);
  return (      
      <div className={Classes.section}>
    <form className={Classes.section} onSubmit={(e)=>handleSubmit(e)}>
      <div className={Classes.container}>
        <label for="name">
          <b>Name</b>
        </label>
        <input type="text" name="name" value={localStorage.getItem('name')} required readonly disabled/>
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
        <label for="redeem">
          <b>Referal Code</b>
        </label>
        <input type="text" name="redeem" placeholder="XXXXXX"/>
        <label for="name">
          <b>Instagram Handle</b>
        </label>
        <input type="text" name="name" placeholder="name" required/>
        <label for="position">
          <b>Wanna be a?</b>
        </label>
        <select name="position">
            <option value="1">Participant</option>
            <option value="2">Campus Ambassador</option>
        </select>
        <button type='submit'>Submit</button>
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
