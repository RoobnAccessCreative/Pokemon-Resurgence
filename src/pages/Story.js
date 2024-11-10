import 'semantic-ui-css/semantic.min.css';
import {
  SidebarPusher,
  SidebarPushable,
  MenuItem,
  GridColumn,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import Logo from './Logo' 
import {path} from '../data.js'
import pokeball from '../pokeball.png'
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'


function Wipe() {
  Cookies.get("Load");
  Cookies.remove("Load");

  window.open("/story", "_self");
}

function Tale({visible, setVisible}) {
  const [curStory, setStory] = useState(path["0NNN01"])
  
  useEffect(() => {
    // This will run only once, after the initial render
    const savedStory = Cookies.get("Load");
    
    if (savedStory && savedStory in path) {
      setStory(path[savedStory]);
    }
  }, []); // Empty dependency array ensures this only runs once after initial render

  function handleStoryChange(option){
    Cookies.set("Load", path[option]["code"])
    setStory(path[option])
  }

 
  
  function Balls() {
    let pBalls = [];
    for (let i = 0; i < curStory["ballNum"]; i++) {
      pBalls.push(<img src={pokeball} className='pokeball' aria-hidden="true"/>)
    }
    return(pBalls);
  }


  return (

    <>
      {curStory["end"] ? //if its an ending:
      <div id='container'>
        <img className='end-img' src={curStory["background"]}/>
        <h1 className={'end-title '+curStory["value"]}>{curStory["name"]} ENDING</h1>
        <div className='left'><button className={'but end '+curStory["value"]} onClick={Wipe}>New Game</button></div>
        <a href='/' className='right'><button className={'but end '+curStory["value"]}>Title Screen</button></a>
      </div>
      : //if its a regular page:
      <>

        <header className='story-header'>
          <Logo size="logo small"/>
          
          <Icon
            name='bars' className='sidebar' size='big'
            onClick={() => setVisible(!visible)} 
          />
        </header>

        <div className='splitter'></div>

        <div className='content'>

          <div id='info-container'>
            <Balls />
            <h2 id='loca'>{curStory["area"]}</h2>
          </div>

          {
          !curStory["text2"] ? 
          <p className='text'>{curStory["text1"]}</p>
          :
          <>  
          <p className='text'>{curStory["text1"]}</p> 
          <p className='text'>{curStory["text2"]}</p>
          </>
          }

        
          {curStory["opt"].length === 1 ?
          <div className='options'>
            <button className='but opt' onClick={() => handleStoryChange(curStory["opt"][0][1])  }>{curStory["opt"][0][0]}</button>
          </div>
          : curStory["opt"].length === 2 ?
          <div className='options'>
            <button className='but opt' onClick={() => handleStoryChange(curStory["opt"][0][1])  }>{curStory["opt"][0][0]}</button>
            <button className='but opt' onClick={() => handleStoryChange(curStory["opt"][1][1])  }>{curStory["opt"][1][0]}</button>
          </div>
          :
          <div className='options'>
            <button className='but opt' onClick={() => handleStoryChange(curStory["opt"][0][1])  }>{curStory["opt"][0][0]}</button>
            <button className='but opt' onClick={() => handleStoryChange(curStory["opt"][1][1])  }>{curStory["opt"][1][0]}</button>
            <button className='but opt' onClick={() => handleStoryChange(curStory["opt"][2][1])  }>{curStory["opt"][2][0]}</button>
          </div>    
          }

          <div className='count-cont'>
            <div className='but counter pos'>
              <h3>{curStory["code"]}</h3>
            </div>
          </div>
            
        </div>

      </>
      } 

      </>
  );
}


function Story() {
  const [visible, setVisible] = React.useState(false);


  return (
    <div className='app'>
          
          <Grid columns={1}>
        
          <GridColumn>
            <SidebarPushable as={Segment}>
              <Sidebar
                as={Menu}
                animation='push'
                icon='labeled'
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                direction='right'
                width='wide'>

                <MenuItem>
                  <div className='spacer'></div>
                </MenuItem>
                <MenuItem>
                  <button className='but long' onClick={() => setVisible(!visible)}>Return</button>
                </MenuItem>
                <MenuItem>
                  <a href='/'><button className='but dos long'>Retreat</button></a>
                </MenuItem>
                <MenuItem>
                  <button className='but tres long' onClick={Wipe}>Restart</button>
                </MenuItem>
                



              </Sidebar>

              <SidebarPusher dimmed={visible}>
                <Segment basic>
                  
                    <Tale visible={visible} setVisible={setVisible}/>
                  
                </Segment>
              </SidebarPusher>
            </SidebarPushable>
          </GridColumn>
        </Grid>
    </div>
  
  );
}

export default Story;
