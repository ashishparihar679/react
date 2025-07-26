import React from 'react'

const Update = () => {
    const red=(e)=>{
        e.preventDefault();
    }
  return (
    
    <>
    <h1>THIS IS A UPDATE PAGE</h1>
    <form action="">
        <input type="text" name="name" placeholder="Name" /> <br />
        <input type="text" name="email" placeholder="email" /> <br />
        <input type="text" name="password" placeholder="password" /> <br />
        <input type="text" name="mobile" placeholder="mobile" /> <br />
        <button onClick={red}>submit</button>
    </form>
    </>
  )
}

export default Update