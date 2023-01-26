import React, {useRef} from 'react';
import '../css/filter.css';

const Filter = ({filteredData, setFilteredData}) => {
    const ref = useRef(null);
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {
        if(!e.target.value) return setFilteredData(filteredData)

        const resultsArray = filteredData.filter(data => 
            data.role.toString().toLowerCase().includes(e.target.value.toString().toLowerCase()) || 
            data.level.toString().toLowerCase().includes(e.target.value.toString().toLowerCase()) || 
            data.company.toString().toLowerCase().includes(e.target.value.toString().toLowerCase()) ||
            data.languages.toString().toLowerCase().includes(e.target.value.toString().toLowerCase())
        );
        setFilteredData(resultsArray)
    }

    const handleClear = (e) => {
        ref.current.value = '';
        setFilteredData(filteredData)
    }
    
    return ( 
        <header>
            <form className='search' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className='search__input' 
                    id='search'
                    ref={ref}
                    onChange={handleSearchChange}
                /> 
                <button onClick={handleClear}>Clear</button>
            </form>
        </header>
     );
}
 
export default Filter;