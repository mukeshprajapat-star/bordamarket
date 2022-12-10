import React,{Fragment,useEffect} from 'react'
import MetaData from '../layout/MetaData'
import {useSelector} from "react-redux"
import Loader from "../layout/Loader/Loader"
import {Link} from 'react-router-dom'
import { Button } from 'primereact/button';
import "./Profile.css"
const Profile = ({history}) => {
    const {user,loading,isAuthenticated} =useSelector((state)=>state.user);
    useEffect(()=>{
        if(isAuthenticated===false){
            history.push("/login")
        }
    })
    return (
     <Fragment>
         {loading ? <Loader/>:
         (
            <Fragment>
            <MetaData title={`${user.name}'s Profile`}/>
            <div className='profileContainer'>
                <div>
                    <h1>My Profile</h1>
                 <img src={user.avatar.url}  alt={user.name} />
                    <Link to="/me/update">
                        <button className='button'  > <span className="text">Edit Profile</span></button>
                        </Link>
                </div>
                <div>
                    <div>
                        <h4>Full Name</h4>
                        <p>{user.name}</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>{user.email}</p>
                    </div>
                    <div>
                        <h4>Joined on</h4>
                        <p>{String(user.createdAt).substr(0,10)}</p>
                    </div>
                    <div>
                        <Link to="/orders">
                        <Button  style={{width:"250px" ,paddingLeft:" 6vmax"}} className="p-button">My Orders</Button>
                        </Link>
                        <Link to="/password/update">
                        <Button  style={{width:"250px" ,paddingLeft:" 4.5vmax"}} >Change Password</Button>
                        </Link>
                    </div>
                </div>
            </div>
  
                  </Fragment>
         )}
     </Fragment>
    )
}

export default Profile
