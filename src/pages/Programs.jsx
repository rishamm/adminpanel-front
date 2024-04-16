import React from 'react'
import ProgramList from '../programs/containers/ProgramList'
import PageHeading from '../shared/PageHeading'



const Programs = () => {
  return (
    <div className=' p-5'>
      <PageHeading title={"Program"}/>
      <ProgramList/>
    </div>
  )
}

export default Programs