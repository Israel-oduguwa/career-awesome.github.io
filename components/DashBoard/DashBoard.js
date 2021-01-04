import React from 'react';
import { useState, useEffect} from 'react';
import DashNavBar from "./DashNavBar";
import Panel from "./Panel";
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export const light = {
    palette: {
    type: 'light',
   main:{
    secondary:"#f7588c",
    panel:"#fff",
    body:"#f5f6f8",
    appBar:"#fff"
   }
    }
   
  }
  
  export const dark = {
    palette: {
    type: 'dark',
    main:{
        panel:"#424242",
        body:"#303030",
        appBar:"#424242"
    }
    },
   
  }
  
  
export default function DashBoard({children}){    
    const [theme, setTheme] = useState(false);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        // Update the document title using the browser API
        const  auth = localStorage.getItem("auth") === 'true'
        const mode = auth ? JSON.parse(localStorage.getItem("mode")) : theme;
       setTheme(mode)
      });
     
    const HandleTheme = () => {
      
        if(theme === false){
            setTheme(true)
        }else{
            setTheme(false)
        }
        setAuth(true)
        localStorage.setItem("auth", auth)
        localStorage.setItem("mode", JSON.stringify(theme))
        
    }
    return (
        <ThemeProvider theme={createMuiTheme(theme ? dark : light)}>
        <CssBaseline />                 
       
       <div className="row" style={{margin:"0", width:"100%"}} >
            <div className="col-md-2 Panel" style={{padding:"0"}}>
                <Panel/>   
            </div>
            <div className="col-md-10" color="body" style={{padding:"0"}}>
            <DashNavBar darkMode={HandleTheme}  theme={theme}/>
           {children}
            </div>
        </div>
      
     </ThemeProvider>
    );
}