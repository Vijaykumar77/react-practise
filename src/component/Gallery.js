import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Style.css'
import { Link } from 'react-router-dom'
import Latest from './Latest'

export default function Gallery() {
    const path=window.location.pathname
    const[detail,setdetail]=useState()
    useEffect(() => {

        axios.get("https://react-backend77.herokuapp.com/api/v1/blog" + path).then((response) => {
            setdetail(response.data)
        
        })



    }, [path]);

    let item;
    if(detail!==undefined){
        item = <>
            <div className='gallery'>

                <div className="gallerymain">

                    <div className="sideone">
                        <Link to={`${path}/${53}`} style={{ textDecoration: 'none' }}>
                            <img className='sideimg' src='https://media.istockphoto.com/photos/road-in-the-autumn-forest-in-rain-perfect-asphalt-mountain-road-in-picture-id1084242954?k=20&m=1084242954&s=612x612&w=0&h=Ipn8600vDpDH7bD86T3os4r0YBeiJE3NaPpG2MNPpv8=' alt='not available'></img>
                            <div className='quote'>
                                <h3>Title of vertical gallery</h3>
                                <p>Travel / August 21 2017</p>

                            </div>
                        </Link>
                    </div>



                    <div className='sidetwo'>

                        <div className='top'>
                            <Link to={`${path}/${54}`} style={{ textDecoration: 'none' }}>
                                <img className='topimg' src='https://static.toiimg.com/thumb/38198211.cms?resizemode=75&width=1200&height=900' alt='not available'></img>
                                <div className='quote'>
                                    <h4>The sound cloud</h4>
                                    <h4>you loved</h4>
                                    <p>Travel / August 21 2017</p>
                                </div>
                            </Link>
                        </div>



                        <div className='bottom'>
                            <Link to={`${path}/${55}`} style={{ textDecoration: 'none' }}>
                                <img className='bottomimg' src='https://img.traveltriangle.com/blog/wp-content/uploads/2019/05/shutterstock_1147579682.jpg' alt='not available'></img>
                                <div className='quote'>
                                    <h4>Nature cloud</h4>
                                    <h4> is doomed</h4>
                                    <p>Travel / August 21 2017</p>
                                </div>
                            </Link>
                        </div>


                    </div>

                </div>

            </div>
            <Latest data={detail} />
        </>
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
