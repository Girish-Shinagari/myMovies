import react, { useEffect, useState } from 'react';

function MoviePages({prevPage, nextPage, currentPage}) {
    return (
        <>
        <div style={{marginTop:'20px', backgroundColor:'rgba(0, 0, 0, 0.3)', width:'100%', height:'50px' ,textDecoration : 'none' ,textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
          <div onClick={prevPage} >  <i> &larr; </i> </div>
           <p>{currentPage}</p>

          <div onClick={nextPage} >  <i>&rarr;</i> </div>
        </div>
            
        </>
    )
}

export default MoviePages