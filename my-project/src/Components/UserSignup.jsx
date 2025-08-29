import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const UserSignup = () => {
  const navigate=useNavigate()
    let API_URL='http://localhost:3001/users'
    const[userData,SetUserData]=useState({
        name:"",
        email:"",
        password:"",
        mobile:""
    })

    const handlechange=(e)=>{
        const {name,value}=e.target
        SetUserData((prev)=>(
            {...prev,[name]:value}
        )
        
        )
    }
    const SaveData=async(e)=>{
        e.preventDefault();
        try {
            let res=await axios.get(API_URL);
            let response=res.data;
            if(response.find((u)=>u.email===userData.email))
            {
              //alert("email exist")
              toast.info("Email already in use",{
                position:"top-center",
                theme:"dark"
              })
              navigate('/LoginUser')
              return
            }
            await axios.post(API_URL,userData);
            toast.success("Signup successfully",{
                position:"top-center",
                theme:"dark"
              })
              navigate('/LoginUser')
        } catch (error) {
            console.log(error)
        }
    }
// const [GetData,SetData]=useState([]);
//     const fetchdata=async()=>{
//         try {
//             let res=await axios.get(API_URL);
//             SetData(res.data)
            
//         } catch (error) {
//             console.log(error)
//         }

//     }
//     useEffect(()=>{fetchdata()},[])

  return (
    <>
    <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg fade-in">
  <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
    Create Your Account
  </h2>
  <form action="#" method="POST" className="space-y-5">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Full Name
      </label>
      <input
        type="text"
        name="name"
        placeholder="full name"
        value={userData.name}
        onChange={handlechange}
        required=""
        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
      />
    </div>
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handlechange}
        placeholder="you@example.com"
        required=""
        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
      />
    </div>
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700"
      >
        Password
      </label>
      <input
        type="password"
        name="password"
        onChange={handlechange}
        value={userData.password}
        placeholder="********"
        required=""
        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
      />
    </div>
    <div>
      <label
        htmlFor="Your-Mobile"
        className="block text-sm font-medium text-gray-700"
      >
       Mobile
      </label>
      <input
        type="text"
        name="mobile"
        onChange={handlechange}
        value={userData.mobile}
        placeholder="Indian Mobile"
        required=""
        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
      />
    </div>
    <button
      type="submit"
      onClick={SaveData}
      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transform transition duration-300 shadow-md hover:shadow-lg"
    >
      Sign Up
    </button>
  </form>
  <p className="text-sm text-center text-gray-600 mt-6">
    Already have an account?
    <a href="#" className="text-purple-600 hover:underline transition">
      Login
    </a>
  </p>
</div>


    </>
  )
}

export default UserSignup