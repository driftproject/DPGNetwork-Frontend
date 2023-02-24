import React, { useState } from "react";
import axios from "axios";
import logo from "../icons/logo.png"
import {useNavigate} from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [secret_key, setSecretKey] = useState()
  const [userdata, setUserdata] = useState({
    "id": "После регистрации"
  })
  const [id, setID] = useState(null)

  const regUser = (e) => {
    e.preventDefault();
    try {
      const req = axios.post(
        "http://127.0.0.1:8000/player/registration",
        {
          email, 
          username, 
          password, 
          secret_key
        }
      ).then((result) => {
        setUserdata(result.data)
        setID(result.data.id)
      }
      )
    }
    catch {
      return
    }  
  }

  return (
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
                src={logo}
              alt="DPGN"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Зарегистрироваться в DPGNetwork
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={regUser}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label className="sr-only">
                  Логин
                </label>
                <input
                  type="email"
                  className="relative block w-full appearance-none   rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-5 text-xl"
                  placeholder="Почта"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="sr-only">
                  Логин
                </label>
                <input
                  type="text"
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-5 text-xl"
                  placeholder="Логин"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="sr-only">
                  Логин
                </label>
                <input
                  type="password"
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-5 text-xl"
                  placeholder="Пароль"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                </label>
                <input
                  type="password"
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-5 text-xl"
                  placeholder="Секретное слово"
                  onChange={e => setSecretKey(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"  
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#ECE7E7] py-2 px-4 text-sm font-medium text-black hover:bg-[#ECE7E7] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Войти в систему
              </button>
            </div>
          </form>
        </div>
        <br/>
        <div className="text-center flex font-semibold text-5xl mt-10 ml-20 items-center justify-center">
        
          <h1>Ваш ID: {userdata.id}</h1>
        </div>
        </div>
  );
};

export default Registration;