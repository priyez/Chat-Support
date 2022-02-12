import React, {useState} from 'react';
import {styles} from './styles'
import Roboticon from  '../robot.png'

const Avatar =(props)=>{
    const [hover, setHover]= useState(false)
    // Time(Greeting)
 
let today = new Date();
let time =today.getHours();
var greet =(time <= 11) ? 'Good Morning': ((time >= 12  && time >= 4 )? 'Good Afternoon': 'Good Evening')

    return(
        <div style={props.style}>
<div
  className='transition-3'
style={{
    ...styles.avatar,
    ...{ opacity: hover ? '1' : '0' },
    ...{width: '200px'}
    }}
>{greet}🤙 I'm Priye</div>
     <div
     className='transition-3 chatmeUp'
     onMouseEnter={()=>setHover(true)}
     onMouseLeave={()=>setHover(false)}
     onClick={()=> props.onClick && props.onClick()}
       style={{
           ...styles.chatmeUp,
           ...{border: hover ? '1px solid #f9f0ff' : '2px solid #7a39e0'},
           ...{ backgroundImage: `url(${Roboticon})`}
       }}
     />
        </div>
    )
}
export default Avatar