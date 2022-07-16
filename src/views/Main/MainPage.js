import React from 'react'
import Navbar from '../../components/Navbar'
import  {Grid,Box} from '@mui/material'
import Stores from '../../components/Stores'
import Sidebar from '../../components/Sidebar'

export default function MainPage() {
  return (
    <>
      <Navbar/>
      <Box sx={{ flexGrow: 1,padding:2 }}>
<Grid container spacing={2}>
  <Grid item xs={4}>
    <Sidebar/>
  </Grid>
  <Grid item xs={8}>
    <Stores/>
    <Stores/>
    <Stores/>
  </Grid>
</Grid>
</Box>
</>
  )
}
