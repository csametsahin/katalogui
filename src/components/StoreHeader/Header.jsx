// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import StoreNav from "../StoreNav/StoreNav";
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";

// import something from react packages
import { SearchNormal1 } from "iconsax-react";
import { Setting4 } from "iconsax-react";
import { useState } from "react";
import MasonryLayout from "../MasonryLayout/MasonryLayout";

// import jsons
import JsonHeader from '../../Jsons/HeaderBoxes.json';
import images from "../../Jsons/Images.json";


// Header component
const Header = () => {
  const [categoryImage, setCategoryImage] = useState(images.categories.all)
  return (
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>

          <StoreNav />
          <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>
          <MasonryLayout images={categoryImage} />
        </div>
         
        </ContainerCard>
    </header>
  )
}

export default Header