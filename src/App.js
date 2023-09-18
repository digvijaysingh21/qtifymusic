import { useEffect, useState } from 'react';
import './App.css';
import { fetchTopAlbums } from './api/api';
import NavBar from './components/navbar/navbar';
import Hero from './components/Hero/hero';
import Card from './components/Card/card';



function App() {

  const [topAlbumData, setTopAlbumData] = useState([])

  const generateData = async () =>{
    try{
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    }catch(err){
      console.log(err);
    }
    
    
  }

  useEffect(() =>{
    generateData();
  },[])

  return (
    <div className="App">
      <NavBar/>
      <Hero />
      {topAlbumData.map((item) =>{
        return(
          <Card key={item.id} data={item} type="album"/>
        )
      })}
    </div>
  );
}

export default App;
