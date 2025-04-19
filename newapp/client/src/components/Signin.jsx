import React from 'react'

function Signin() {
    return (
        <>
        <div className="flex justify-center items-center h-screen bg-white shadow-lightBg">
        <form action="/Signin" method="post" className='bg-white p-8 rounded shadow-md w-96 bac'>
            
        <h2 className="text-2xl font-bold mb-4 text-center colo">Sign In</h2>
                           
                                <label className="fieldset-label colo">Email</label>
                                <input type="email" className="w-full p-2 mb-3 border rounded" required placeholder="Email" />
                                <label className="fieldset-label colo">Password</label>
                                <input type="password" className="w-full p-2 mb-3 border rounded" required placeholder="Password" />
                                <div className='help w-full flex colo'><p className="link link-hover">Forgot password?</p><p><a href="/Signup">Sign Up</a></p></div>
                                <button className="w-full color text-white p-2 rounded hover:bg-blue-600 mt-4">Login</button>
                          
                        
                    
            </form>
            </div>
        </>
    )
}

export default Signin