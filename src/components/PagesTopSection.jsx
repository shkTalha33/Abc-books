import React from 'react'

import "../scss/_page-top-section.scss"

export default function PagesTopSection({heading,img}) {
  return (
    <>
        
           <div className="row">
           <div className="col">
              <div className="top-image">
                <img src={img} alt="" />
                   <h1 style={{fontFamily:"serif"}}>{heading}</h1>
              </div>
            </div>
           </div>
      
    </>
  )
}
