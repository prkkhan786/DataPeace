import React from 'react';

const SearchBox = (props) => {
    const {onsearch,value} = props;
    return ( 
    <div className="col-12">
       <input type="text"
        className="form-control" 
        aria-label="Text input with dropdown button" 
        placeholder="Search with firstname"
        onChange={onsearch}
        value={value}/>
        <p></p>
    </div> 
    );
}
 
export default SearchBox;