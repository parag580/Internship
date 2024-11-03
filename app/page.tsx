import { NextUIProvider } from "@nextui-org/system";
import Header from "./Header/Header";
import Announcements from "./pages/announcements";
import ClassSchedule from "./pages/classSchedule";
import QuickLinks from "./pages/quickLinks";
import Landingpage from "./pages/Landingpage";


const HomePage =()=>{
   return (
    <div className=" bg-slate-100 font-['poppins']">
     <Header/>
  
    <Landingpage/>
    </div>  
)
}
export default HomePage;