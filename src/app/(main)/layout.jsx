
import BreakingNews from '@/components/shared/BreakingNews';
import Header2 from '@/components/shared/Header2';
import Navbar from '@/components/shared/Navbar';


const MainLayout = ({children}) => {
    return (
        <div>
            <Header2></Header2>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;