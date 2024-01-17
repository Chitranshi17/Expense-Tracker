import React from 'react'
import {FaRupeeSign} from 'react-icons/fa'


const TotalAmt = ({transactions , dark}) => {

 const TotalBalance = transactions.reduce((p,c) => {
  return p + c.amount;
 }, 0)
  
  return (
    <div className={dark ? "total-amt bg-dark  border border-light" : "total-amt bg-light "}>
    <div className="text w-100 text-center">
    <h2 className={dark ? 'text-light display-3' : 'text-dark display-3'}>TOTAL AMOUNT</h2>
    <h4 className={dark ? 'text-light display-5' : 'text-dark display-5'}><FaRupeeSign/>{TotalBalance}</h4>
    </div>
    </div>
  )
}

export default TotalAmt;
