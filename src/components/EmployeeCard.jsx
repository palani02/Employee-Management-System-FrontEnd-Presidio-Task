import React, { useContext } from 'react'
import { MyContext } from '../hook/employee'
import { Avatar } from '@mui/material'

function EmployeeCard(data) {
    const {fullName,age,date_of_birth,salary,department} = data.data
    const {setOpenDeleteCard,setOpenUpdateCard,setSelectEmp} = useContext(MyContext)

    const selectEmployee = ()=>{
        setSelectEmp(data.data)
    }

    const handleDelete = ()=>{
        selectEmployee()
        setOpenDeleteCard(true)
    }
    const handleUpdate = ()=>{
        selectEmployee()
        setOpenUpdateCard(true)
    }
    //  DataView(date_of_birth)
  return (
    <li class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
        <Avatar class="h-12 w-12 text-center text-[2rem]  leading-10 flex-none rounded-full bg-gray-50" alt={fullName} src='#'/>
     
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900 text-white">{fullName}</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500 text-white">{department}</p>
      </div>
     
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900 text-white">Age</p>
      <p class="mt-1 text-xs leading-5 text-gray-500 text-white">{age}</p>
    </div>

    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900 text-white">Salary</p>
      <p class="mt-1 text-xs leading-5 text-gray-500 text-white">{salary}</p>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900 text-white">Date of birth</p>
      <p class="mt-1 text-xs leading-5 text-gray-500 text-white">{date_of_birth.slice(0,10)}</p>
    </div>

    <div className='flex gap-[2rem]'>
    <button className='bg-[#5046e5] text-white rounded-md px-[1rem] py-0' onClick={handleUpdate}>Update</button>
    <button className='bg-[#eef2ff] text-[#5046e5] rounded-md px-[1rem] py-0' onClick={handleDelete}>Delete</button>

    </div>

  </li>
  )
}

export default EmployeeCard