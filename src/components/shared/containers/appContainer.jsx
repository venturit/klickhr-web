import Header from "../../shared/headers/mainHeader";
import Head from "../../shared/headers/appBarWithoutSignIn";
// import SideMenu from "../components/shared/side-navigation/side_menu";
import React from "react";
import {useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';



function AppContainer() {
  const navigate =  useNavigate();
//   const user = useSelector((state)=>{
//     // console.log(state);
//     if(state.auth.user_details!= undefined){
// if(state.auth.user_details.user_id && state.auth.user_details.is_logged){
//   return true
// }
// return false;
//     }
//   });
 const user= true;
  const loading = useSelector((state)=>{
    if(state.utils){

  return state.utils.is_loading;
}
return false;
    });

  const [messager,setMessager] = React.useState(false);
  // Add validations whenever user role changes the navigation page changes
      React.useEffect(()=>{
      
            //   if (user) { // if user role exists
            // navigate('/dashboard');
            //   }else {
            //   navigate('/');
                
            //   }
          
      },[]);
  
  return (
    <div style={{backgroundColor: "#E8E8E8",}}>
       {/* <Backdrop
        sx={{ color: '#FF0066', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}
     {!user && <Head />}
     {user && <Header setMessager={()=>setMessager(!messager)}/>}

      <div
        style={{
          position: "fixed",
          margin: 1,zIndex:2 }}
      >
       {/* {user && <SideMenu />} */}
      </div>
      <div
        style={{
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          margin: 100,

          // backgroundColor: "orange",
          // border: 4,
          // borderColor: "blue",
        }}
      >
   
        {/* <Dashboard /> //Dashboard card alignment */}
        {/* <Reports /> //Done */}
        {/* <Inventory /> */}
        {/* <Team /> //*/}
        {/* <UserProfile /> */}
        {/* //fire fighter profile screen
        // Support Center screen
        // side menu backgroundRepeat
        //upper header */}
        
      </div>
      
  
   
    </div>
  );
}

export default AppContainer;

