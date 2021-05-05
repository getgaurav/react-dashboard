import React from 'react';

export default function Notify() {

    const alerts = [
        // icons for user -  error,  
        {
            icon: 'error',
            alertmsg: 'Alert Message',
            fulltime: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
        },
        {
            icon: 'error',
            alertmsg: 'Alert Message 2',
            fulltime: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
        }

    ]







    return (

        <div className="w-80 max-h-96 min-h-[100px] shadow-lg bg-white dark:bg-dark rounded-md absolute -right-24 md:right-0 top-14 overflow-hidden">
            <div className="w-full h-10 bg-blue-600 p-2 pl-4 flex text-white font-semibold sticky top-0"><box-icon name='bell' animation="tada" color="#ffffff" /><span className="ml-3">Alerts Center</span></div>
            <div className="scrollbar w-full h-auto overflow-y-auto max-h-80">
                {alerts.map((data, id) => {
                    return (
                        <div key={id}>
                            <div className="flex items-center w-full h-16 p-3 hover:bg-gray-100 dark:hover:bg-btnDark transition-all cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center"><box-icon name={data.icon} color='#fff'></box-icon></div>
                                <div className="w-56 h-10 ml-3 flex flex-col">
                                    <div className="w-[98%] h-auto overflow-hidden overflow-ellipsis dark:text-white whitespace-nowrap">{data.alertmsg}</div>
                                    <div className="w-[98%] h-auto text-xs text-gray-400 font-semibold"><span>{data.fulltime}</span></div>
                                </div>
                            </div>
                            <hr className="dark:border-gray-900" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
