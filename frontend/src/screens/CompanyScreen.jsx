import React from 'react'
import { companies } from "../dummy_data/companies";
import CompanyCard from '../components/companyCard';

function CompanyScreen() {
  return (
    <>
    <h1>Company List</h1>
      {companies &&
        companies.map((v, i) => (
          <CompanyCard key={i} company={v} />
        ))}
  </>
  )
}

export default CompanyScreen
