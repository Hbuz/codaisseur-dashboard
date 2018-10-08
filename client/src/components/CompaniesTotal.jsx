import * as React from 'react'

export default function CompaniesOverview({companies}) {
  return (
    <div>
        <div className="btn_companies-total">
            <h1>{companies}<br/> different companies</h1>
        </div>
        <div className="btn_companies-stock-image">
            <p>image here</p>
        </div> 
    </div>
  )
}