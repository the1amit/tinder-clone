import React, { useState } from 'react'
import Avatar from "@material-ui/core/Avatar"
import "./ChatScreen.css"


function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'mark',
            image: '..,',
            message: "whats uo"
        },
        {
            name: 'mark',
            image: '..,',
            message: "whats ooop"
        }
        ,
        {

            message: "heeeyy ooop"
        }
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITN MARK ON 10/08/20</p>
            {
                messages.map(message => (
                    message.name ?
                        (<div className="chatScreen__message">
                            <Avatar
                                className="chatScreen__image"
                                alt={message.name}
                                src={message.image}

                            />
                            <p className="chatScreen__text">{message.message}</p>
                        </div>) :
                        (<div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>)
                ))
            }
            <div className="chatScreen_inputConatiner">
                <form className="chatScreen_Input">
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="chatScreen_Inputfield"
                        placeholder="Type a message"
                        type="text"></input>
                    <button onClick={handleSend} type="submit" className="chatScreen_InputButton">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
