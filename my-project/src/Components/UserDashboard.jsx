import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import UserLogin from './UserLogin'


const UserDashboard = () => {
  const location = useLocation();
  const userdata = location.state || null;
  const navigate = useNavigate();
const vid1="https://res.cloudinary.com/dt9uy1xsy/video/upload/v1723985333/samples/dance-2.mp4"
  const handlelogout = () => {
    navigate('/LoginUser');
    localStorage.removeItem("userdata")
  }

  if (!userdata) {
    return <UserLogin />;
  }

  return (
    <>
      
      <h1>yaha entertainment hoga</h1>

      
      <video 
        width="640" 
        height="360" 
        controls 
        autoPlay 
        muted 
        loop
      >
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button onClick={handlelogout}>Logout</button>
    </>
  )
}

export default UserDashboard
