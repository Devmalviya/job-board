import React from 'react'

function Jobs({result}) {
  return (
    <>
    <div>
    <h3 className="text-lg font-bold mb-3">{result.length} Jobs Available</h3>
    </div>
    <section className='card-container'>{result}</section>
    \</>
  )
}

export default Jobs