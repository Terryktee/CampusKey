import Nav from "./components/nav"
import Footer from "./components/footer"
export default function Home() {
  return (
    <div>
      {/* Navigation Code*/}
      <Nav />
      {/* Main Container Code*/}
      <main>
        {/* Searchbar Code*/}
        <div className="search-box">
          <h1>Find your off-campus home</h1>
          <div className="search">
            <input type="search" name="search" placeholder="search by location or university"></input>
            <button>Search</button>
          </div>
        </div>
        {/* filter Code*/}
        <div className="filter-box">
          <select>
            <option>Property type</option>
            <option>Boys Only</option>
            <option>Girls Only</option>
            <option>Mixed</option>
          </select>
          <select>
            <option>Distance</option>
          </select>
          <select>
            <option>Price Range</option>
          </select>
          <select>
            <option>More filters</option>
          </select>
          <div className="sort">
            <p>Sort by:</p>
            <select>
              <option>Recommendation</option>
            </select>
          </div>
        </div>
        {/* Properties Code*/}
        <div>
          <div className="left-box">
            <h1>Facilities</h1>
           <label><input type="checkbox"/> wifi</label> 
           <label><input type="checkbox"/> Back up Zesa</label> 
           <label><input type="checkbox"/> Backup Water</label> 
           <label><input type="checkbox"/> Gas Stove</label> 
           <label><input type="checkbox"/> Beds</label> 
           <label><input type="checkbox"/> Fridge</label> 
           <label><input type="checkbox"/> Insuit</label> 
           <label><input type="checkbox"/> Chair and Desk</label> 
            <h1>Services</h1>
            <label><input type="checkbox"/> Security</label> 
            <label><input type="checkbox"/>Care taker</label> 
            <h1>Room Type</h1>
            <input type="radio"/><label>Room of 1</label> 
            <input type="radio"/><label>Room of 2</label> 
            <input type="radio"/><label>Room of 3</label> 
            <input type="radio"/><label>room for more than 3</label> 
          </div>
          <div className="right-box">
            <h1>Available off-campus houses</h1>
            <div className="">
              <div className="">
                <img src="image" alt="House Image"></img>
                {/* OverView of Verified or not*/}
                <h1>Off-Campus title + price</h1>
                <h1>Distance</h1>
                <h1>Room type</h1>
                <h1>Bathrooms</h1>
                <h1>Facilities + services </h1>
                <h1>Stars</h1>
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* footer Code*/}
      <footer>
      <Footer />
      </footer>
    </div>
  );
}
