'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const SignPage = () => {

    const { register,
            handleSubmit,
            watch,
            formState: { errors },} = useForm()

    
       const onSubmit = async (data) => {
           console.log(data)
           const {email, password} = data
           console.log(email, password)
   
           const { data:res, error } = await authClient.signIn.email({
               
               email: email , // required
               password: password, // required
              
               callbackURL: "/",
           });
   
           console.log(res, error , 'res, error')
   
       }
   
       console.log(errors, 'errors missing')

    return (
        <div className='flex flex-col items-center justify-center'>
             <div className='space-y-2 border border-zinc-100/75 rounded-2xl p-8 bg-zinc-100'>
                <h2 className='text-lg'>Sign in your account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='border border-zinc-100/95 p-2 rounded-2xl '>
                    <fieldset className="fieldset">

                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" placeholder="Type here email" {...register("email",{ required: 'email field is required!' })}/>
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    </fieldset>
                    <fieldset className="fieldset">

                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" placeholder="Type here password" {...register("password",{ required: 'password field is required!' })}/>

                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    </fieldset>
                        <button type='submit' className='btn w-full mt-4 bg-zinc-700 text-white'>Sign In</button>
                </form>
                <small>Don't have an account? <Link href={'/signUp'} className='text-green-500'>register</Link></small>
             </div>
        </div>
    );
};

export default SignPage;