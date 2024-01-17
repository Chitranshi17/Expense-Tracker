import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


const FormSec = ({addTransactions , dark , edit , updateTransactions}) => {

  const [text , setText] = useState("");
  const [amount , setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.editMode){
    updateTransactions(edit.transactions.id , {text , amount})
    toast("Transaction Is Edited & Saved !!");

    }else{
      addTransactions(text , amount)
      toast("Transaction Is Submited !!");
    }
    setText("")
    setAmount("")
  }

  useEffect(() => {
    setText(edit.transactions.text)
    setAmount(edit.transactions.amount)
  }, [edit])

  // console.log(handleSubmit)
  return (
    <div className={dark ? "form-section bg-dark " : "form-section bg-light"}>
    <div className={dark ? "form-container container bg-dark d-flex align-items-center justify-content-center" : "form-container container bg-light d-flex align-items-center justify-content-center"}>
      <form action="" className='w-75' onSubmit={(e)=>handleSubmit(e)} >
        <input type="text" placeholder='Enter Salary, House Rent....' className={dark ? 'form-control p-4 border border-light' : 'form-control p-4 border border-dark'} 
        onChange={(e) => setText(e.target.value)}
        value={text}
        required/>
        <input type="number" placeholder='Enter Amount' className={dark ? 'form-control p-4 border border-light' : 'form-control p-4 border border-dark'} 
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        required/>
        <button className='btn btn-success w-100 p-4'>Create Transactions</button>
      </form>
    </div>
    </div>
  )
}

export default FormSec
