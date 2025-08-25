import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

const UserLogin = () => {
  const navigate=useNavigate();
  const API_URL='http://localhost:3000/users'
  const [UserLoginData,SetUserLoginData]=useState(
    {
      email:"",
      password:""
    }
  )
    const handlechange=(e)=>{
        const {name,value}=e.target
        SetUserLoginData((prev)=>(
            {...prev,[name]:value}
        )
        
        )
    }
  const LoginUser = async (e) => {
  e.preventDefault();
  try {
    let req=await axios.get(API_URL,{
      params:{
        email:UserLoginData.email,
        password:UserLoginData.password
      }
     
    })
    let res=req.data;
    //  console.log(res)
    if(res.length==1){
      toast.success("Login successfully",{position:'top-center',theme:'dark'})
      navigate('/dashboard',{state:res})
      localStorage.setItem("userdata",JSON.stringify(res))
      return;
    }
    toast.warning("Invalid email or password",{position:'top-center',theme:'dark'})
    
  } catch (error) {
    console.log(error)
  }
  
};
  return (
   <>
   <div  className="bg-gray-100 flex items-center justify-center h-screen">
   <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
  <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
    Login
  </h2>
  <form action="#" method="POST" className="space-y-4">
    <div>
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="email"
        name="email"
        value={UserLoginData.email}
        onChange={handlechange}
        placeholder="Enter your email"
        required=""
      />
    </div>
    <div>
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="password"
        name="password"
        value={UserLoginData.password}
        onChange={handlechange}
        placeholder="Enter your password"
        required=""
      />
    </div>
    <button
      type="submit"
      onClick={LoginUser}
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
    >
      Login
    </button>
  </form>
  <p className="text-sm text-center text-gray-600 mt-4">
    Don't have an account?
    <a href="#" className="text-blue-500 hover:underline">
      Sign up
    </a>
  </p>
</div>
</div>
   </>
  )
}

export default UserLogin