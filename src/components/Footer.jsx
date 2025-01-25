import React from 'react'

const Footer = () => {
    return (
        <div className='text-white bg-black flex flex-col justify-center md:flex-row md:justify-around p-6 fiex bottom-0'>
            <div className='contact flex flex-col mb-6 md:mb-0'>
                <h1 className='text-3xl font-bold mb-4'>Contact</h1>
                <h2 className='text-lg font-medium mb-2'>Dr. K. Ashok</h2>
                <h2 className='text-lg mb-2'>Assitant Professor</h2>
                <h2 className='text-lg mb-2'>#202, Department of Materials Science and Metallurgy</h2>
                <h2 className='text-lg mb-2'>Indian Institute of Technology, Hyderabad</h2>
                <h2 className='text-lg mb-2'>Kandi, Sangareddy, 502285, India</h2>
            </div>
            <div className="details flex flex-col text-lg">
                <h2 className="mb-2">Phone Number : <span className="font-semibold">+91 1234567890</span></h2>
                <h2>Email : <span className="font-semibold">ashok@gmail.com</span></h2>
            </div>
        </div>
    )
}

export default Footer