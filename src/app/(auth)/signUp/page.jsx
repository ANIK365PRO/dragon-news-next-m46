'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpPage = () => {

    const { register,
            handleSubmit,
            watch,
            formState: { errors },} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const {name, photo, email, password} = data
        console.log(name, photo)
    }

    console.log(errors, 'errors')

    return (
        <div className='flex flex-col items-center justify-center'>
             <div className='space-y-2 border border-zinc-100/75 rounded-2xl p-8 bg-zinc-100'>
                <h2 className='text-lg'>Sign Up your account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='border border-zinc-100/95 p-2 rounded-2xl '>

                    <fieldset className="fieldset">

                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input" placeholder="Type here name" {...register("name",{ required: 'name field is required!' })}/>
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    </fieldset>
                    <fieldset className="fieldset">

                        <legend className="fieldset-legend">Photo url</legend>
                        <input type="text" className="input" placeholder="Type here photo url" {...register("photo",{ required: 'photo url field is required!' })}/>
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}

                    </fieldset>
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
                        <button type='submit' className='btn w-full mt-4 bg-zinc-700 text-white'>Sign Up</button>
                </form>
                <small>You have an account? <Link href={'/signin'} className='text-green-500'>Sign in</Link></small>
             </div>
        </div>
    );
};

export default SignUpPage;