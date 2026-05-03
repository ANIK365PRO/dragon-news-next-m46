import Link from "next/link";
import userAvater from "@/assets/user.png"
import Image from "next/image";
import NavLink from "./NavLink";


const Navbar = () => {
    return (
        <div className="flex items-center justify-between    gap-2 py-6 container mx-auto" >
            <div></div>
             <ul className="flex gap-6">
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/carrer'}>Career</NavLink></li>
             </ul>
             <div className="flex gap-6">
                <Image src={userAvater} alt={'user avater'} width={40} height={40}/>
               <Link href={'/signin'}> <button className="btn">Login</button></Link>
             </div>
        </div>
    );
};

export default Navbar;