import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { isUserLoggedIn } from './actions';
import './App.css';
import PrivateRoute from './components/HOC/PrivateRoute';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    // if(auth.authenticate){
    //   dispatch(getInitialData());
    // }
    

  }, [auth.authenticate, dispatch]);

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<PrivateRoute>
                                      <Home/>
                                    </PrivateRoute>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          
        </Routes>
    </div>
  );
}

export default App;
