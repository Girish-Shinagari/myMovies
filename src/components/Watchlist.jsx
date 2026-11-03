import reat from 'react'

function Watchlist() {
  return (
    <>
      

      <div id="watchList-sectoin-one">

        <div id="watchlist-buttons">
          <button>All types</button>
          <button>Action</button>
          <button>Crime</button>
        </div>

        <div id='search-bar'>
          <input type="text" placeholder='search movies' />
        </div>
      </div>

      <div id="watchList-sectoin-two" style={{marginTop:'20px'}}>
        <table style={{width:'90vw',marginLeft:'5vw',tableLayout:'fixed'}}>
          <thead id='table-headings' style={{textAlign:'center'}}>

           
            <tr >
            <th style={{width:'45vw'}}>Name</th>
            <th style={{width:'15vw'}}>Ratings</th>
            <th style={{width:'15vw'}}>Popularity</th>
            <th style={{width:'15vw'}}>type</th>
          </tr>
          </thead>
          


        </table>
      </div>
    </>
  )
}
export default Watchlist