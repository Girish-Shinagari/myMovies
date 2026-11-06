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
            <th style={{width:'45vw'}}>Name</th>
            <th style={{width:'15vw'}}>Ratings</th>
            <th style={{width:'15vw'}}>Popularity</th>
            <th style={{width:'15vw'}}>type</th>
            </tr >
          </thead >
          
          <tbody>
            <tr>
              <td style={{display:'flex' , alignItems:'center'}}>
                <img style={{height:'20vh' , padding:'5px'}} src="https://th.bing.com/th/id/OIP.e-u6bCm_Q-lfteh95z21UAHaLJ?w=186&h=280&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="" />
                <div >name</div>
              </td>
              <td style={{padding:'25px'}}>4.2</td>
              <td> 9 </td>
              <td style={{}}>
               action
              <p style={{color:'red'}}>Remove </p>  
              </td>
              
            </tr>

            <tr>
              <td style={{display:'flex' , alignItems:'center'}}>
                <img style={{height:'20vh' , padding:'5px'}} src="https://th.bing.com/th/id/OIP.e-u6bCm_Q-lfteh95z21UAHaLJ?w=186&h=280&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="" />
                <div >name</div>
              </td>
              <td style={{padding:'25px'}}>4.2</td>
              <td> 9 </td>
              <td style={{}}>
                action
               <p style={{color:'red'}}>Remove </p>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
export default Watchlist