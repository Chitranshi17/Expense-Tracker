import React from 'react'
import ListItem from './ListItem'

const UlSec = ({transactions , deleteTransactions , dark , editTransactions}) => {
  return (
    <div className={dark ? "ul-section bg-dark py-4" : "ul-section bg-light py-4"}>
    <ul className="list-group" >
      {
        transactions.map(transaction => <ListItem key={transaction.id} transaction={transaction} deleteTransactions={deleteTransactions} dark={dark} editTransactions={editTransactions}/>)
      }
    </ul>
  </div>
  )
}

export default UlSec
