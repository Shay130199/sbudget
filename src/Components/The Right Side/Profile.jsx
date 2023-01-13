import React from 'react'
import { UpdatesData } from '../../Data/Data2'
import './Profile.css';

const Profile = () => {
    return (
        <div className="Profile">
            {UpdatesData.map((update)=>{
                return(
                    <div className="update">
                        <img src={update.img} alt=""/>
                        <div className="noti">
                            <div style={{marginBottom: '0.5'}}>
                                <span>{update.name}</span>
                                <span>{update.noti}</span>
                            </div>
                        </div>
                        <div>
                            <span>{update.time}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Profile;