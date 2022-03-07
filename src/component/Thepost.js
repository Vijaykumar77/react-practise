import React, { useState, useRef} from 'react'
import { useEffect } from 'react'
import Post from './Post'
import Storylatest from './Storylatest'

export default function Thepost(props) {
    const [data,setdata]=useState([])
    const temp = useRef()
    const[load,setload]=useState(false)
   
     temp.current=fil    
    let arr;
   
    useEffect(() => {

        
        temp.current()
            
        
        

    },[props.data])
       function fil()
            {
                if(props.data!==undefined){
           arr = props.data.filter((item) => item.type === 'post')

           arr = arr.filter((item, index) => index < 3)
           setdata([...arr])
                }
          }
    const change=()=>{
        arr = props.data.filter((item) => item.type === 'post')
        setdata([...arr])
        setload(true)
    }
    return (
        <>
            <h2 className='thetitle'>The Latest</h2>
            <hr className='line'></hr>
            <div className='latestmain'>

            <div className='box'>
                {
                    data.map((item) => <Post key={item.id} title={item.title} desc={item.description} id={item.id} date={item.date} image={item.image} />
                    )
                }
            </div> 

            <div className='adv'></div>

        </div>
            {
                load ? null : <h3 className='load'><button onClick={change}>Load more</button></h3>
            }

            <Storylatest data={props.data}></Storylatest>
        </>
    )
}
