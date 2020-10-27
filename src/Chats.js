import Axios from './axios';
import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import "./Chats.css"

function Chats() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await Axios.get('/tinder/cards');

            setPeople(req.data);
        }

        fetchData();
    }, [])
    return (
        <div className="chats">
            {people.map((person) => (

                <Chat
                    name={person.name}
                    message="Yo !! whatsup"
                    timestamp="40 seconds ago"
                    profilePic={person?.imgUrl}
                />
            ))}


        </div>
    )
}

export default Chats
