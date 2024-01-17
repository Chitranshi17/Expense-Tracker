import React from 'react'
import {FaRupeeSign} from 'react-icons/fa'


const MidSec = ({transactions , dark}) => {

  const Income = transactions.filter(transaction => transaction.amount > 0).reduce((p,c) => {return p+c.amount},0)

  const Expense = transactions.filter(transaction => transaction.amount < 0).reduce((p,c) => {return p+c.amount}, 0)

  return (
    <div className={dark ? "mid bg-light" : "mid bg-dark"}>
    <div className="income">
      <div className={dark ? "text w-100 text-center bg-dark p-3" : "text w-100 text-center bg-light p-3"}>
      <h3 className={dark ? 'text-light' : 'text-dark'}>Income</h3>
      <h5 className={dark ? 'text-light' : 'text-dark'}><FaRupeeSign/>{Income}</h5>
      </div>
    </div>
    <div className="expense">
      <div className={dark ? "text w-100 text-center bg-dark p-3" : "text w-100 text-center bg-light p-3"}>
      <h3 className={dark ? 'text-light' : 'text-dark'}>Expense</h3>
      <h5 className={dark ? 'text-light' : 'text-dark'}><FaRupeeSign/>{Expense}</h5>
      </div>
    </div>
    </div>
  )
}

export default MidSec
