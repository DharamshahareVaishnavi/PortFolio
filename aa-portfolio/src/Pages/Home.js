import React, { useContext } from 'react'
import { data } from '../Store'



const Home = () => {

  let { mode, setMode } = useContext(data)
  return (
    <>
    <div id='Home'>
    <div className={`container-fluid bg-${mode ? 'dark' : 'light'}`} style={{ marginTop: "60px" }}>
        <div className="row align-items-center">
          <div className={`col-6 text-${mode ? 'light' : 'dark'}`}>
            <img src="images/smallscreen.24178486-removebg-preview.png" alt="" width="100%" />
          </div>
          <div className={`col-6 text-${mode ? 'light' : 'dark'}`}>
            <h1>FRONT-END DEVELOPER</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet non fugit blanditiis quia reprehenderit, maiores fuga aliquid inventore eius!</p>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Home