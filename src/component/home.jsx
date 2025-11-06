
import "./home.css"


function Home(){

    return(
       <>
       <img id="mainPhoto2" src="./image-intro-desktop.jpg" alt="image-intro-desktop" />



       <div id="hamburgerOption">

        <span id="hamburgerOne" >HOW WE WORK</span>
        <span>BLOG</span>
        <span>ACCOUNT</span>
        <span id="hamburgerBorder">VIEW PLANS</span>

        <img id="hamburgerIMG" src="./bg-pattern-mobile-nav.svg" alt="bg-pattern-mobile-nav" />

       </div>
       
        <div className="home">

          <hr id="hrHome"/>
          <img id="left" src="./bg-pattern-intro-left-desktop.svg" alt="bg-pattern-intro-left-desktop" />
          <img id="left2" src="./bg-pattern-intro-left-mobile.svg" alt="bg-pattern-intro-left-mobile" />
          <img id="right2" src="./bg-pattern-intro-right-mobile.svg" alt="bg-pattern-intro-right-mobile" />
          <div className="mainText"><h1>Humanizing your insurance.</h1>
          <p id="homep">Get your life insurance coverage easier and faster. We blend our expertise 
  and technology to help you find the plan that’s right for you. Ensure you 
  and your loved ones are protected.</p>
          <button>View plans</button>
          </div>
          <img id="mainPhoto" src="./image-intro-desktop.jpg" alt="image-intro-desktop" />
        </div>

       </>

       

    )
}


export default Home