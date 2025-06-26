import React from 'react';
import {Route,Routes} from 'react-router';
import Reservations from './Reservations';

const Main = () => {
  return (
    <main>
        <Routes>
            < Route path='/Reservations' element={<Reservations/>}/>
        </Routes>
    </main>
  )
}

export default Main;