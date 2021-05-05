import React, { useEffect, useState } from 'react';



export default function SearchForm() {

    const [openSearchbar, setOpenSearchbar] = useState(()=>{if (window.innerWidth<= 768){return true;}else{return false}});

    const responsiveSearchbar =()=>{
        if(window.innerWidth <= 768){
            setOpenSearchbar(true)
        }else{
            setOpenSearchbar(false)
        }
    }
    useEffect(() =>{
        window.addEventListener('resize', responsiveSearchbar)
        return ()=> window.removeEventListener('resize', responsiveSearchbar)
    },[])





    return (
        <div>
            {!openSearchbar?
              <div className="md:w-full max-w-sm md:min-w-[200px] h-10 bg-gray-50 ml-3 rounded-md dark:bg-btnDark">
                    <form className="flex justify-center items-center w-full" onSubmit={(e) => { e.preventDefault() }}>
                        <input type="text" placeholder="Search..." className="w-full h-[38px] bg-transparent pl-3 outline-none dark:text-gray-100"/>
                        <button type="submit" className="w-10 h-9 p-2 !outline-none "><box-icon name='search' color="#666"></box-icon></button>
                    </form>
                </div>: 
                <div className="w-10 h-10 rounded-full m-2 relative">
                        <div className="w-10 h-10 rounded-full bg-gray-50 p-2 cursor-pointer active:bg-gray-100 dark:bg-btnDark"><box-icon name="search" color="#666"></box-icon></div>
                    </div>
                }
        </div>
    )
}
