import react from 'react';

function Banner({backdrop_path,title}) {
    return (
        <>
            <div id="banner" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original${backdrop_path}')`, backgroundSize:'cover', backgroundPosition:'center'}}>    

                 <p id="banner_name">{title}</p>
            </div >

            
        </>
    );
}

export default Banner;