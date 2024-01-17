import React from 'react'
import TotalAmt from './TotalAmt'
import MidSec from './MidSec'
import FormSec from './FormSec'
import UlSec from './UlSec'

const HeroSection = ({transactions , deleteTransactions , addTransactions , dark , editTransactions , edit , updateTransactions}) => {
  return (
    <div className="main-section">
    <TotalAmt transactions={transactions} dark={dark}/>
    <MidSec transactions={transactions} dark={dark}/>
    <FormSec addTransactions={addTransactions} dark={dark} edit={edit} updateTransactions={updateTransactions}/>
    <UlSec transactions={transactions} deleteTransactions={deleteTransactions} dark={dark} editTransactions={editTransactions}/>
    </div>
  )
}

export default HeroSection
