import { Card, CardBody } from "@nextui-org/card";
import { promises as fs } from 'fs';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import Image from 'next/image'
import { schedule } from "../Data/schedule";




export default async function App() {
  
    return (
       
    <div >
         <p className="announceheader mt-5 text-xl font-extrabold bg-[#3a3a3a] inline-block text-transparent bg-clip-text">Your Class Schedule</p>
      <Card className=" schedule ">
      
        <CardBody  className="bg-[#f8f8f8] px-5 py-6 gap-2">
        {
    schedule.map((result) => (        
        <Card  className="w-80 h-40">         
        <div className="grid grid-cols-10 "> 
          <div className="col-span-1 ml-2 mt-4 ">
          <img src={result.banner} alt="my image" /> 
          </div>
          <div className="col-span-5 ml-1 mt-2">
            
            <p className="text-sm  bg-[#9899df]  inline-block text-transparent bg-clip-text">{result.description}</p>
             <p className=" text-sm  font-extrabold bg-[#4749b3]  inline-block text-transparent bg-clip-text ">{result.day}{result.time}</p>
            
          </div>
          <div className="col-span-4 mt-4 ml-8">
          <p className=" text-sm  bg-[#7577d9]  inline-block text-transparent bg-clip-text">{result.date}</p> 
          </div>
         </div>
        
      </Card>
             ))
}
        </CardBody>
      </Card>
      </div>
    );
  }