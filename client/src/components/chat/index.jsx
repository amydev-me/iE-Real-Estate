import { useState } from "react";
import "./style.scss";

function Chat() {
    const [chat, setChat ] = useState('hi');

    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum is placeholder ...
                    </p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum is placeholder ...
                    </p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum is placeholder ...
                    </p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum is placeholder ...
                    </p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum is placeholder ...
                    </p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum is placeholder ...
                    </p>
                </div>
            </div>
            {
                chat && (
                <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img
                            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                        John Doe
                    </div>
                    <div className="close" onClick={() => setChat(null)}>X</div>
                </div>
                <div className="center">
                    <div className="chatMessage own">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>

                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea ></textarea>
                    <button>Send</button>
                </div>
                </div>
                )
            }
        </div>
    );
}

export default Chat;