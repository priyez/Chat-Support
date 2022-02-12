import React, { useRef, useEffect, useState } from "react";

import Avatar from './Avatar'
import ChatWindow from './ChatWindow/index'

 const SuppportChat =()=>{
    const [visible, setVisible]=useState(false)
    const wrapperRef = useRef(null);
    useClickOutSide(wrapperRef);
   

    function useClickOutSide(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setVisible(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return (
        <div ref={wrapperRef}>

    <ChatWindow
    visible={visible}
    />
    <Avatar
    onClick={()=> setVisible(true)}
    style={{position:'fixed', bottom:20, right:24 }}
    />
   
</div>

    )
}
export default SuppportChat