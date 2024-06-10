import { useState } from "react";
import "./style.scss";

const types= [ "buy", "rent" ]

function SearchBar() { 
    const [query, setQuery] = useState({
        type: types[0],
        location:"",
        minPrice: 0,
        maxPrice: 0
    })

    const handleSwitchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
    };

    const renenderdSwitch = types.map((type) => {
        return  <button 
                    key={type} 
                    className={query.type === type ? "active": ""}
                    onClick={()=> handleSwitchType(type)}
                >
                    {type}
                </button>
    });

    return (
        <div className="searchBar">
            <div className="type">
                {renenderdSwitch}
            </div>
            <form action="">
                <input type="text" name="location" placeholder="City Location"/>
                <input type="number" name="minPrice" min={0} max={ 10000000 } placeholder="Min Price"/>
                <input type="number" name="maxPrice" min={0} max={ 10000000 } placeholder="Max Price"/>
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;