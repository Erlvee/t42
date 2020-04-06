import React, {useState}from 'react';
import './Styling/App.css';
import './Styling/header.css';
import './Styling/main.css';
import './Styling/restaurant.css';
import Header from './Components/Header'
import RenderRestaurant from './Components/RenderRestaurant.js'
import restaurantData from './Components/RestaurantData.js'
import Calendar from './Components/Calendar.js'
import Tables from './Components/Tables.js'
import Main from './Components/Main.js'
import RestaurantPage from './Components/RestaurantPage';
import Home from './Components/Home.js';

function App() {
  const [restPage, setRestPage] = useState(false);
  //const [initCalendar, renderCalendar] = useState(false);
  const [initTables, setTableState] = useState(false);
  const [initRestaurant, renderRestComponent] = useState(false);
  const [initCalendar, renderCalendar] = useState(false);

    const restData = restaurantData.map(item => <RenderRestaurant key={item.id} restaurant={item} 
        initCalendar={initCalendar}
        renderCalendar={renderCalendar}
        />);
  return(
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
      <main>
      <div id="container">
      {<Main initRestaurant={initRestaurant} 
        renderRestComponent={renderRestComponent}/>}
        <div>
          <Home/>
        </div>
      <div className="calendarAppDiv">
        {/*!initRestaurant && initCalendar && <Calendar 
        initTables={initTables}
        setTableState={setTableState}
        initCalendar={initCalendar}
        renderCalendar={renderCalendar}
        initRestaurant={initRestaurant}
        renderRestComponent={renderRestComponent}/>*/}
        </div>
        <div className="restaurantContainer">
          {initRestaurant && restData}
        </div>
        <div>
          {/*!initRestaurant && restPage && <RestaurantPage />*/}
        </div>

        {!initCalendar && initTables && <Tables/>}    
    </div>
      </main>
      <footer>
        {/*!initLogin && <Footer />*/}
      </footer>
    </div>
  )
}

export default App;
