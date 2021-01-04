// export const light = {
//     palette: {
//     type: 'light',
//    main:{
//     secondary:"#f7588c",
//    }
//     }
   
//   } 
//   export const dark = {
//     palette: {
//     type: 'dark',
//     },
//   }

import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: '#556cd6',
  //   },
  //   secondary: {
  //     main: '#19857b',
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  //   background: {
  //     default: 'red',
  //   },
  // },
  palette: {
        type: 'light',
       main:{
        secondary:"#f7588c",
       }
        }
});

export default theme;
