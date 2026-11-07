import react, { useEffect, useState } from 'react';

function MoviePages({prevPage, nextPage, currentPage}) {
    return (
        <>
        <div style={{marginTop:'20px', backgroundColor:'rgba(0, 0, 0, 0.3)', width:'100%', height:'50px' ,textDecoration : 'none' ,textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
          <div onClick={prevPage} >  <a  style={{  background: 'rgba(0, 0, 0, 0.3)',textDecoration:'none',cursor:'pointer'}}>&larr;</a> </div>
           <p style={{  background: 'rgba(0, 0, 0, 0.2)'}}>{currentPage}</p>

          <div onClick={nextPage} >  <a  style={{  background: 'rgba(0, 0, 0, 0.3)',textDecoration:'none',cursor:'pointer'}}>&rarr;</a> </div>
        </div>
            
        </>
    )
}

export default MoviePages