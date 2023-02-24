import logo from "../icons/logo.png"
import axios from "axios";
import {useState, useEffect} from "react";

function Header() {
    
    return (
            <div>
                <div className="
                bg-[#ECE7E7] flex w-full h-24 text-2xl justify-around
                ">
                    <div className="">
                        <img src={logo} width={96} className="top-2/4" />
                    </div>
                    <div>
                        <ul className="flex relative top-1/4">
                            <li className="">
                                <a href="/" className={"mr-10"}>Главная</a>
                            </li>
                            <li>
                                <a href="/registration" className={"mr-10"}>Регистрация</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
    )
}

export default Header;