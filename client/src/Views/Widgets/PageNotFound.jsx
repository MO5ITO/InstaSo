import React from 'react'
import NotFound from "../../Assets/PageNotFound404.png"

const PageNotFound = () => {
  return (
    <div className='pageCenter mt-3'>
      <img src={NotFound} alt='NotFound404' />
    </div>
  )
}

export default PageNotFound