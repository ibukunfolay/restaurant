import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { listProfile } from '../actions/homeActions'
import { LinearProgress } from '@material-ui/core'


const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])

    const profileList = useSelector(state => state.profileList)
    const {data, loading, error} = profileList
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProfile())
    }, [])
    


    return (
        
        loading ? <div><LinearProgress variant='indeterminate' color='secondary'>Loading...</LinearProgress> </div>:error ? <div>{error}</div>:

            <div className="center">
                <div className="avatar">
                    <img src="pic.png" alt=""/>
                </div>
                {(typeof data.user != "undefined") ? (
                    <div>
                        <div className="content">
                    <div className="id-card" data-aos='fade-down'>
                        <small>Id:</small>
                        <small>{data.user.id}</small>
                    </div>
                   
                    <h1>{data.user.name}</h1>
                    <p>Address: {data.user.address}</p>
                    <h3>Phone: {data.user.phone}</h3>
                    <p>
                        <i>"{data.user.about}"</i>
                    </p>
                    <br/>
                    <div>
                        <p>Likes</p> 
                        <ul data-aos='fade-up'>
                            {
                                data.user.likes.map(like =>
                                    <li data-aos='fade-up'>{like}</li>
                                    )
                            }
                        </ul>
                        <br/>
                        <p>Dislikes</p>                   
                        <ul>
                            {
                                data.user.dislikes.map(dislike =>
                                    <li data-aos='fade-up'>{dislike}</li>
                                    )
                            }
                        </ul>
                    </div>
                    
                </div>
                    </div>
                ) : ("")}
                
                <div className="date">
                    <h5> created at: {data.createdAt}</h5>
                </div>
            </div>
    )
}

export default Home
