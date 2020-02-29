import React, { useState, useMemo } from 'react';

import camera from '../../assets/camera.svg';
import './styles.css'

export default function New(){
    
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null; 
    },[thumbnail]);

    function handleSubmit(){

    }
    
    return (
        <form onSubmit={handleSubmit}>
        <label id="thumbnail" style={{ backgroundImage: `url(${preview})`}}>
            <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
            <img src={camera} alt="Select image"/>
        </label>
        
        <label htmlFor="company">COMPANY *</label>
        <input 
            id="company"
            placeholder="Your amazing company"
            value={company}
            onChange={event => setCompany(event.target.value)}
        />

        <label htmlFor="techs">TECHNOLOGIES *<span> (split by comma)</span></label>
        <input 
            id="techs"
            placeholder="Which techs are used?"
            value={techs}
            onChange={event => setCompany(event.target.value)}
        />

        <label htmlFor="price">DAILY PRICE *<span> (if free leave blank)</span></label>
        <input 
            id="price"
            placeholder="Daily price?"
            value={price}
            onChange={event => setPrice(event.target.value)}
        />

        <button type="submit" className="btn">Register</button>
        </form>
    )
}