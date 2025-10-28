"use client"

import { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";

export default function UserCard() {
    const [user, setUser] = useState({})
    const [blobUrl, setBlobUrl] = useState("")

    useEffect(() => {
        setUser({
            email: window.localStorage.getItem("email"),
            name: window.localStorage.getItem("name"),
            profilePicture: window.localStorage.getItem("profilePicture")
        })
    }, [])

    return (
        <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-2xl shadow-md">
            {user.profilePicture ? <img
                src={user.profilePicture}
                alt="Profile"
                className="w-20 h-20 rounded-full shadow"
            /> : <FaCircleUser className="w-20 h-20 rounded-full shadow"/>}
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
        </div>
    );
}
