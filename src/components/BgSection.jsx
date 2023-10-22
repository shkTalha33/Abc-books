import React from 'react'
import { Button } from 'antd'
function BgSection() {
  return (
    <>
       <div className="container bgWant px-md-4 pt-5">
        <div className="row mx-1 mx-md-5 d-flex justify-content-between">
            <div className="col-12 py-5 mb-3 mb-md-0 bg1 col-md-6 d-flex align-items-center ">
                <h1 className='col-6'>History of Philopino</h1>
                <div className=" col-5 d-flex justify-content-end">
                <Button >Veiw Details</Button>
                </div>
            </div>
            <div className="col-12 py-5 mb-3 mb-md-0 bg2 col-md-6  d-flex align-items-center ">
                <h1 className='col-6'>Wilma Mumduya</h1>
                <div className="col-5  d-flex justify-content-end">
                <Button >Veiw Details</Button>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default BgSection