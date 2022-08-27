import React from 'react'
import Header from '../../components/Header/Header'
import Dropdown from '../../components/Dropdown/Dropdown'
import Footer from '../../components/Footer/Footer'
import { states } from '../../data/states'
import { departments } from '../../data/departments'

const CreateEmployee = () => {
  return (
    <div>
     <Header/>
     <Dropdown states={states}/>
     <Dropdown states={departments}/>
     <Footer/>
    </div>
  )
}

export default CreateEmployee