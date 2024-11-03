import { Card, CardBody } from "@nextui-org/card";
import ClassSchedule from "./classSchedule";
import { promises as fs } from 'fs';
import fsPromises from 'fs/promises';
import path from 'path'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { announce } from "../Data/announcement";


 

//const data = [{'description':'On Account Of Independence Day,August 15th will be a Holiday'},{'description':'Reminder to Finish your Assignment and Submit them by Monday'}];

export default  async function App() {
   
   
return (

 
<div className="leftpane">
<p className=" announceheader mt-12 text-xl font-extrabold bg-[#3a3a3a] inline-block text-transparent bg-clip-text">Announcements</p>
  <Card className="announcement">
    <CardBody  className="bg-[#f8f8f8] px-5 py-6 gap-2" >
    {
    announce.map((result) => (
            
        <Card className="text-sm bg-[#4749b3] inline-block text-transparent bg-clip-text"  radius="sm">
          <div className="grid grid-cols-9 ">
          <div className="col-span-1 mt-2 ml-2">
               <img src={result.bannerImg1} alt="my image" /> 
          
               </div>
               <div className="col-span-7 ">
               <p  >{result.description}</p>
               </div>
          </div> 
          
               
        
      </Card>
         ))
        }  
    </CardBody>
  </Card>
  <ClassSchedule>   
  </ClassSchedule>
  </div>
  

)
};