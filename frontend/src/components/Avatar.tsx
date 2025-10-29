"use client";
import { UserType } from "@/types";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";

export default function Avatar () {
    const [user, setUser] = useState<UserType>({} as UserType);
    const [open, setOpen] = useState(false);
    const { profilePicture, name, email } = user;
    const ref = useRef(null);
    const router = useRouter()
    
    const handleSignOut = () => {
        window.localStorage.clear()
        router.push("/signin")
    }

    // Close dropdown on click outside
    useEffect(() => {
        setUser({
            email: window.localStorage.getItem("email"),
            name: window.localStorage.getItem("name"),
            profilePicture: window.localStorage.getItem("profilePicture")
        })
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={ref}>
            {/* Avatar button */}
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center border border-gray-400 hover:ring-2 hover:ring-blue-400 transition"
            >
                {profilePicture ? (
                    <img src={profilePicture} alt={name} className="w-full h-full object-cover" />
                ) : (
                    <FaCircleUser className="w-full h-full rounded-full text-blue-900"/>
                )}
            </button>

            {/* Dropdown panel */}
            {open && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 p-4 z-50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
                            {profilePicture ? (
                                <img
                                    src={profilePicture}
                                    alt={name}
                                    className="w-full h-full object-cover" />
                            ) : (
                                <FaCircleUser className="w-full h-full rounded-full shadow text-blue-900"/>
                            )}
                        </div>
                        <div>
                            <p className="font-medium text-gray-900 leading-tight">{name}</p>
                            <p className="text-sm text-gray-600 truncate">{email}</p>
                        </div>
                    </div>

                    <div className="h-px bg-gray-200 my-3"></div>

                    <button
                        onClick={() => {
                            setOpen(false);
                            handleSignOut();
                        }}
                        className="w-full py-2 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};
