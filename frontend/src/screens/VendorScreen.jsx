import React from 'react'
import { vendors } from "../dummy_data/vendors";
import VendorCard from '../components/VendorCard';

function VendorScreen() {
  return (
    <>
    <h1>Vendor List</h1>
      {vendors &&
        vendors.map((v, i) => (
          <VendorCard vendor={v} />
        ))}

  </>
  )
}

export default VendorScreen