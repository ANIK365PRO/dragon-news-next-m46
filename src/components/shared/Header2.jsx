
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { format } from 'date-fns';


const Header2 = () => {
    return (
        <div className='text-center py-6 space-y-1'>
             <Image 
                src={logo} 
                width={300}
                height={200}
                alt="Picture of the logo"
                 className='mx-auto'/>
                 
             <p>Journalism Without Fear or Favour</p>
             <p>{format(new Date(),  "EEEE, MMMM dd, yyyy")}</p>

            
        </div>
    );
};

export default Header2;