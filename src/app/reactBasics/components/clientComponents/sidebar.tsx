// 'use client'

// import { useState, useContext, createContext } from "react";

// const SidebarContext = createContext(Sidebar);

// export function Sidebar() {
//     const [isOpen, setIsOpen] = useState(false)
   
//     return (
//       <SidebarContext.Provider value={{ isOpen }}>
//         <SidebarNav />
//       </SidebarContext.Provider>
//     )
// }


// function SidebarNav() {
//     let { isOpen } = useContext(SidebarContext)
   
//     return (
//       <div>
//         <p>Home</p>
   
//         {isOpen && <div>Learning context</div>}
//       </div>
//     )
//   }