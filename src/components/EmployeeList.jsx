import React, { useContext } from 'react'
import EmployeeCard from './EmployeeCard'
import { MyContext } from '../hook/employee'
import DeleteCard from './DeleteCard';
import UpdateCard from './UpdateCard';
import AddCard from './AddEmployee';

function EmployeeList() {
   const {data,openDeleteCard,openUpdateCard, openAddCard,setOpenAddCard} = useContext(MyContext);
   console.log(data)
  return (
    <div className='m-[2rem]'>
       {openDeleteCard && <DeleteCard/> }
     {openUpdateCard &&  <UpdateCard/>}
     {openAddCard && <AddCard/>}
        <ul role="list" class="divide-y divide-gray-100">
            {data.length >0 &&
                 data.map(data=>{
return <EmployeeCard data={data}/>
                })
            }
          
          {/* <EmployeeCard/> */}
</ul>
    </div>
  )
}

export default EmployeeList