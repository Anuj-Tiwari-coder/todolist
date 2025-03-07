import React from 'react'

const Footer = () => {
    // Bootstrap Styling
    const footestyle = {
        position: "relative",
        top: "70vh",
        width: "100%",
    }

    return (
        <footer className='bg-dark text-light py-8' style={footestyle} >
            <p className='text-center'>Copyrights &copy; My Todos List.com</p>
        </footer>
    )
}
export default Footer