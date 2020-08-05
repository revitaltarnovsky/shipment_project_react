import React,{useState, useEffect} from 'react';
import {doApiGet} from "./service/apiSrevice"
import "./css/shipment.css" 

function ShipmentItem (props){

    let [prods_ar,setProds]=useState([])

    useEffect(()=>{
        let url = "http://localhost:3000/"
        doApiGet(url)
        .then(data=>{
            console.log(data)
            setProds(data)
        })
    },[])

    return(
      <div className="d-flex flex-column justify-content-center align-items-center">
          {prods_ar.map(item=>{
              if(item.type===1){
                  return(
                      <div key={item.fedex.id} className="item col-6 col-lg-6 my-2 border p-0">
                        <img className="float-lg-left mr-2 w-25" src={item.fedex.thumbnailUrl}/>
                        <h2>{item.fedex.name}</h2>
                        <div>{item.fedex.description}</div>
                      </div>
                  )
              }
              if(item.type===2){
                  return(
                      item.ups.map(item=>{
                          return(
                              <div key={item.id} className="item col-6 col-lg-6 my-2 border p-0"> 
                                <img className="float-lg-left mr-2 w-25" src={item.thumbnailUrl}/>
                                <h2>{item.name}</h2>
                                <div>{item.description}</div>
                              </div>
                          )
                      })
                  )
              }
              if(item.type===3){
                  return(
                    <div key={item.id} className="item col-6 col-lg-6 my-2 border p-0"> 
                    <img className="float-lg-left mr-2 w-25" src={item.thumbnailUrl}/>
                    <h2>{item.name}</h2>
                    <div>{item.description}</div>
                  </div>
                  )
              }
                  
              
          })}
        
      </div>
    )
  }
  
  export default ShipmentItem
  