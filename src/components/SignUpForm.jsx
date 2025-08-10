import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

        

const SignUpForm = () => {




  const [isLogedIn, setIsLogedIn] = useState(false);
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    confirmpassword:''
    
  })

  const handleInputChange =  (e) => {
    setFormData({ ...formData,[e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({name:'', email: '', password: '', confirmpassword:''}) 

    if (formData.name === '' || formData.email === '' || formData.password === '' || formData.confirmpassword === '') {
      toast.error('please fill all required fields')

      return;
    }
     
    if (formData.password !== formData.confirmpassword){
      toast.error("password does not match")
    }  



    console.log('Form submitted:', { formData});
    setIsLogedIn(true);
    toast.success('submitted successfully')
     
  }


    return (
        <>   

    <form onSubmit={handleSubmit} className="form">

      <label className="input-hero name-input" htmlFor="name">
        <input type="text" name="name" id="name" required="" value={formData.name} onChange={handleInputChange} />
        <span className="input-name"> Name </span>
      </label>
      <label className="input-hero email-input" htmlFor="email">
        <input type="email" name="email" id="email" required="" value={formData.email} onChange={handleInputChange} />
        <span className="input-name"> Email </span>
      </label>

      
      <label className="input-hero password-input" htmlFor="password">
        <input type="password" name="password" id="password" required="" value={formData.password} onChange={handleInputChange}/>
        <span className="input-name"> Password </span>
      </label>
      

      <label className="input-hero confirmpassword-input" htmlFor="confirmpassword">
        <input type="password" name="confirmpassword" id="confirmpassword" required="" value={formData.confirmpassword} onChange={handleInputChange}/>
        <span className="input-name">Confirm Password </span>
      </label>


      <label htmlFor="remember" className="checkbox-hero">
        <input type="checkbox" name="remember" id="remember" />
        <span className="checkbox-cover" />
        <span className="checkbox-name"> Remember Me </span>
      </label>
      <button type="submit" className="submit-btn btn">
        Login
      </button>
     <Toaster/>
    </form>

      
        </>


    )
}
    
export default SignUpForm

