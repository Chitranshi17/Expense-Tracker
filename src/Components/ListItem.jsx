import {FaTrashAlt} from 'react-icons/fa'
import {FaPen} from 'react-icons/fa'
import {FaRupeeSign} from 'react-icons/fa'



const ListItem = ({transaction , deleteTransactions , dark , editTransactions}) => {

  

  return (
    <li className="list-group-item  d-flex align-items-center justify-content-between my-2 p-4 rounded-0">
     <div className="li-text">
     <h4>{transaction.text}</h4>
      <h5 className={transaction.amount > 0 ? "text-success" : "text-danger"}><FaRupeeSign/>{transaction.amount}</h5>
     </div>
      <span className=''>
        <button className="btn btn-warning btn-sm p-3 mx-2 rounded-0" onClick={()=>editTransactions(transaction)}><FaPen/></button>
        <button className="btn btn-danger btn-sm p-3 mx-2 rounded-0" onClick={()=>deleteTransactions(transaction.id)}><FaTrashAlt/></button>
      </span>
      </li>
  )
}

export default ListItem
