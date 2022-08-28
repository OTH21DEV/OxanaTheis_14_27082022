import React from 'react'

const ErrorForm = (props) => {
    console.log(props.fieldError)
  return (
    <>
    {props.fieldError && <span>This field is required</span>}
    </>
  )
}

export default ErrorForm