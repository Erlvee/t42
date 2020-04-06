import React, {useState} from 'react';
import RenderRestaurant from './RenderRestaurant.js'
import restaurantData from './RestaurantData.js'

function Main(props) {
    const arr = {Bergen: ["Colonialen 44", "Enhjørningen Restaurant", "Restaurant 1877"]};
  
    const [value, setValue] = useState('');
    const [savedValue, setSavedValue] = useState('')
    const [searchResult, setSearchResult] = useState('');
    const [searchMessage, setSearchMessage] = useState(false);
    const [renderSearch, setRenderSearch] = useState(null);
    const [initMap, renderMap] = useState(false);
    /*const [initRestaurant, renderRestComponent] = useState(false);
    const [initCalendar, renderCalendar] = useState(false);

    const restData = restaurantData.map(item => <RenderRestaurant key={item.id} restaurant={item} 
        initCalendar={initCalendar}
        renderCalendar={renderCalendar}
        initRestaurant={initRestaurant}
        renderRestComponent={renderRestComponent}/>);*/

    const handleChange = event => {
        setValue(event.target.value);
        renderMap(false);
        setSearchMessage(false);
        setRenderSearch(false);
        /*props.renderRestComponent(false)*/;
    }
    
    const handleSubmit = (event) => {
        if (arr.hasOwnProperty(value)) {
            setRenderSearch(true);
            setSavedValue(value);
            setSearchMessage(!searchMessage);
            setSearchResult("Showing results for ");
        
        } else if (value === '') {
            setSearchResult('Showing nearby locations');
        }
        else {
            setSavedValue(value);
            setSearchMessage(!searchMessage);
            setSearchResult(`No results for `);
        }
        event.preventDefault();
    }
    return (
        <div className="searchContainer">
            <h3>Find a table below</h3>
            <div className="searchBox">
                <form className="searchForm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search.." value={value} onChange={handleChange}/>
                    <button className="searchButton" type="submit"
                    onClick={() => props.renderRestComponent(!props.initRestaurant)}>
                        <i className="fa fa-search"></i>
                    </button>
                </form>
                <p> or </p>
                <button id="mapBtn" onClick={() => renderMap(!initMap)}><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i></button>
            </div>
            <div>
            {initMap && 
            <img src="./img/restaurantMap.png" height="325px" width="300px"></img>}
            </div>
            {searchMessage && 
            <p>{searchResult}"{savedValue}"</p>}
        </div>
    )

}

export default Main;