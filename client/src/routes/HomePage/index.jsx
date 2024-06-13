import SearchBar from "../../components/SearchBar/index";
import "./style.scss";

function HomePage() {

    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1>Find Real Estate & Get Your Dream Place</h1>
                    <p>Discover your dream home with iEstate, the leading real estate experts in Singapore. Our dedicated team offers unparalleled market knowledge and personalized service to ensure you find the perfect property.</p>
                    <SearchBar />

                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>

                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>

                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>

                </div>
            </div>
            <div className="imgContainer">
                <img src="./bg.png" alt=""/>
            </div>
        </div> 
    );
}


export default HomePage;