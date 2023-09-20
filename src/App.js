import { useEffect, useState } from 'react';
import './App.css';
import { fetchTopAlbums, fetchNewAlbums } from './api/api';
import NavBar from './components/navbar/navbar';
import Hero from './components/Hero/hero';
import Card from './components/Card/card';
import Section from './components/Section/section';



function App() {

  const [topAlbumData, setTopAlbumData] = useState([])

  const[newAlbumData, setNewAlbumData] = useState([]);

  const generateData = async () =>{
    try{
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    }catch(err){
      console.log(err);
    }
    
    
  }

  const generateNewAlbumData = async () =>{
    try{
      const data = await fetchNewAlbums();
      setNewAlbumData(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() =>{
    generateData();
    generateNewAlbumData();
  },[])

  return (
    <div className="App">
      <NavBar/>
      <Hero />
      {/* {topAlbumData.map((item) =>{
        return(
          <Card key={item.id} data={item} type="album"/>
        )
      })} */}
      <div className="sectionWrapper">
      <div>
      <Section data={topAlbumData} title={"Top Albums"}/>
      </div>
      <div>
      <Section data={newAlbumData} title={"New Albums"}/>
      </div>
      </div>
      <hr className="line"></hr>
    </div>
  );
}

export default App;
