'use client'
import ClassSchedule from "./classSchedule";
import { promises as fs } from 'fs';
import fsPromises from 'fs/promises';
import { Autocomplete, AutocompleteItem, Button, Card, CardBody, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import path from 'path'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, useState } from "react";
import { links } from "../Data/quick";
import hover from "./hover";


 

//const data = [{'description':'On Account Of Independence Day,August 15th will be a Holiday'},{'description':'Reminder to Finish your Assignment and Submit them by Monday'}];

export default   function App() {
  
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
return (
<div className="middlepane ">
    <p className=" announceheader mt-12 text-xl font-extrabold bg-[#3a3a3a] inline-block text-transparent bg-clip-text">Quick Links</p>
   
{
              <Card className="quick  " onPress={onOpen} isPressable={true}>
                <CardBody className="  bg-blue px-5 py-6 gap-2" >
                  <div className="justify-items-center "> <img  src="/lms.png" alt="my image" /> </div>
               
                <div   className="  bg-white inline-block text-transparent bg-clip-text text-center ">
              
                  <p className="text-2xl font-extrabold   ">Canvas LMS</p>
                  <p className=" ">Click here to access your LMS portal for assignments, class recordings and notes</p>
                </div>
                
                </CardBody>
               </Card>
                    
            }
             {
    
    <Card className="quick " onPress={onOpen} isPressable={true}>
      <CardBody  className=" hover:bg-white  bg-pink px-5 py-6 gap-2" >
      <div className="justify-items-center"> <img  src="/live.png" alt="my image" /> </div>
      <div className="text-center">
      
        <p className="bg-[#ffffff] hover:bg-pink inline-block text-transparent bg-clip-text text-2xl font-extrabold">Join Live Class</p>
        <p className="bg-[#ffffff] hover:bg-pink inline-block text-transparent bg-clip-text">Click here to join your live class session. Please do not share this link.</p>
      </div>
      </CardBody>
     </Card>
          
  }
   {
    
    <Card className=" quick" onPress={onOpen} isPressable={true}>
      <CardBody  className=" bg-light px-5 py-6 gap-2" >
      
      <div className="justify-items-center "> <img  src="/contact.png" alt="my image" /> </div>
      <div className="text-center">
      
        <p className="text-2xl font-extrabold bg-[#ffffff]  inline-block text-transparent bg-clip-text">Contact Teacher</p>
        <p className="bg-[#ffffff]  inline-block text-transparent bg-clip-text">Click here to contact your teacher for any doubts or concerns.</p>
      </div>
      
      </CardBody>
     </Card>
          
  }
        
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}
              
              className='joinclass mr-12 rounded-lg'
            >
                {/* PASS isOpen STATE FROM  useDisclosure HOOK*/}
                <ModalContent>

                    {(onClose) => (
                        <>
                            <ModalHeader >
                           
                             
                            </ModalHeader>
                            <ModalBody  >
                          
                                
                                <p className='text-center mt-10 font-extrabold bg-[#4749b3] inline-block text-transparent bg-clip-text'>You can join the live class 5 Minutes before it start. Please Wait.</p>
                              
                               
                          
                            </ModalBody>
                            <ModalFooter>
               
                <Button className="bg-[#4749b3] rounded-3xl mb-14 mr-32 shadow-lg shadow-indigo-500/20" onPress={onClose}>
                  <p className="bg-[#ffffff] inline-block text-transparent bg-clip-text">okay</p>
                </Button>
              </ModalFooter>
                          
                        </>
                    )}
                </ModalContent>
            </Modal>



          
</div>
)
};