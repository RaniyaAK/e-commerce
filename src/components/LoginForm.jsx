import axios from "axios";
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";





const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigator = useNavigate()



  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  const handleInputChange =  (e) => {

    console.log(e.target.value, 'target')
    setFormData({ ...formData,[e.target.name]: e.target.value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault();


    setFormData({ email: '', password: ''}) 


    if (formData.email === '' || formData.password === '') {
      toast.error('please fill all required fields');
      return;
    }

    // console.log('Form submitted:', { formData});
    setIsLoggedIn(true);
    setLoading(true)
    // toast.success('submitted successfully')
    


    await axios.post('http://api.maitexa.com:8000/api-docs/#/Auth/get_api/auth/login', formData,{}).then(res=>{

    // console.log(res.data.data,'from then')

    window.localStorage.setItem('access-token' , res.data.token)
    window.localStorage.setItem('user-data', JSON.stringify(res.data.data))
    navigator('/')


     
    }).catch(err=> {
      toast.error('Login failed! please try again')
    }).finally(()=> {
      setLoading(false)
    })
  };
  
 
    return (
        <>
          
    
    <form onSubmit={handleSubmit} onsubmit="return false" className="form">
      <label className="input-hero email-input" htmlFor="email">
        <input type="email" name="email" id="email" required="" value={formData.email} onChange={handleInputChange}/>
        <span className="input-name"> Email </span>
{/* 
        <span className="input-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span> */}
      </label>
      <label className="input-hero password-input" htmlFor="password">
        <input type="password" name="password" id="password" required="" value={formData.password} onChange={handleInputChange} />
        <span className="input-name"> Password </span>
{/* 
        <span className="input-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span> */}
        <a href="#" className="forgot-password">
          {" "}
          Forgot password{" "}
        </a>
      </label>
      <label htmlFor="remember" className="checkbox-hero">
        <input type="checkbox" name="remember" id="remember" />
        <span className="checkbox-cover" />
        <span className="checkbox-name"> Remember Me </span>
      </label>
      <button type="submit" className="submit-btn btn">
        Login
      </button>
      <div className="form-bottom">
        Don't have account yet?
        <Link to= {'/signup'}>
        <span>SignUp</span>
        </Link>
      </div>
      <Toaster/>
    </form>

      
        </>


    )
}
    
export default LoginForm

