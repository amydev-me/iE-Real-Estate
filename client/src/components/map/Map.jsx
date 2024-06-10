import "./map.scss";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map({ items }) {
    const renderedPin = items.map((item) => {
        return <Pin pin={item} key={item.id}/>;
    });

    return (
        <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false} className="map">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            { renderedPin }
        </MapContainer>
    )
}

export default Map;