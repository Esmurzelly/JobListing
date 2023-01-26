import React, {useState} from 'react'

import dataJob from '../data.json';

import Card from './Card';
import Filter from './Filter';

import '../css/list.css';

const List = () => {
    const [impData, setImpData] = useState(dataJob);
    const [filteredData, setFilteredData] = useState(dataJob);
   
    return ( 
        <div className='container'>
            <div className="header_background"></div>

            <Filter 
                filteredData={impData}
                setFilteredData={setFilteredData}
            />
            
            <div className="list_job">
                {
                    filteredData.map(data => {
                        return (
                            <Card 
                                key={data.id}
                                logo={data.logo} 
                                company={data.company}
                                position={data.position} 
                                postedAt={data.postedAt} 
                                contract={data.contract} 
                                location={data.location} 
                                role={data.role} 
                                level={data.level} 
                                languages={data.languages}
                                tools={data.tools}
                            />
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default List;