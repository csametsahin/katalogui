import React from 'react'
import { CardActions,Card,CardContent,Typography } from '@mui/material'
import {Button} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import postimage from '../img/postimage.jpg';


const post=[
    {
        id:1,
        title:'Katalog',
        description:'Katalog produk',
        date:'2020-01-01',
        image:'(../img/postimage.jpg)',
        imageLabel:'Katalog'
    }
]

export default function Stores() {
  return (
    <Card sx={{mb:5}}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="150"
      image={postimage}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        X Petshop
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Paylaş</Button>
      <Button size="small">Mağazaya Git</Button>
    </CardActions>
  </Card>

  )
}
