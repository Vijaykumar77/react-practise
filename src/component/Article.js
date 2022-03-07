import React from 'react'
import { Link} from 'react-router-dom'


export default function Article( props) {
    const path=window.location.pathname
    
    return (
        <div className='article'>
            <Link to={`${path}/${props.id}`} style={{textDecoration:'none'}}> 
           <div>
                    <div className='image'>
                        <img src={props.image} alt="not available"></img>
                    </div>
                    <div className='desc'>
                        <h2>{props.title}</h2>
                        <p className='data'>{props.desc}</p>
                        <p className='date'>{props.date}</p>
                    </div>
           </div>
            </Link>
        </div>
    )
}
