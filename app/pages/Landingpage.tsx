import { Card, CardBody } from "@nextui-org/card";
import Announcements from "./announcements";
import QuickLinks from "./quickLinks";
import ClassSchedule from "./classSchedule";
import AccessRecordings from "./AccessRecordings";


export default function App() {
    return (
       
    <div className="container">
         
       <Announcements>
       </Announcements>
      
            <QuickLinks>
          </QuickLinks>  
        {/* <Recordingbutton></Recordingbutton> */}
        <AccessRecordings></AccessRecordings>
        
      </div>
    );
  }