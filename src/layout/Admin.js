import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router';
import Header from '../components/header/Header';
import Search from '../pages/Search';
import Sidebar from '../components/sidebar/Sidebar';
import Dashboard from '../pages/Dashboard';
import { navRouter } from '../router'
import Footer from '../components/footer/Footer';

export default function Admin() {

    // useing this we pass the data from sibling components
    const [openSidebar, setOpenSidebar] = useState(()=>{if (window.innerWidth<= 768){return true;}else{return false}});

    const responsiveSidebar =()=>{
        if(window.innerWidth <= 768){
            setOpenSidebar(true)
        }else{
            setOpenSidebar(false)
        }
    }
    useEffect(() =>{
        window.addEventListener('resize', responsiveSidebar)
        return ()=> window.removeEventListener('resize', responsiveSidebar)
    },[])


    return (
        <div className="w-full h-screen flex bg-[#f2f6fc] dark:bg-[#151a30]">
            {/* Sidebar  */}
            {/* here we can use the data openSidebar */}
            <div className={`w-64 h-screen z-[9880] fixed right-0 transition-all ${!openSidebar ? 'md:left-0' : 'md:-left-full -right-80'}`}>
                <Sidebar />
               
            </div>
            {/* dashboard content */}
            <div className={`h-screen overflow-hidden transition-all w-full ${!openSidebar ? 'md:ml-64 ml-0' : 'ml-0'}`}>
                <header className="w-full h-20 flex justify-center items-center">
                    {/* here we pass data data openSidebar  */}
                    <Header setOpenSidebar={setOpenSidebar} />
                </header>
                <main className="w-full md:p-3 overflow-y-scroll scrollbar md:pl-4" style={{ height: "calc(100vh - 80px" }}>
                    <Switch>
                        <Route path="/" exact><Dashboard /></Route>
                        <Route path="/search"><Search /></Route>

                        {navRouter.map((item, index) => {
                            return (
                                <Route key={index} path={item.path}><item.component /></Route>
                            )
                        })}
                    </Switch>
                <Footer/>
                </main>
            </div>

        </div>
    )
}
