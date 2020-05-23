import React, {useEffect, useState} from 'react';

function Mobile(props) { 
    return (
        <>
        <div className="flex flex-col bg-gray-200">
            <div className="flex justify-start bg-gray-200">
                <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
                <div className="flex flex-col bg-gray-200">
                    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
                    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
                    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
                </div>
            </div>
            <div className="flex flex-col bg-gray-200">
                <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
                <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
        </div>
        </>
    )
 }
 
export default Mobile;