import React from 'react'

export default function MiniCardStats(data) {
    return (
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4 my-2">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-dark rounded-lg mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap dark:text-gray-100">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                {data.name}
                            </h5>
                            <span className="font-bold text-xl">{data.data}</span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
                                <box-icon name={data.icon} color='#fff'></box-icon>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-blueGray-500 mt-4 flex items-center dark:text-gray-100">
                        <span className="text-emerald-500 mr-2 flex items-center fill-current text-green-500">
                            <box-icon name={data.statsIcon}></box-icon> {data.diffrence}
                        </span>
                        <span className="whitespace-nowrap">{data.compareBy}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
