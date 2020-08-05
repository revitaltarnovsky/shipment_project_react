import React from 'react';
import "./css/shipment.css"

function Header (props){

  return(
    <div className="container">
      <header className="text-center my-2">
          <h2>Product List</h2>
      </header>
      <nav className="row justify-content-between my-3">
          <div>
            <input className="form-control rounded" placeholder="search Products"></input>
          </div>
          <div>
            <select>
                <option>sort by</option>
                <option>name</option>
                <option>price</option>
            </select>
          </div>

      </nav>
    </div>
  )
}

export default Header