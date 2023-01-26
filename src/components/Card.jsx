import React from 'react';
import '../css/card.css';
import mySvg from '../images/photosnap.svg';

const Card = ({logo, company, position, postedAt, contract, location, role, level, languages, tools}) => {
    
    return ( 
        <div className='card'>
            <div className="logo" >
                <img src={mySvg} alt="logo" />
            </div>
            <div className="main">
                <div className="under_logo">
                    <h3>{company}</h3>
                    <p>{position}</p>
                    <div className="preferences">
                        <span>{postedAt}</span>
                        <span>{contract}</span>
                        <span>{location}</span>
                    </div>
                </div>
                
                <hr />
                <div className="skills">
                    <span>{role}</span>
                    <span>{level}</span>
                    {languages.map(( language, index ) => (
                      <span key={index}>{language}</span>
                    ))}
                    {tools.map((tool, index) => (
                        <span key={index}>{tool}</span>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Card;