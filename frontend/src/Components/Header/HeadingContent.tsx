// import React from 'react'
import { Link } from 'react-router-dom';

const HeadingContent = () => {
    return (
        <div className=' h-full flex items-center'>
            <div className="flex justify-center gap-6 h-full items-center">
                <Link to='' className='mt-3'>
                    <span className=" cursor-pointer border-b-2  border-blue-900 leading pb-3">Talk to a doctor</span>
                </Link>
                <Link to='' className='mt-3'> 
                    <span className=" cursor-pointer leading ">Doctor</span>
                </Link>
            </div>
        </div>
    )
}

export default HeadingContent
