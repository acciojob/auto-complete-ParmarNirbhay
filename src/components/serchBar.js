import React, { useState } from 'react'

const SearchBar = ({filter , setFilter}) => {

    const [value  , setValue] = useState("")
    const[print , setPrint] = useState([...filter]);

   function filterArr(e){
     setValue(e.target.value)
     let ans = e.target.value
     setPrint(filter.filter(element => element.includes(ans)));
     console.log(print)
    }


  return (


    <div>
        <h1>Search items</h1>
        <input type='text' value={value}  onChange={filterArr} />
        <ul>
        {
            print.map(Element=>(
                <li>
                    {Element}
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default SearchBar