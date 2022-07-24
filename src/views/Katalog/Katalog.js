import React from 'react'
import { useState } from "react";

// import styles of this component
import styles from "../../App.module.css"

// import other components to use
import Header from '../../components/StoreHeader/Header';
import MasonryLayout from '../../components/MasonryLayout/MasonryLayout';
import ContainerCard from '../../components/ContainerCard/ContainerCard';
import Dropdown from '../../components/Elements/Dropdown/Dropdown';

// import json files 
import images from "../../Jsons/Images.json";

export default function Katalog() {
  
  const [categoryImage, setCategoryImage] = useState(images.categories.all)

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter(item => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0]
        return item.toLowerCase().includes(titleSplited)
      })
      return [ ...images.categories[categoryChoose] ]
    })
  }
  return (
    <>
        <Header />
        <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>
         
        </div>
    </>
  )
}
