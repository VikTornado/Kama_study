import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={"w-full h-auto text-center"}>
            <div className={"flex-col py-6 m-auto text-center px-6"}>
                <NavLink className={"px-6"} to={"/"}>Home</NavLink>
                <NavLink className={"px-6"} to={"/mess"}>Messages</NavLink>
                <NavLink className={"px-6"} to={"/profile"}>Profile</NavLink>
            </div>
        </div>
    );
};

export default Header;