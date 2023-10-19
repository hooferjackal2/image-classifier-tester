import SearchedCategory from '@/components/SearchedCategory';
import TopCategories from '@/components/TopCategories';
import BoundingBox from '@/components/BoundingBox';
import placeholderImage from '@/public/images/placeholder.png';
import { useState, useRef, useEffect } from 'react';

interface Props {
  search: string;
}

const ClassifierTester = ({ search }: Props) => {
  const [startHeight, startWidth] = [128, 128];
  const imgRef = useRef(null);
  let [height, width] = [startHeight, startWidth];
  const [bounds, setBounds] = useState({x1: 0, y1: 0, x2: width, y2: height});

  const boundsChange = (topleft: boolean, x: number, y: number) => {
    if (topleft) {
      setBounds({...bounds, x1: x, y1: y});
    } else {
      setBounds({...bounds, x2: x, y2: y});
    }
  }

  const isValid = search == "cow";

  const containerStyle = {
    height: height,
    width: width,
  }

  /*useEffect(() => {
    console.log(imgRef.current.naturalHeight);
    height = imgRef.current ? imgRef.current.naturalHeight : 0;
    width = imgRef.current ? imgRef.current.naturalWidth : 0;
  }, []);*/
  
  return (
    <div className="main-row">
      <div className="image-container" style={containerStyle}>
        <img className="input-image" ref={imgRef} src={placeholderImage.src} alt="A placeholder image"></img>
        <BoundingBox height={height} width={width} bounds={bounds} boundsChange={boundsChange}></BoundingBox>
      </div>
      <div className="classifier-results">
        {isValid ?
          <div>
            <SearchedCategory></SearchedCategory>
            <TopCategories></TopCategories>
          </div>
          :
          <p>Search for a valid object...</p>
        }
      </div>
    </div>
  )
}

export default ClassifierTester;