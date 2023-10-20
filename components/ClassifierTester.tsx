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
  const [data, setData] = useState({
    exists: false,
    ranks: []
  });

  const boundsChange = (topleft: boolean, x: number, y: number) => {
    if (topleft) {
      setBounds({...bounds, x1: x, y1: y});
    } else {
      setBounds({...bounds, x2: x, y2: y});
    }
  }

  const containerStyle = {
    height: height,
    width: width,
  }

  const handleStop = () => {
    fetch('http://127.0.0.1:5000/set',{
      method: 'POST',
      headers : {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ 
        ...bounds
      })
    })
    .then(response => response.json())
    .then(response => {
      //console.log(response);
      const items = response.data.split(", ").map((item: string) => item.split(": "));
      setData({exists: true, ranks: items});
      //console.log(items);
    })
    .catch(error => console.log(error))
  }

  useEffect(handleStop, []);

  /*useEffect(() => {
    console.log(imgRef.current.naturalHeight);
    height = imgRef.current ? imgRef.current.naturalHeight : 0;
    width = imgRef.current ? imgRef.current.naturalWidth : 0;
  }, []);*/
  
  return (
    <div className="main-row">
      <div className="image-container" style={containerStyle}>
        <img className="input-image" ref={imgRef} src={placeholderImage.src} alt="A placeholder image"></img>
        <BoundingBox
          height={height}
          width={width}
          bounds={bounds}
          boundsChange={boundsChange}
          onStop={handleStop}
        ></BoundingBox>
      </div>
      <div className="classifier-results">
        {data.exists ?
          <ul>
            {/*<SearchedCategory></SearchedCategory>
            <TopCategories></TopCategories>*/}
            {data.ranks.map((obj: [string, number]) => <li>{obj[0]}: {Number(obj[1]).toFixed(5)}</li>)}
          </ul>
          :
          <p>Loading...</p>
        }
      </div>
    </div>
  )
}

export default ClassifierTester;