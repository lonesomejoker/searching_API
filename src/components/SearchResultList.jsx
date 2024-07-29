import React from 'react'
import "./SearchResultList.css"

const SearchResultList = ({results}) => {
  return (
    <div className='results-list'> 
       {results.map((item, idx) => {
        return (
        <div key={idx}>
        <h1 onClick={(e)=>alert(`u clicked on${item.name}`)}>{item.name}</h1>
        </div>
        )
      })}
    </div>
  )
}

export default SearchResultList
