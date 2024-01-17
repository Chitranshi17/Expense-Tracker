import React, { useState } from 'react'

// import Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar';

const App = () => {

  // Dark And Light Theme

  const [dark , setDark] = useState(false);

  const changeTheme = () => {
    if(dark){
      setDark(false)
    }else{
      setDark(true)
    }
  }

  const [transactions , setTransactions] = useState([
    {id:1 , text:"Salary" , amount:100000},
    {id:2 , text:"Rent" , amount:-10000},
  ])

  // Delete Transactions
  const deleteTransactions = (id) => {
    setTransactions(
      transactions.filter(transaction => transaction.id !== id)
      )
      toast("Transactions Deleted !!")
  }

  // Add Transactions

  const addTransactions = (text , amount) => {
    const newTransactions = {
      id : crypto.randomUUID(), 
      text, 
      amount : parseInt(amount),
    }
    setTransactions([newTransactions , ...transactions])
    // toast("Transaction Is Submited !!");
    // console.log(newTransactions)
  }


  // Edit Transactions

  const [edit , setEdit] = useState({
    transactions : {},
    editMode : false,
  })

  const editTransactions = (oldTransactions) => {
    setEdit({
      transactions : oldTransactions, 
      editMode : true,
    })
    // console.log(oldTransactions)
  }

  const updateTransactions = (oldId, newTransactions) => {
    // console.log(oldId , newTransactions)
    setTransactions(transactions.map(item => item.id === oldId ?  {...item ,  text : newTransactions.text , amount :parseInt( newTransactions.amount)} : item))
    setEdit({
      transactions : {},
      editMode :false,
    })
  }

  return (
    <>
   {/* <Navbar dark={dark} changeTheme={changeTheme}/> */}
   <Navbar  dark={dark} changeTheme={changeTheme}/>
   <HeroSection transactions={transactions} deleteTransactions={deleteTransactions} addTransactions={addTransactions} dark={dark} editTransactions={editTransactions} edit={edit} updateTransactions={updateTransactions}/>
   <ToastContainer/>
   </>
  )
}

export default App
