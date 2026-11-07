import react from 'react'

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
        <table style={{width:'90vw',marginLeft:'5vw',tableLayout:'fixed',border:'2px solid #3d3d3d'}}>
          <thead id='table-headings' style={{textAlign:'center'}}>
            <tr >
            <th style={{width:'40vw'}}>Name</th>
            <th >Ratings</th>
            <th >Popularity</th>
            <th >type</th>
            </tr >
          </thead >
          
          <tbody>

            <tr style={{border:'5px solid white'}}>
              <td style={{display:'flex' , alignItems:'center'}}>
                <img style={{height:'15vh' , paddingLeft:'5px'}} src="https://th.bing.com/th/id/OIP.e-u6bCm_Q-lfteh95z21UAHaLJ?w=186&h=280&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="" />
                <div style={{paddingLeft:'5px'}}>name</div>
              </td>
              <td >4.2</td>
              <td > 9 </td>
              <td >action</td>
              <td ><span style={{color:'red',cursor:'pointer'}}>remove</span></td>
              
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}
export default Watchlist