import { AppBar, Box, IconButton, Toolbar, Typography ,Button} from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import HomeIcon from'@mui/icons-material/Home';
import {Link} from '@mui/material';

export default function Navbar() {
    const data = [{
        name:'Katalog'
    }]
  return (
     <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#22223B'}}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            {data[0].name}
          </Typography>
          {
            /*
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
           
            >
              <CleanHandsIcon/>
            </IconButton>
            */
            //<Button color="inherit"><PersonIcon/></Button>
          }
          <Button color="inherit"><Link color="inherit" href="/"><HomeIcon/></Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
   
  )
}
