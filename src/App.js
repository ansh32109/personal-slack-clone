import React, { useState } from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Chat from './Chat'
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="App">
      <Router>
        {!user? (
          <Login/>
        ) : (
          <>
          
            {/* Header */}
            <Header/>
            <div className='app_body'>
              {/* Sidebar */}
              <Sidebar/>
              {/* React-Router -> Chat screen */}
              <Routes>
                <Route path='/room/:roomId' element={<Chat/>}>
              
                {/*<Chat/>*/}
                </Route>
                <Route path='/' element={<h1>Not very welcome</h1>}>
              
                </Route>
              </Routes>
            </div>
          
          </>
        )}
      </Router>
      
      
    </div>
  );
}

export default App;
