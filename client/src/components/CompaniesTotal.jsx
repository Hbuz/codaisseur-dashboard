import * as React from 'react'
import companySvg from '../assets/companies/noun_company_509354.svg' 
// import '../styles/companies.css'
import '../styles/companiesTotal.css'

export default function CompaniesOverview({companies}) {
  return (
    <div className="companies__container--total">
        <div className="companies__header-container">
            <h1 className="companies__header--main">{companies + '+'}</h1>
        </div>
        <div className="companies__header-container--secondary">
            <h2 className="companies__header--secondary">Different Companies</h2>
        </div>
        <div className="companies__image-container">
            <div className="companies__image">
                <img className="companies__image" src={companySvg} alt='company'/>
            </div>
        </div> 
    </div>
  )
}