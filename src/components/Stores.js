import React from 'react'
import { CardActions,Card,CardContent,Typography } from '@mui/material'
import {Button} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import postimage from '../img/postimage.jpg';
import Slider from 'react-slick';
import './Stores.css';



const post=[
    {
        id:1,
        title:'Katalog',
        description:'Katalog produk',
        date:'2020-01-01',
        image:'(../img/postimage.jpg)',
        imageLabel:'Katalog'
    },
    {
        id:2,
    },
    {
        id:3,
    }
]
const settings = {
  dots: true,
  infinite: false,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function Stores() {
  return (
    <div className='slider'>
     <Card>
        <Slider {...settings}>
          {post.map(item=>( 
            <div className='slides'>
          <div className='slide' key={item.id}>
            <img src='https://source.unsplash.com/random' alt='random' />
          </div> 
          </div>
          
          ))}
         
          
          
          
        </Slider>
        </Card>
      </div>

  )
}
