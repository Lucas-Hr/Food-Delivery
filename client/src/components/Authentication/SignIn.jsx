import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SignIn = ({setIsVisible}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Submit = () => {

  };

  return (
    <motion.div 
    initial={{opacity: 0,y : -200}}
    animate={{opacity : 1,y : 0}}
    transition={{
        duration: 1,
      }} 
    className='fixed top-60 left-[550px] z-20'>
        <span className='absolute text-[#FF8000] px-2 text-2xl bg-white right-[-10px] top-[-10px] shadow-sm cursor-pointer' 
        style={{borderRadius : '100%'}} onClick={() => setIsVisible(false)}>&times;</span>
        <form onSubmit={Submit} className='px-8 py-10 w-[500px] border-1 rounded-md bg-white'>
            <h1 className='text-center'>Sign in</h1>
            <div className='mt-8'>
                <label htmlFor="email" className='text-[#6D6D6D]'>Email</label> <br />
                <input type="email" id="password" value={email} onChange={(e) => setEmail(e.target.value)} required 
                className='w-full h-10 rounded-sm border-1 bg-white ps-2 shadow-sm'/>
            </div>
            
            <div className='mt-4'>
                <label htmlFor="email" className='text-[#6D6D6D]'>Password</label> <br />
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required 
                className='w-full h-10 rounded-sm border-1 bg-white ps-2 shadow-sm'/>
            </div>
            
            <div className='flex justify-content-between mt-2'>
                <div>
                    <input type="checkbox" name="remember" id="remember" className='bg-white me-2'/>
                    <label htmlFor="remember">Remember me</label>
                </div>

                <p>Forgot password</p>

            </div>
            <div className='flex justify-center' >
                <button onClick={Submit} className='mt-4 px-8 bg-[#FF8000] text-white'>Sign in</button>
            </div>
            
        </form>
      
    </motion.div>
  );
};

export default SignIn;