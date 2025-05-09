import React from 'react'
import TableAdmin from '../../components/admin/TableAdmin'
const Employee = () => {
  const EmployeeHeader = ["Id","Name","Job","Social Media","Address","Phone"]
  const EmployeeRow = [
{
      "Id": 1,
      "Name": "Alice Johnson",
      "Job": "Software Engineer",
      "Social Media": {
        "Facebook": "facebook.com/alice.johnson",
        "LinkedIn": "linkedin.com/in/alicejohnson",
        "Instagram": "instagram.com/alice.johnson",
        "X": "x.com/alice_johnson"
      },
      "Address": "123 Main Street, New York",
      "Phone" : "+26 448 312 41"
    },
    {
      "Id": 2,
      "Name": "Bob Smith",
      "Job": "UI/UX Designer",
      "Social Media": {
        "Facebook": "facebook.com/bob.smith",
        "LinkedIn": "linkedin.com/in/bsmith",
        "Instagram": "instagram.com/bobsmith",
        "X": "x.com/bob_smith"
      },
      "Address": "456 Elm Avenue, San Francisco",
      "Phone" : "+26 448 312 41"
    },
    {
      "Id": 3,
      "Name": "Carla Mendes",
      "Job": "Project Manager",
      "Social Media": {
        "Facebook": "facebook.com/carla.mendes",
        "LinkedIn": "linkedin.com/in/carlamendes",
        "Instagram": "instagram.com/carla.m",
        "X": "x.com/carla_m"
      },
      "Address": "789 Pine Road, Chicago",
      "Phone" : "+26 448 312 41"  
    }
  ]
  return (
    <div className='bg-[#F2F2F2] w-full px-8 py-4'>
      <h1 className='text-[#464255] text-2xl font-semibold'>Employee</h1>
      <h3 className='text-[#A3A3A3]'>Welcome back to DeliverEats admin!</h3>
      <div className='mt-10'>
        <TableAdmin header={EmployeeHeader} rows={EmployeeRow}/>
      </div>
    </div>
  )
}

export default Employee