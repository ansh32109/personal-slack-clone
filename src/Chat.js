import React, { useEffect, useState } from 'react'
import './Chat.css' ;
import { useParams } from 'react-router-dom';
import { StarBorderOutlined } from '@mui/icons-material';
import { InfoOutlined } from '@mui/icons-material';
import db from './firebase';

function Chat() {
    const {roomId} = useParams();
    const {roomDetails , setRoomDetails} = useState(null);

    useEffect(() =>{
        if(roomId){
            //TODO: Update as per v9.0+ of Firebase
            db.collection('rooms').document(roomId).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }
    } , [roomId])

    return (
        <div className='chat'>
            <div className='chat_header'>
                <div className='chat_headerLeft'>
                    <h4 className='chat_channelName'>
                        <strong># general</strong>
                        <StarBorderOutlined/>
                    </h4>
                </div>
                <div className='chat_headerRight'>
                    <p>
                        <InfoOutlined/> Details
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Chat
