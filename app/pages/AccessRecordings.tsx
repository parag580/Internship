'use client';
import React from 'react'
import {Image} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import { Autocomplete, AutocompleteItem, Button, Card, CardBody, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { animals, day } from '../Data/data';
import { records } from '../Data/Recordings';
import { SearchIcon } from './SearchIcon';


const PressableCard = () => {
    
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const variants = ["flat", "bordered", "underlined", "faded"];
    console.log("isOpen : ", isOpen);

    return (
        <>
        <div className="rightpane">
            <p className=" announceheader mt-12 text-xl font-extrabold bg-[#3a3a3a] inline-block text-transparent bg-clip-text">Access Class Recordings</p>

            <Card className="recording"  >
                {/* PASS  onOpen TO onPress EVENT LISTENER*/}
    

  
        <Input
      
        isClearable
        radius="lg"
        className="search "
         
        placeholder="Search For Class Recordings"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
         />
  


       
       <div className="  mt-6 mb-5  grid grid-cols-11  ">    
               <div className='col-span-3 ml-5'> <p >Filter By:</p></div>
          
              <div className='col-span-4 ml-4'>
              <Autocomplete className='flex-column w-32 h-4' label="This Week">
              {day.map((day) => (
               <AutocompleteItem key={day.value} value={day.value}>
                 {day.label}
               </AutocompleteItem>
                     ))}
             </Autocomplete>
              </div>
             <div className='col-span-3 '>
             <Autocomplete className='flex-column w-32 h-4 ' label="All Subjects">
               {animals.map((animal) => (
                   <AutocompleteItem key={animal.value} value={animal.value}>
                 {animal.label}
                  </AutocompleteItem>
                  ))}
                </Autocomplete>
             </div>
                  
          </div>


             


    
             
               {
    records.map((result) => (        
        <Card className=' mt-4 ml-5 mr-5' radius='none' onPress={onOpen} isPressable={true} >    
          
        <div  className='text-sm grid grid-cols-2 text-left'> 
          <div className=' row-span-3'>
             <div><p className="   bg-[#9899df]  inline-block text-transparent bg-clip-text">{result.class}</p></div>          
             <div ><p className="   font-extrabold bg-[#4749b3]  inline-block text-transparent bg-clip-text ">{result.description}</p></div>
              <div>  <img src="/video.png" alt="my image" /></div>
              <div > <p className="   bg-[#7577d9]  inline-block text-transparent bg-clip-text">{result.date}</p> </div>
           </div>
           <div className=' row-span-2 ml-24 '> 
             <img src="/class.png" alt="my image" /> 
           </div>
       </div>  
      
      </Card>
             ))
            }
       </Card>
        
            


            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}
              
              className=' ml-20 mr-16 mt-20 mb-24'
            >
                {/* PASS isOpen STATE FROM  useDisclosure HOOK*/}
                <ModalContent>

                    {(onClose) => (
                        <>
                            <ModalHeader className='bg-[#4749b3] rounded-lg'>
                              <div  className='grid grid-rows-2'>
                                
                                <p className=' bg-[#ffffff] ml-36 inline-block text-transparent bg-clip-text'>Class 7 Science</p>
                                <p className='font-extrabold ml-32 bg-[#ffffff] inline-block text-transparent bg-clip-text'>Fundamentals Of Organic Chemistry</p>
                               
                              </div>
                             
                            </ModalHeader>
                            <ModalBody >
                               <p>
                                <img src="/rectangle.png" alt="my image" />
                                </p>

                            </ModalBody>
                          
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default PressableCard