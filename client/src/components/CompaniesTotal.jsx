import * as React from 'react'
import companySvg from '../assets/companies/noun_company_509354.svg' 
import '../styles/companies.css'

export default function CompaniesOverview({companies}) {
  return (
    <div className="btn_companies-total-container">
        <div className="btn_companies-total">
            <h1>{companies}</h1>
        </div>
        <div className="btn_companies-different-text">
            <h2>different companies</h2>
        </div>
        <div className="btn_companies-stock-image">
            <img src={companySvg} alt='company'/>
        </div> 
    </div>
  )
}