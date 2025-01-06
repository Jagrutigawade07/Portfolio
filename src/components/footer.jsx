import React from 'react'
import { FaLinkedin, FaTelegram } from "react-icons/fa6"
import { FaGithubSquare } from "react-icons/fa";

function footer () {
        return (
            <>
                <hr />
                <footer className='py-12'>
                    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                        <div className='flex flex-col items-center justify-center'>
                        <div className='flex space-x-4'>
                            <FaLinkedin/>
                            <FaTelegram/>
                            <FaGithubSquare/>
                        </div>
                        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                            <p>&copy; 2024 Made by Jagruti. All rights reserved.</p>
                        </div>
                    </div>
                    </div>
                </footer>
            </>
    
        )
    }

export default footer;
