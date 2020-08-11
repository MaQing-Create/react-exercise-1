import React from 'react';

const Discribe = (props)=>{
    const getTitle =()=>{
        return props.title;
    }

    const getContent =()=>{
        return props.content;
    }

    return(
        <div className="discribe" style={{width:95+'%',background:"gainsboro",marginLeft:5+'%'}}>
            <p style = {{padding:1+'%'}}><strong>{getTitle()}</strong></p>
            <p style = {{padding:1+'%'}}>{getContent()}</p>
        </div>
    )
}

export default Discribe;