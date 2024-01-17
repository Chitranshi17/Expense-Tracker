import React from 'react'

const Navbar = ({dark , changeTheme}) => {
  return (
    <nav className={dark ? 'navbar bg-black' : 'navbar bg-light'} >
   <span className='d-flex align-items-center justify-content-between w-100 p-4'>
     <div className="logo">
     {/* <img src={img} alt="" /> */}
     <h3 className={dark ? 'text-light' : 'text-dark'}>Expense Tracker</h3>
     </div>
     <button className={dark ? 'btn btn-light p-3' : 'btn btn-dark p-3'} 
     onClick={()=>changeTheme()}>{dark ? "Light Mode" : "Dark Mode"}</button>
     {/* <button className='btn btn-light p-3'>Dark Mode</button> */}
     </span>
     </nav>
  )
}

export default Navbar;