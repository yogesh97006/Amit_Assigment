import React from 'react'
import Table from './Table'
import Cards from './Cards'

function Main() {
  return (
    <div className='m-5 p-5'>
        <div className='d-flex justify-content-between'>
            <div>
                <p className='text-muted'>GET MORE REVIEWS</p>
                <h2>Followup Reminder</h2>
            </div>
            <div className='d-flex align-items-center'>
                <p>Updated 17 January,10:43 </p>
                <button className='btn btn-primary mx-5 px-2 '>Settings</button>
            </div>
        </div>
        <hr/>
        <div className='d-flex justify-content-between'>
        <Cards name='REVIEW RATE' numbers='15.17%'/>
        <Cards name='REVIEW SCORE' numbers='4.9'/>
        <Cards name='TOTAL REVIEW' numbers='820'/>
        <Cards name='SEND NOW' numbers='548'/>
        </div>
        <Table />
    </div>
  )
}

export default Main