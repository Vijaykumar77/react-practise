import axios from 'axios';
import { useParams } from 'react-router-dom'
import React,{useEffect,useState} from 'react'

export default function Detail() {
    const para=useParams()
    const[data,setdata]=useState()

   useEffect(()=>{
       axios.get("https://react-backend77.herokuapp.com/api/v1/blog/"+para.category+"/"+para.id).then((response) => {
           setdata(response.data)
   })
  
   },[para.id,para.category])
    let item;
   if(data!==undefined){
       item = <div className='detailmain'>
           <h1>{data.title}</h1>
           <p>Share this article : <span className='facebook'><i className="fab fa-facebook fa-2x"></i></span>
               <span className='span'><i className="fab fa-snapchat fa-2x" aria-hidden="true"></i></span>
               <span className='twiter'><i className="fab fa-twitter-square fa-2x" aria-hidden="true"></i></span>
           </p>
           <p>
               Like this article :  <span><i className="fa fa-thumbs-up fa-2x"></i></span>
           </p>
           <div className='boximage'>
               <img src={data.image} alt="not available"></img>
           </div>
           <h3>Published by: {data.author}<span>{data.date}</span></h3>
           <div className='boxdesctop'>
               {data.description}
           </div>
           <div className='boxdesc'> {data.explanation}</div>
           <div className='boxdesc'> {data.explanation} </div>
           <div className='boxdesc'>  {data.explanation}</div>

       </div>
   }
   else{
       item=<div id="loader"></div>
   }
    

    return (
        <>
            {item}
        </>
      
    )
}
