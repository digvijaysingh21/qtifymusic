import { useEffect, useState } from 'react';
import './App.css';
import { fetchTopAlbums, fetchNewAlbums, fetchAllSongs } from './api/api';
import NavBar from './components/navbar/navbar';
import Hero from './components/Hero/hero';
// import Card from './components/Card/card';
import Section from './components/Section/section';
import FilterTab from './components/FilterTab/FilterTab';
import { accordionData } from "./config/helper"
import CustomAccordion from './components/Accordion/CustomAccordion';


function App() {

  const [topAlbumData, setTopAlbumData] = useState([])

  const[newAlbumData, setNewAlbumData] = useState([]);

   const [allSongaData, setAllSongsData] = useState([]);


   const _manageLoadingState = (key = "", value = false) => {
		setLoadingState((prev) => ({ ...prev, [key]: value }));
	};

   const [loadingState, setLoadingState] = useState({
		topAlbum: true,
		newAlbum: true,
		allSongs: true,
	});

  const generateData = async () =>{
    try{
      _manageLoadingState("topAlbum", true)
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
      _manageLoadingState("topAlbum", false);
    }catch(err){
      _manageLoadingState("topAlbum", false);
      console.log(err);
    }
    
    
  }

  const generateNewAlbumData = async () =>{
    try{
      _manageLoadingState("newAlbum", true);
      const data = await fetchNewAlbums();
      setNewAlbumData(data);
      _manageLoadingState("newAlbum", false);
    }catch(err){
      _manageLoadingState("newAlbum", false);
      console.log(err);
    }
  }

  const generateAllSongsData = async () =>{
    try{
      _manageLoadingState("allSongs", true);
      const data = await  fetchAllSongs();
      setAllSongsData(data);
      _manageLoadingState("allSongs", true);
    }catch(err){
      _manageLoadingState("allSongs", true);
      console.log(err);
    }
  }

  useEffect(() =>{
    generateData();
    generateNewAlbumData();
    generateAllSongsData();
  },[])

  // const dropDown = topAlbumData?.concat(newAlbumData);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      {/* {topAlbumData.map((item) =>{
        return(
          <Card key={item.id} data={item} type="album"/>
        )
      })} */}
      <div className="sectionWrapper">
      <div>
      <Section data={topAlbumData} type="album" title={"Top Albums"} loadingState={loadingState.topAlbum} />
      </div>
      <div>
      <Section data={newAlbumData} type="album" title={"New Albums"} loadingState={loadingState.newAlbum}/>
      </div>
      </div>
      <hr className="line"></hr>
      <div className="filter_songs_wrapper">
        <div>
          <h3 className="tabs_title">Songs</h3>
        </div>
      <FilterTab data={allSongaData} loadingState={loadingState.allSongs}/>

      </div>
      <hr className='line'></hr>
      <div className='accordionWrapper'>
        <h1 className='accordionHeader'>FAQs</h1>
        {accordionData?.length ?(
          accordionData.map((each,index) =>{
            return <CustomAccordion key={index} data={each}/>
          })
        ):(
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
