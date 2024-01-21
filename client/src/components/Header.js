import React, { useEffect, useState } from 'react'
// import "./header.css"
import { NavLink } from "react-router-dom"
import axios from "axios"

const Headers = () => {
  const [userdata, setUserdata] = useState({});
  console.log("response", userdata)

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });
      console.log("response", response)
      setUserdata(response.data.user)
    } catch (error) {
      console.log("error", error)
    }
  }

  // logoout
  const logout = () => {
    window.open("http://localhost:6005/logout", "_self")
  }

  useEffect(() => {
    getUser()
  }, [])
  return (
    <>
      <header className="bg-indigo-800 p-1 w-full h-10 ">
        <nav className="">
          {/* <div className="text-white w-50 h-6 ">
            <h1 >Vender Lists</h1>
          </div> */}
          <div className="text-white">
            <ul className='flex justify-around'>
              {/* <li>
                <NavLink to="/" className="text-white">
                  Home
                </NavLink>
              </li> */}
              {Object.keys(userdata).length > 0 ? (
                <>
                  <li>
                    <NavLink to="/dashboard" className="text-white">
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="font-bold text-black">{userdata?.displayName}</li>
                  <li onClick={logout} className="cursor-pointer flex">
                    Logout
                    <img src={userdata?.image} className="w-7 h-7 rounded-full" alt="" />
                  </li>
                  {/* <li>
                    <img src={userdata?.image} className="w-10 h-10 rounded-full" alt="" />
                  </li> */}
                </>
              ) : (
                <li>
                  <NavLink to="/login" className="text-white">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Headers