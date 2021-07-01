import React from 'react'
const Searchbar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <div className="input-group  " style={{width:600 }}>
                  <select className="input-group-text ">
                  <option>CATEGORY</option>
                    <option>Novel</option>
                    <option>Story</option>
                    <option>Poem</option>
                    <option>History</option>
                    <option>Play</option>
                    <option>Memories</option>
                    <option>Education</option>
                    <option>Travelogue</option>
                    <option>Interview</option>
                    <option>Discussion</option>
                    <option>Collection</option>
                    <option>Autobiography</option>
                    <option>Biography</option>
                    <option>Diary</option>
                    <option>Satire</option>
                    <option>Dictionary</option>
                    <option>Media</option>
                    <option>Environment</option>
                    <option>Translation</option>
                    <option>Cinema</option>
                    <option>Language</option>
                    <option>Translation</option>
                    <option>Women Discussion</option>
                    <option>Gnadhi Sahitya</option>
                    <option>Vivekanand Sahitya</option>
                    <option>Revolutionary</option>
                    <option>Economics</option>
                    <option>Grammer</option>
                    <option>Motivational</option>
                    <option>Politics</option>


                  </select>
  
                  <input type="text" className="form-control"/>
                  <button className="btn btn-warning">
                      <span className="bi bi-search"></span>
                  </button>
  
              </div>

              </div>
              </nav>

    )
}
export default Searchbar;