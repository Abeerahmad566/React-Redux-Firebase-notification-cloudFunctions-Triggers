import React from 'react'


const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><a href='/signup'>SignUp</a></li>
        <li><a href='/signin'>SignIn</a></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks