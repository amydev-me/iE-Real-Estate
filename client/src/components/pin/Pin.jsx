import { Link } from "react-router-dom";
import "./pin.scss";
import { Marker, Popup } from 'react-leaflet'


function Pin({ pin }) {

    const renderedPin = (
            <Marker position={[ pin.latitude, pin.longitude ]}>
                <Popup>
                    <div className="popupContainer">
                        <img src={pin.img} alt="" />
                        <div className="textContainer">
                            <Link to={`/${pin.id}`}>{pin.title}</Link>
                            <span className="bed">{pin.bedroom} bedroom</span>
                            <b>$ {pin.price}</b>
                        </div>
                    </div>
                </Popup>
            </Marker>
        );
    

    return (
        <div className="pin">
           {renderedPin}
        </div>
    );
}

export default Pin;