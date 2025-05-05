import React from 'react'
import TableAdmin from '../../components/admin/TableAdmin'
function OrderList() {
  const OrderHeader = ["Id","Food","Quantity","Name","Address"]
  return (
    <div className='bg-[#F2F2F2] w-full px-8 py-4'>
      <h1 className='text-[#464255] text-2xl font-semibold'>Order List</h1>
      <h3 className='text-[#A3A3A3]'>Welcome back to DeliverEats admin!</h3>
      <div className='mt-10'>
        <TableAdmin header={OrderHeader}/>
      </div>
    </div>
  )
}

export default OrderList