import React,{useState} from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Section from '../Section/section';
import styles from './FilterTab.module.css'
import { allSongsTabs } from '../../config/helper';

const FilterTab = ({data, loadingState}) => {

    const [value,setValue] = useState(0);

    const handleTabs = (e,val)=>{
        setValue(val);
    }

    function TabPannel(props){
        const {children, value, index} = props;
        return <div>{value === index && <>{children}</>}</div>
    }

    const filteredData = (tabIndex) =>{
        if(tabIndex === 0){
            return data;
        }else{
            const tableLabel = ["Rock", "Pop", "Jazz", "Blues"][tabIndex - 1];
            return data?.filter(
                (item) => item?.genre?.key === tableLabel?.toLocaleLowerCase()
            )
        }
    }


  return (
    <div className={styles.filterSectionWrapper}>
        <Box sx={{width:"100%"}}>
            <Box sx={{borderBottom: 1, borderColor: "divider"}}>
                <Tabs
                    value={value}
                    sx={{
                        ".Mui-selected": {
                        color: `white`,
                        },
                        }}
                    TabIndicatorProps={{
                        style: {
                          backgroundColor: "#34C94B"
                        }
                      }}
                    onChange={handleTabs}
                    aria-label="basic tabs"
                    id={styles.tabs_wrapper}>

                        {allSongsTabs.map((each)=>(
                        <Tab label={each} key={each} sx={{color: "white"}}
                    />
                    ))}
                </Tabs>
            </Box>
            {allSongsTabs.map((_,index) =>(
                <TabPannel key={index} value={value} index={index}>
                 <div>
                    <Section 
                    data={filteredData(index)}
                    type="songs"
                    header={"filterAll"}
                    loadingState={loadingState}
                    />
                 </div>

                </TabPannel>
            ))}
        </Box>
      
    </div>
  )
}

export default FilterTab;
