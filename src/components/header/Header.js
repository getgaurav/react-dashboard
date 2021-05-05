import React, { useEffect, useState } from 'react';
import 'boxicons';
import { NavLink } from 'react-router-dom';
import Messages from '../messages/Messages';
import Notify from '../notify/Notify';
import useOnclickOutside from "react-cool-onclickoutside";
import SearchForm from '../search/SearchForm';




export default function Header({ setOpenSidebar }) {

    const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
    const [userMessageIsOpen, setUserMessageIsOpen] = useState(false);
    const [notifyIsOpen, setNotifyIsOpen] = useState(false);

    const menuRef = useOnclickOutside(() => {
        setUserMenuIsOpen(false);
    }, { userMenuIsOpen });

    const msgRef = useOnclickOutside(() => {
        setUserMessageIsOpen(false);
    }, { userMessageIsOpen });

    const notifyRef = useOnclickOutside(() => {
        setNotifyIsOpen(false);
    }, { notifyIsOpen });


    // Here we manipulate the openSidebar data 
    const toggleSidebar = () => {
        setOpenSidebar((openSidebar) => !openSidebar)
    }

    // Dark mode function

    const [nightmode, setNightMode] = useState('moon');

    const toggleNightMode = () => {
        if (localStorage.theme === 'light' || localStorage.theme === null) {
            localStorage.theme = 'dark';
            setNightMode('sun');
        } else {
            localStorage.theme = 'light';
            setNightMode('moon');
        }
    }

    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setNightMode('sun');
        } else {
            document.documentElement.classList.remove('dark')
            setNightMode('moon');
        }
    }, [nightmode])





    return (
        <>
            <div className="w-[97%] h-14 bg-white shadow-md rounded-md p-1.5 flex items-center dark:bg-dark relative z-[1000]">
                <div className="w-10 h-10 rounded-full bg-gray-50 cursor-pointer p-2 dark:bg-btnDark" onClick={toggleSidebar}><box-icon name='menu' color="#666"></box-icon></div>
                {/* Search Box  */}
               <SearchForm/>
                {/* top right menu */}


                <div className="w-auto max-w-md ml-auto flex items-center">
                    <div className="cursor-pointer w-10 h-10 bg-gray-50 m-2 rounded-full flex items-center justify-center dark:bg-btnDark" onClick={toggleNightMode}><box-icon name={nightmode} color="#666"></box-icon></div>


                    <div className="w-10 h-10 rounded-full m-2 relative" ref={notifyRef} onClick={() => setNotifyIsOpen((notifyIsOpen => !notifyIsOpen))}>
                        <div className="w-10 h-10 rounded-full bg-gray-50 p-2 cursor-pointer active:bg-gray-100 dark:bg-btnDark"><box-icon name="bell" color="#666"></box-icon></div>
                        {notifyIsOpen ? <Notify /> : null}
                    </div>

                    <div className="w-10 h-10 rounded-full m-2 relative" ref={msgRef} onClick={() => setUserMessageIsOpen((userMessageIsOpen => !userMessageIsOpen))}>
                        <div className="w-10 h-10 rounded-full bg-gray-50 p-2 cursor-pointer active:bg-gray-100 dark:bg-btnDark"><box-icon name='message-square-detail' color="#666"></box-icon></div>
                        {userMessageIsOpen ? <Messages /> : null}
                    </div>

                    <div className="w-10 h-10 rounded-full m-2 relative" ref={menuRef} onClick={() => setUserMenuIsOpen((userMenuIsOpen) => !userMenuIsOpen)}>
                        <div className="w-10 h-10 rounded-full bg-gray-50 p-2 cursor-pointer active:bg-gray-100 relative dark:bg-btnDark"><box-icon name="user" color="#666"></box-icon></div>

                        {userMenuIsOpen ? <div className="w-60 h-auto bg-white shadow-xl rounded-md absolute top-14 -right-3 overflow-hidden dark:bg-dark">
                            <div className="p-4 grid grid-row-3 grid-flow-col overflow-hidden">
                                <div className="w-11 h-11 rounded-full row-span-3 gap-0"><img src="/logo.svg" alt="user" className="w-11 h-11" /></div>
                                <span className="col-span-6 font-medium text-gray-700 dark:text-gray-100">Gaurav yadav</span>
                                <span className="col-span-6 text-xs text-gray-500">redash@gmail.com</span>
                            </div>
                            <hr className="dark:border-gray-600" />
                            <div className="flex flex-col">
                                <NavLink to="/account" className="flex p-2 hover:bg-gray-100 transition-all  dark:hover:bg-hoverDark"><box-icon name='cog' animation='spin' color='#666'></box-icon><span className="ml-3 dark:text-gray-100">Account</span></NavLink>
                                <div className="cursor-pointer flex p-2 hover:bg-gray-100  transition-all dark:hover:bg-hoverDark"><box-icon name='log-out-circle' color='#666'></box-icon><span className="ml-3 dark:text-gray-100">Logout</span></div>
                            </div>
                        </div> : null}
                    </div>

                </div>
            </div>
        </>
    )
}
