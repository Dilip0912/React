import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from './components'

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   authService
  //     .getCurrentUser()
  //     .then((userData) => {
  //       if (userData) {
  //         dispatch(login({ userData }));
  //       } else {
  //         dispatch(logout());
  //       }
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  // console.log(loading);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-slate-900">
      <div className="w-full block">
        <Header/>
        <Footer/>
      </div>
    </div>
  ) : null;
}

export default App;
