import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase/config';
import Widgets from './Widgets/Widgets';



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl,
        }))
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? <Login /> :(
          <div className="app__body">
          <Sidebar />
          <Feed />

          <Widgets />
          </div>
      )}
      
      
      
    </div>
  );
}

export default App;
