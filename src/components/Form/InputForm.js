import React from 'react'
import { useForm } from 'react-hook-form'


const InputForm = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); 
    console.log(props.name)
    console.log(errors)

  return (
    <>

    <input type="text" className={props.class}{...register(props.name, { required: 'This is required', minLength:{value:4,message:'Min lenth is 4'} })} />
    {/* errors will return when field validation fails  */}

    {errors[props.name]&& <span>This field is required</span>}
    </>
  )
}

export default InputForm