import React from 'react';


export default function StrengthIndicator({strength=0}){
    let color='#E6E5F8';
    let message;
    if(strength===0){
        message='choose a password';
    }else if(strength<=40){
            color='#FF6969';
            message='Your password is weak!';
        }
       else if(strength<=99){
            color='#FFA531';
            message='Your password is moderate!';
        }
       else if(strength==100){
            color='#35D842';
            message='Your password is strong!';
        }
    
    return (<div style={{display:'flex',flexDirection:'column',}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            {[1,2,3,4,5,6].map((value)=>{
             if ((value/6)*100<=strength) {return <div key={`strength-${value}`} style={{backgroundColor:color,height:4,width:50}}></div>}else{
                return <div key={`strength-${value}`} style={{backgroundColor:'#E6E5F8',height:4,width:50}}></div>
             } 
            }
            )}
            
            {/* <div style={{backgroundColor:color,height:4,width:50}}></div>
            <div style={{backgroundColor:color,height:4,width:50}}></div>
            <div style={{backgroundColor:color,height:4,width:50}}></div>
            <div style={{backgroundColor:color,height:4,width:50}}></div>
            <div style={{backgroundColor:color,height:4,width:50}}></div> */}
        </div>
        <div style={{display:'flex',alignSelf:'center',color:'#8280B1',
  fontFamily: "Open Sans",
  fontSize: 14,lineHeight:2,
  letterSpacing: 0}}>{message}</div>
        </div>
    )
}