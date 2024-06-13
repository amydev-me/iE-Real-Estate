 import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Chat from "../../components/chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest";
import "./index.scss";


function ProfilePage(){
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
                            <button onClick={() => navigate('/update-profile')}>Update Profile</button>
                        </Link>
                    </div>
                    <div className="info">
                        <span>Avatar: 
                            <img
                                src={currentUser.avatar || "./noavatar.jpg"}
                                alt=""
                            />
                        </span>
                        <span>Username: <b>{ currentUser.username }</b></span>
                        <span>Email: <b>{ currentUser.email }</b></span>
                        <button onClick={handleLogoutClick} disabled={isLoading}>Logout</button>
                    </div>
                    
                    <div className="title">
                        <h1>My List</h1>
                        <Link to="/post/add">
                            <button>Create New Post</button>
                        </Link>
                    </div>
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
        
    );
}

export default ProfilePage;