import React, { useEffect, useState } from 'react'
import './Chat.css' ;
import { useParams } from 'react-router-dom';
import { StarBorderOutlined } from '@mui/icons-material';
import { InfoOutlined } from '@mui/icons-material';
import db from './firebase';
import Message from './Message';

function Chat() {
    const {roomId} = useParams();
    const [roomDetails , setRoomDetails] = useState(null);
    const [roomMessages , setRoomMessages] = useState([]);

    useEffect(() =>{
        if(roomId){
            //TODO: Update as per v9.0+ of Firebase
            db.collection('rooms').doc(roomId)
            .onSnapshot((snapshot) => (
                setRoomDetails(snapshot.data())
            ))
        }

        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp' , 'asc').onSnapshot(snapshot => 
            setRoomMessages(
                snapshot.docs.map(doc => doc.data())
            )
        )
    } , [roomId])
    console.log(roomDetails)
    console.log(roomMessages)

    return (
        <div className='chat'>
            <div className='chat_header'>
                <div className='chat_headerLeft'>
                    <h4 className='chat_channelName'>
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlined/>
                    </h4>
                </div>
                <div className='chat_headerRight'>
                    <p>
                        <InfoOutlined/> Details
                    </p>
                </div>
            </div>
            <div className='chat_messages'>
                {roomMessages.map(({message, timestamp, user, userImage}) => (
                    <Message 
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    />
                ))}
            </div>
        </div>
  )
}

export default Chat
