import './App.css';
import SideNav from "../SideNav/SideNav";
import PlayList from "../Playlist/Playlist";
import { Box } from '@mui/material';

const mockData = [
  { name: "Rock", PlayListId: 123, Image: "/Justin-Bieber.png" },
  { name: "Pop", PlayListId: 646, Image: "/Justin-Bieber.png" },
  { name: "Hip hop", PlayListId: 834, Image: "/Justin-Bieber.png" },
  { name: "X-mass", PlayListId: 5503, Image: "/Justin-Bieber.png" },
  { name: "Code life", PlayListId: 4832, Image: "/Justin-Bieber.png" },
];

function App() {
  return (
    <Box className="App">
     <Box sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
     }}
     >
       <Box sx={{flex: 1, overflowY: "auto", display: "flex"}}>
        <SideNav data={mockData} />
        <PlayList />
       </Box> 
       <Box sx={{
         width:"100%", 
         height: 25, 
         bgcolor: "primary.main", 
         display: "flex", 
         alignItems: "center",
         justifyContent: "flex-end",
         fontSize: "14",
         boxSizing: "border-box",
         paddingRight: "10px",
         }}
         >
          Made with love by Techover Academy
       </Box>
     </Box>
    </Box>
  );
}

export default App;
