import "./style.scss";
import { listData } from "../../lib/dummydata";
import Filter from "../../components/filter/index";
import Card from "../../components/card/index";
import Map from "../../components/map/Map";

function ListPage() {
    const data = listData;
    const renderedList = data.map((item) => {
        return <Card key={item.id} item={item}/>
    })
    return (
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    { renderedList }
                </div>
            </div> 
            <div className="mapContainer">
                <Map items={data}/>
            </div>
        </div>
    );
}

export default ListPage;