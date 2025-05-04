import React from 'react'
import CardDashboard from '../../components/admin/CardDashboard'
import IconOrder from '../../assets/img/iconorder.svg'
import IconDelivered from '../../assets/img/icondelivered.svg'
import IconCanceled from '../../assets/img/iconcanceled.svg'
import IconRevenue from '../../assets/img/iconrevenue.svg'
import Chart from '../../components/admin/Chart'

function Dashboard() {
  const month = ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const revenue = [2000,5000,4000,8000,7000,1000,5000,10000,5000,6000,1000,4000]
  const day = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const order = [200,500,400,800,700,100,500]
  return (
    <div className='bg-[#F2F2F2] w-full px-8 py-4'>
      <h1 className='text-[#464255] text-2xl font-semibold'>Dashboard</h1>
      <h3 className='text-[#A3A3A3]'>Welcome back to DeliverEats admin!</h3>
      <div className='flex justify-between items-center mt-10'>
        <CardDashboard img={IconOrder} number={75} text="Orders"/>
        <CardDashboard img={IconDelivered} number={75} text="Delivered"/>
        <CardDashboard img={IconCanceled} number={75} text="Canceled"/>
        <CardDashboard img={IconRevenue} number={75} text="Revenue"/>
      </div>

      <div className='flex justify-between mt-10'>
        <Chart title="Total Revenue" xLabels={month} series={revenue}/>
        <Chart title="Total Order" xLabels={day}series={order}/>
      </div>
    </div>
  )
}

export default Dashboard