import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navRouter } from '../../router';

export default function Sidebar() {


    return (
        <>
        <div className="w-[94%] m-auto rounded-lg overflow-hidden shadow-md bg-white mt-3 dark:bg-dark" style={{ height: 'calc(100vh - 24px)' }}>
            <div className="w-full h-20 flex items-center justify-center">
                <NavLink exact to="/" className="w-full p-4 flex items-center pl-5">
                    <img src="/logo.svg" alt="Redash" className="w-10 h-10" />
                    <span className="text-2xl font-bold ml-3 text-gray-700 dark:text-gray-100">Redash</span>
                </NavLink>
            </div>
            <nav className="w-full overflow-y-scroll scrollbar pb-2" style={{ height: 'calc(100vh - 104px)' }}>
                <div className="w-full h-auto flex items-center flex-col">
                    {/* Nav Items  */}
                    <div className="w-11/12 ml-2 h-auto rounded-md">
                        <NavLink to="/" exact activeClassName="bg-blue-500 text-white" activeStyle={{ fill: '#fff' }} className="text-sm w-full h-11 mt-1 flex items-center px-3 rounded-md uppercase font-semibold fill-[#666] dark:text-white dark:fill-[#ddd]"><box-icon name="home"></box-icon><span className="ml-3">dashboard</span></NavLink>
                    </div>

                    {navRouter.map((data, index) => {
                        return (
                            <MenuItems data={data} index={index} key={index} />
                        )
                    })}


                </div>
            </nav>
        </div>
    </>
    )
}



const MenuItems = ({ data, index }) => {

    const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuIsOpen(!subMenuIsOpen);
    }

    useEffect(() => {
        const urlpath = window.location.pathname.split('/')[1];
        if (urlpath === data.path.split('/')[1]) {
            setSubMenuIsOpen(true);
        }
    }, [data.path])


    return (
        <div className="w-11/12 ml-2 h-auto rounded-md" key={index}>
            {data.subMenu ?
                <div onClick={toggleSubMenu} className="text-sm cursor-pointer w-full h-11 mt-1 flex items-center px-3 rounded-md uppercase font-semibold fill-[#666] dark:text-white dark:fill-[#ddd]"><box-icon name={data.icon}></box-icon><span className="ml-3">{data.name}</span>{data.subMenu ? <span className="w-7 h-10 ml-auto p-2" ><box-icon name='chevron-down' rotate={subMenuIsOpen ? "0" : "270"} ></box-icon></span> : null}</div>
                :
                <NavLink to={data.path} activeClassName="bg-blue-500 text-white" activeStyle={{ fill: '#fff' }} className="text-sm w-full h-11 mt-1 flex items-center px-3 rounded-md uppercase font-semibold fill-[#666] dark:text-white dark:fill-[#ddd]"><box-icon name={data.icon}></box-icon><span className="ml-3">{data.name}</span>{data.subMenu ? <span className="w-7 h-10 ml-auto p-2" ><box-icon name='chevron-down' rotate={subMenuIsOpen ? "0" : "270"} ></box-icon></span> : null}</NavLink>

            }
            {subMenuIsOpen && data.subMenu ?
                <div className="w-full h-auto flex flex-col bg-gray-100 dark:bg-btnDark rounded-md mt-1">
                    {data.subMenu.map((data, index) => {
                        return (
                            <NavLink to={data.path} key={index} activeClassName="bg-blue-500 text-white" activeStyle={{ fill: '#fff' }} className="w-full h-10 flex items-center px-3 rounded-md uppercase font-semibold fill-[#666] dark:text-white dark:fill-[#ddd] text-sm"><box-icon name={data.icon}></box-icon><span className="ml-3">{data.name}</span>{data.subMenu ? <span className="w-7 h-10 ml-auto p-2" onClick={toggleSubMenu}><box-icon name='chevron-down' rotate={subMenuIsOpen ? "0" : "270"} ></box-icon></span> : null}</NavLink>
                        )
                    })}
                </div>
                : null}

        </div>
    )
}