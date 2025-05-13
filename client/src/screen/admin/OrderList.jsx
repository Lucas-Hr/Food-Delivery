import React, { useState } from 'react'
import TableOrderList from '../../components/admin/TableOrderList'
function OrderList() {
  const OrderHeader = ["Id","Food","Quantity","Name","Address","Email","Status"]
  const [orders, setOrders] = useState([
    {
      "Id": 1,
      "Food": "Pizza Margherita",
      "Quantity": 2,
      "Name": "Alice Johnson",
      "Address": "123 Main Street, Springfield",
      "Email": "alice.johnson@example.com",
      "Status": "Pending"
    },
    {
      "Id": 2,
      "Food": "Chicken Burger",
      "Quantity": 1,
      "Name": "Bob Smith",
      "Address": "456 Oak Avenue, Lakeside",
      "Email": "bob.smith@example.com",
      "Status": "Delivered"
    },
    {
      "Id": 3,
      "Food": "Veggie Pasta",
      "Quantity": 3,
      "Name": "Carla Mendes",
      "Address": "789 Pine Lane, Hilltown",
      "Email": "carla.mendes@example.com",
      "Status": "In Progress"
    }
  ])
  return (
    <div className='bg-[#F2F2F2] w-full px-8 py-4'>
      <h1 className='text-[#464255] text-2xl font-semibold'>Order List</h1>
      <h3 className='text-[#A3A3A3]'>Welcome back to DeliverEats admin!</h3>
      <div className='mt-10'>
        <TableOrderList header={OrderHeader} orders={orders}/>
      </div>
    </div>
  )
}

export default OrderList