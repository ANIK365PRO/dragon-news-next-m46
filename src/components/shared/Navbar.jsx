'use client'

import Link from "next/link";
import userAvater from "@/assets/user.png"
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {
    const { data: session , isPending } = authClient.useSession()
    const user = session?.user
    console.log(user, isPending, 'nav session user')

    return (
        <div className="flex items-center justify-between    gap-2 py-2 container mx-auto border-b border-zinc-100/70" >
            <div></div>
             <ul className="flex gap-6">
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/carrer'}>Career</NavLink></li>
             </ul>

            { isPending? 
                <div className="flex flex-col items-center gap-2">
                    <span className="loading loading-spinner text-warning"></span>
                </div>
                :
                user? <div className="flex gap-6 items-center">
                    <p>Hello, {user?.name}</p>

                    <Image src={user?.image || userAvater} alt={'user avater'} width={40} height={40}/>

                    <button className="btn" onClick={() => authClient.signOut()}>Log Out</button>

                </div> : 
                    <div>
                        <Link href={'/signin'}> <button className="btn">Log in</button></Link>
                        <Link href={'/signUp'}> <button className="btn">Log Out</button></Link>
                    
                    </div>}
        </div>
    );
};

export default Navbar;