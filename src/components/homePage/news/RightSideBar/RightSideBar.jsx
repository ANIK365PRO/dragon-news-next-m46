import { FaGithub, FaGoogle } from "react-icons/fa";


const RightSideBar = () => {
    return (
        <div className="col-span-3">
            <h2 className='font-bold text-lg text-zinc-700 mb-4'>Login With </h2>

           <div className="space-y-4">
             <button className='btn w-full flex gap-2 border-green-400 text-green-400'><FaGoogle /> <span>Login with Google</span></button>
             <button className='btn w-full flex gap-2'><FaGithub /> <span>Login with Github</span></button>
            

           </div>

        </div>
    );
};

export default RightSideBar;