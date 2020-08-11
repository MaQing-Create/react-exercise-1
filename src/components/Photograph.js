import React from 'react';
import imgURL from "../assets/avatar.jpg";

const Photograph = () => {
    return (
        <div className="Avatar" style = {{textAlign: 'center'}}>
            <img style = {{borderRadius:50+'%',marginTop:-125+'px'}} src={imgURL} alt="Avatar"/>
        </div>
        );
}

export default Photograph;