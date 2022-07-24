import { useState } from "react";

// import styles of this component
import styles from "../../App.module.css"

// import other components to use
import Header from '../../components/Header/Header';
import MasonryLayout from '../../components/MasonryLayout/MasonryLayout';
import ContainerCard from '../../components/ContainerCard/ContainerCard';
import Dropdown from '../../components/Elements/Dropdown/Dropdown';

// import json files 
import images from "../../Jsons/Images.json";

// App component
const MainPage = () => {
  // dropdown items
  const ddItems = [
    {
      id: 1,
      title: "All Sergiler",
      active: true
    },
    {
      id: 2,
      title: "Hayvan Sergileri",
      active: false
    },
    {
      id: 3,
      title: "Sanat Sergileri",
      active: false
    },
    {
      id: 4,
      title: "NFT Sergisi",
      active: false
    },
    {
      id: 5,
      title: "Uzay Sergisi",
      active: false
    }
  ]

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
          <ContainerCard>
              <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}>
                <h1>Sergiler</h1>
                <Dropdown title="Tüm Sergiler" items={ddItems} liftingDdTextUp={takeDdTitle} />
              </div>
              <MasonryLayout images={categoryImage} />
          </ContainerCard>
        </div>
    </>
  )
}

export default MainPage;