import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { FormControl,FormLabel,RadioGroup,FormControlLabel,Radio } from '@mui/material';

const ilceler=[
    {
        id:1,
        name:'Avcılar',
    }
    ,{ id:2,name:'Bağcılar'},
    { id:3,name:'Başakşehir'},
    { id:4,name:'Büyükçekmece'},
    { id:5,name:'Çatalca'},
    { id:6,name:'Çekmeköy'},
    { id:7,name:'Esenler'},
    { id:8,name:'Esenyurt'},
    { id:9,name:'Eyüp'},
    { id:10,name:'Fatih'},
    { id:11,name:'Güngören'},
    { id:12,name:'Kadıköy'},
    { id:13,name:'Kartal'},
]

export default function Sidebar() {
  return (
    <Grid item xs={12} >
    <Paper elevation={0} sx={{ p: 2, bgcolor: '#ffff',border:'1px solid rgba(0,0,0,0.1)',borderRadius:5 }}>
      <Typography variant="h6" gutterBottom>
        Konum
      </Typography>
      <FormControl>
      <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        <FormControlLabel
          value="top"
          control={<Radio />}
          label="Top"
          
        />
        
        <FormControlLabel value="end" control={<Radio />} label="End" />
      </RadioGroup>
    </FormControl>
      {ilceler.map((ilce)=> (<Typography key={ilce.id}>{ilce.name}</Typography>))}
    </Paper>
  </Grid>
  )
}
