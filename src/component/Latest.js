import React, { useState, useRef} from 'react'

import { useEffect } from 'react'
import Article from './Article'
import Thepost from './Thepost'

export default function Latest(props) {
    const[data,setdata]=useState([])
    const temp=useRef()
    temp.current=fil
    let arr;
    
   useEffect(()=>{
       temp.current()
       
   },[props.data])
    function fil(){
      if(props.data!==undefined){
          arr = props.data.filter((item) => item.type === 'latest')

          setdata([...arr]) 

      }
    }
    return (
        <>
        <h2 className='thetitle'>The Post</h2>
        <hr className='line'></hr>
                <div className='latestbox'>
                    {
                        data.map((item) => <Article  key={item.id} title={item.title} id={item.id} desc={item.description} date={item.date} image={item.image} />
                        ) 
                    }
                </div>
             
             <Thepost data={props.data}></Thepost> 
                
            
            </>
    )
}
