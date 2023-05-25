import React from 'react';
import CustomizedSwitches from "./CustomizedSwitches"

const Header = () => {
  return (
    <div>
     <svg width="100%" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 0H0v60c0 55.228 44.772 100 100 100h1340V0z" fill="#5964E0"/>
        <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="160">
          <path d="M1440 0H0v60c0 55.228 44.772 100 100 100h1340V0z" fill="#fff"/>
       </mask>
       <g mask="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#fff">
         <path opacity=".081" d="M1163.89-205.424c21.12-23.963 60.32-15.63 69.88 14.853l114.11 364.163c9.39 29.936-16.96 58.887-47.64 52.364l-366.492-77.899c-30.685-6.522-42.976-43.685-22.23-67.217l252.372-286.264zM254.539-323.259c-3.117-31.792 29.711-54.779 58.52-40.976L657.22-199.336c28.291 13.555 31.498 52.566 5.8 70.56L356.104 86.129c-25.698 17.994-61.259 1.637-64.321-29.584L254.539-323.26zM-71.46 71.741c-3.119-31.792 29.71-54.78 58.52-40.976l344.16 164.899c28.291 13.555 31.498 52.566 5.8 70.56L30.104 481.129c-25.698 17.994-61.26 1.637-64.32-29.584L-71.462 71.741z"/>
          <foreignObject x="0" y="0" width="100%" height="100%">
           <div xmlns="http://www.w3.org/1999/xhtml" style={{display:'flex',alignItems:'center',justifyContent:'space-between', textAlign: 'left', fontSize: '10px',color:'#ffffff', padding: '20px 60px' }}>
             <h1 style={{ margin: 0 }}>devjobs</h1>
             <CustomizedSwitches/>
           </div>
         </foreignObject>
       </g>
     </svg> 
    </div>
  )
}

export default Header