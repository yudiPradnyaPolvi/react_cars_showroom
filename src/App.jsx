import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='containers'>
        <div className='headers'>
          <img src="img/pz/logo-pz.png" alt="logo-pz" />
          <h1>ZILLA SHOWROOM</h1>
        </div>
        <div className='content-header'>
          <p>Cari Mobil Impian Anda</p>
          <div class="search-container">
            <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search"></input>
            </form>
          </div>
          <div className='dropdown-content'>
          <form action="/action_page.php">
            <label for="cars">merek:</label>
            <select id="cars" name="cars">
              <option ><input type="checkbox" name="merk" id="merk" />volvo</option>
              <option ><input type="checkbox" name="merk" id="merk" />volvo</option>
              <option ><input type="checkbox" name="merk" id="merk" />volvo</option>
              <option ><input type="checkbox" name="merk" id="merk" />volvo</option>
              
            </select>
            <label for="cars">Tipe:</label>
            <select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat" selected>Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <label for="cars">warna:</label>
            <select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat" selected>Fiat</option>
              <option value="audi">Audi</option>
            </select>

            </form>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
