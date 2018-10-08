import * as React from 'react'

export default function CompaniesOverview({companies, company}) {
  return (
  <div>
    <div className='btn_companies-list'>
      {company.name}
    </div>
  </div>)
}