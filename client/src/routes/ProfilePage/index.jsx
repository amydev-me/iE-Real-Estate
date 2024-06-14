 import { Suspense, useContext, useState } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Chat from "../../components/chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest";
import "./index.scss";


function ProfilePage(){
    const data = useLoaderData();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { updateUser, currentUser} = useContext(AuthContext);
    const navigate = useNavigate();

    

    const handleLogoutClick = async () => {
        setIsLoading(true);
        try{
            const res = await apiRequest.post("/auth/logout"); 
            updateUser(null);
            navigate("/");
        }
        catch(error) {
            setError(error.response.data.message);
        }
        finally {
            setIsLoading(false);
        }
    }
     

    return (
        currentUser && <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <Link to="/profile/update">
                            <button>Update Profile</button>
                        </Link>
                    </div>
                    <div className="info">
                        <span>
                            Avatar:
                            <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
                        </span>
                        <span>
                            Username: <b>{currentUser.username}</b>
                        </span>
                        <span>
                            E-mail: <b>{currentUser.email}</b>
                        </span>
                        <button onClick={handleLogoutClick}>Logout</button>
                    </div>
                <div className="title">
                    <h1>My List</h1>
                    <Link to="/add">
                        <button>Create New Post</button>
                    </Link>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <Await
                        resolve={data.postResponse}
                        errorElement={<p>Error loading posts!</p>}
                        >
                        {(postResponse) => <List posts={ postResponse.data.userPosts } />}
                    </Await>
                </Suspense>
                <div className="title">
                    <h1>Saved List</h1>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <Await
                        resolve={data.postResponse}
                        errorElement={<p>Error loading posts!</p>}
                    >
                        {(postResponse) => <List posts={ postResponse.data.savedPosts } />}
                    </Await>
                </Suspense>
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await
                            resolve={data.chatResponse}
                            errorElement={<p>Error loading posts!</p>}
                        >
                            {(chatResponse) =>  <Chat chats={chatResponse.data} /> }
                        </Await>
                    </Suspense>
                   
                </div>
            </div>
        </div> 
    );
}

export default ProfilePage;