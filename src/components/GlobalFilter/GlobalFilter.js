import React from 'react'
//filter-value of input , setFilter-
const GlobalFilter = ({filter,setFilter}) => {
  return (
    <span>Search : {''}
    <input value={filter || ''} style={{margin:'30px 0'}}
      onChange={e => setFilter(e.target.value)}
    
    />
  
    </span>
  )
}

export default GlobalFilter