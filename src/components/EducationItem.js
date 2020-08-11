import React from 'react';
import Discribe from './Discribe.js'

const EducationItem = (props) => {

    const getYear = () => {
        return props.year;
    }

    const getTitle =() =>{
        return props.title;
    }

    const getContent = () =>{
        return props.content;
    }

    return (
        <div className="education-item" style={{margin:1+'%'}}>
            <strong style={{float:"left"}}>{getYear()}</strong>
            <Discribe title={getTitle()} content={getContent()}/>
        </div>
    )
}

export default EducationItem;