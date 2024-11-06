import 'semantic-ui-css/semantic.min.css';
import { Divider } from 'semantic-ui-react';
import Logo from './Logo'
import Cookies from 'js-cookie'

function Home() {

    function Wipe() {
      Cookies.get("Load");
      Cookies.remove("Load");

      window.open("/story", "_self");
    }

    return (
      <div className="app home">
        <header className="home-header">
          <div className="spacer"></div>
          <Logo size="logo"/>
        </header>
        
        


        <div className='home-buts'>
          <button className="but" onClick={Wipe}>Start a New Journey</button>
          <a href='/story'><button className="but">Continue Journey</button></a>
        </div>


        <div id="inline">
          <Divider className="divi" />
          <p id='or'> Or </p>
          <Divider className="divi" />
        </div>
  
        <a href='/password'><button className="but sec">Enter a Password</button></a>
  
      </div>
    );
  }

export default Home;