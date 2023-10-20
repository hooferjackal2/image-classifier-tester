import SearchedCategory from '@/components/SearchedCategory';
import TopCategories from '@/components/TopCategories';
import BoundingBox from '@/components/BoundingBox';
import { animalImage, furnitureImage, vegetableImage } from '@/app/images';
import { useState, useRef, useEffect } from 'react';

interface Props {
  search: string;
  image: string;
}

const ClassifierTester = ({ search, image }: Props) => {
  const maxWidth = 600;
  const imgRef = useRef(null);
  const [dims, setDims] = useState({height: 0, width: 0});
  const [scaling, setScaling] = useState(1);
  const [bounds, setBounds] = useState({x1: 0, y1: 0, x2: dims.width, y2: dims.height});
  const [stopBounds, setStopBounds] = useState({...bounds});
  const [data, setData] = useState({
    exists: false,
    ranks: []
  });

  const getPath = (image: string) => {
    if (image == "animals"){ return animalImage}
    else if (image == "furniture"){ return furnitureImage}
    else if (image == "vegetables"){ return vegetableImage}
    else {return null}
  }

  const boundsChange = (topleft: boolean, x: number, y: number) => {
    if (topleft) {
      setBounds({...bounds, x1: x, y1: y});
    } else {
      setBounds({...bounds, x2: x, y2: y});
    }
  }

  const containerStyle = {
    height: dims.height,
    width: dims.width,
  }

  const handleStop = () => {
    if (bounds.x1 == bounds.x2 || bounds.y1 == bounds.y2){ return }
    fetch('http://127.0.0.1:5000/set',{
      method: 'POST',
      headers : {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ 
        x1: Math.round(bounds.x1 * scaling),
        x2: Math.round(bounds.x2 * scaling),
        y1: Math.round(bounds.y1 * scaling),
        y2: Math.round(bounds.y2 * scaling),
        imgname: image
      })
    })
    .then(response => response.json())
    .then(response => {
      //console.log(response);
      let key = 0;
      const items = response.data.split(", ").map((item: string) => ({key: key++, pair: item.split(": ")}));
      setData({exists: true, ranks: items});
      //console.log(items);
    })
    .catch(error => console.log(error))
  }

  //useEffect(handleStop, []); // Load classification on image start

  useEffect(() => {
    while(imgRef.current==null){}
    setScaling(imgRef.current['naturalWidth'] > maxWidth ?
      imgRef.current['naturalWidth'] / maxWidth :
      1
    );
    console.log(scaling);
    setDims({
      height: imgRef.current['naturalHeight'] / scaling,
      width: imgRef.current['naturalWidth'] / scaling
    });
    setBounds({
      x1: 0,
      y1: 0,
      x2: dims.width / scaling,
      y2: dims.height / scaling
    });
    setStopBounds({...bounds});
  }, [imgRef.current]);

  useEffect(() => handleStop(), [stopBounds, image]);

  /*useEffect(() => {
    console.log(imgRef.current.naturalHeight);
    height = imgRef.current ? imgRef.current.naturalHeight : 0;
    width = imgRef.current ? imgRef.current.naturalWidth : 0;
  }, []);*/
  
  return (
    <div className="main-row">
      <div className="image-container" style={containerStyle}>
        <img
          className="input-image"
          ref={imgRef}
          src={getPath(image) ? getPath(image)!.src : animalImage.src}
          alt="A placeholder image"></img>
        <BoundingBox
          height={dims.height}
          width={dims.width}
          bounds={bounds}
          scaling={scaling}
          boundsChange={boundsChange}
          onStop={handleStop}
        ></BoundingBox>
      </div>
      <div className="classifier-results">
        {data.exists ?
          <ul>
            {/*<SearchedCategory></SearchedCategory>
            <TopCategories></TopCategories>*/}
            {data.ranks.map((obj: {key: number, pair: [string, number]}) => 
              <li key={obj.key}>{obj.pair[0]}: {Number(obj.pair[1]).toFixed(5)}</li>)}
          </ul>
          :
          <p>Loading...</p>
        }
      </div>
    </div>
  )
}

export default ClassifierTester;