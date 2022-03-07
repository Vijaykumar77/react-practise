import React from 'react'
import { Link } from 'react-router-dom'
export default function Topstory(props) {
    const para = window.location.pathname
    return (
    <>
              <Link to={`${para}/${props.id}`} style={{ textDecoration: 'none' }}>
            <div className='topstory'>
                
                <div className='storyimage'>
                        <img src={props.image} alt="not available"></img>
                </div>
                <div className='storydesc'>
                    <h4>{props.title}</h4>
                    <p>{props.date}</p>
                </div>
            
            </div>
            </Link>
            <hr className='storiline'></hr>

    </>
    )
}
