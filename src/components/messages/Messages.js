import React from 'react';

export default function Messages() {

    const message = [
        {
            usericon: 'https://source.unsplash.com/random/100x100',
            username: 'Gaurav Yadav',
            usermsg: 'First Message',
            msgtime: '52m'
        },
        {
            usericon: 'https://source.unsplash.com/random?user/100x100',
            username: 'Gaurav Yadav',
            usermsg: 'Second Message',
            msgtime: '52m'
        }

    ]







    return (

        <div className="w-80 max-h-96 min-h-[100px] shadow-lg bg-white dark:bg-dark rounded-md absolute -right-9 md:right-0 top-14 overflow-hidden">
            <div className="w-full h-10 bg-blue-600 p-2 pl-4 flex text-white font-semibold sticky top-0"><box-icon name='message-square-dots' flip='horizontal' color="#ffffff" /><span className="ml-3">Message Center</span></div>
            <div className="scrollbar w-full h-auto overflow-y-auto max-h-80">
                {message.map((props, id) => {
                    return (
                        <div key={id}>
                            <div className="flex items-center w-full h-16 p-3 hover:bg-gray-100 dark:hover:bg-btnDark transition-all cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-gray-500 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${props.usericon})` }}></div>
                                <div className="w-56 h-10 ml-3 flex flex-col">
                                    <div className="w-[98%] h-auto overflow-hidden overflow-ellipsis whitespace-nowrap dark:text-white">{props.usermsg}</div>
                                    <div className="w-[98%] h-auto text-xs text-gray-400 font-semibold"><span>{props.username}</span> | <span>{props.msgtime}</span></div>
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
