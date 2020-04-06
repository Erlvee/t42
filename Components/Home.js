import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Home = props => {
    useEffect(() => {
      axios.get('http://localhost:5000/api/hello')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

  return(
    <div>
      Home
      <p>{state}</p>
    </div>
 )
};

export default Home;