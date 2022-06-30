import React from 'react'
import { AppBar, Button, Toolbar, Typography, Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { authActions } from '../store';
import { useDispatch } from 'react-redux';


const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const [value, setValue] = useState();
  return <AppBar
    sx={{
      background : "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,105,0.7682423311121324) 50%, rgba(252,176,69,1) 100%);"
    }}
    position="sticky"
    >
    <Toolbar>
      <Typography variant='h5'>LetsBlogIt</Typography>
     {isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
        <Tabs value={value} onChange={(e, val)=>setValue(val)} textColor="inherit">
          <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
          <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
          <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
        </Tabs>
      </Box>}

      <Box display="flex" marginLeft="auto">
        {!isLoggedIn && <Button LinkComponent={Link} to="/auth" variant="contained" sx={{ margin: 1}} color='secondary'>Login</Button>}
       {isLoggedIn && <Button onClick={()=>dispatch(authActions.logout())} LinkComponent={Link} to="/auth" variant="contained" sx={{ margin: 1}} color='secondary'>Logout</Button>}
      </Box>
    </Toolbar>
  </AppBar>
}

export default Header







// import React, { useState } from "react";
// import {
//   AppBar,
//   Typography,
//   Toolbar,
//   Box,
//   Button,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../store";
// import { useStyles } from "./utils";
// const Header = () => {
//   const classes = useStyles();
//   const dispath = useDispatch();
//   const isLoggedIn = useSelector((state) => state.isLoggedIn);

//   const [value, setValue] = useState();
//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         background:
//                   "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
//       }}
//     >
//       <Toolbar>
//         <Typography className={classes.font} variant="h4">
//           BlogsApp
//         </Typography>
//         {isLoggedIn && (
//           <Box display="flex" marginLeft={"auto"} marginRight="auto">
//             <Tabs
//               textColor="inherit"
//               value={value}
//               onChange={(e, val) => setValue(val)}
//             >
//               <Tab
//                 className={classes.font}
//                 LinkComponent={Link}
//                 to="/blogs"
//                 label="All Blogs"
//               />
//               <Tab
//                 className={classes.font}
//                 LinkComponent={Link}
//                 to="/myBlogs"
//                 label="My Blogs"
//               />
//               <Tab
//                 className={classes.font}
//                 LinkComponent={Link}
//                 to="/blogs/add"
//                 label="Add Blog"
//               />
//             </Tabs>
//           </Box>
//         )}
//         <Box display="flex" marginLeft="auto">
//           {!isLoggedIn && (
//             <>
//               {" "}
//               <Button
//                 LinkComponent={Link}
//                 to="/auth"
//                 variant="contained"
//                 sx={{ margin: 1, borderRadius: 10 }}
//                 color="warning"
//               >
//                 Login
//               </Button>
//               <Button
//                 LinkComponent={Link}
//                 to="/auth"
//                 variant="contained"
//                 sx={{ margin: 1, borderRadius: 10 }}
//                 color="warning"
//               >
//                 Signup
//               </Button>
//             </>
//           )}
//           {isLoggedIn && (
//             <Button
//               onClick={() => dispath(authActions.logout())}
//               LinkComponent={Link}
//               to="/auth"
//               variant="contained"
//               sx={{ margin: 1, borderRadius: 10 }}
//               color="warning"
//             >
//               Logout
//             </Button>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;