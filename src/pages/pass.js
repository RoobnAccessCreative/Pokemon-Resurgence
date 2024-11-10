import Logo from './Logo';
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
import React, {useState} from 'react';
import {path} from '../data.js'
import Cookies from 'js-cookie'





function Page() {
  const [visible, setVisible] = React.useState(false);
  const [error, setError] = useState(false);


  function CheckInput() {
    setError(false); // resets every change

    let val = document.getElementById('password').value.toUpperCase();
    
    if (val.length === 6) { //waits until full password is entered
      if (!(val in path)) { //checks if it's valid

        setError(true) //error = true

      } else {
        setError('correct') //full match
      }
    } 
    

  }

  function Validate() { //final check on button press - uses CheckInput info
    let val = document.getElementById('password').value.toUpperCase();

    if (error === 'correct') {

      const load = () => { //finds cookie
        return Cookies.get("Load");
      };
      
      if (load != null) {
          Cookies.set("Load", val) //sets cookie for desired page
      };
      
      window.open('/story', '_self'); //links to story.js - state done on that page
   
    } else {
      setError(true)
    }
  }
  
  return (
    <div className='app'>

      <Grid columns={1}>
        
        <GridColumn>
          <SidebarPushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='push'
    
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
              

            </Sidebar>

            <SidebarPusher dimmed={visible}>
              <Segment basic>
                <div id='pword'>
                  <header className='story-header'>
                    <Logo size="logo small"/>
                    
                    <Icon
                      name='bars' className='sidebar' size='big'
                      onClick={() => setVisible(!visible)} 
                    />
                  </header>

                  <div className='spacer'></div>

                  <div className='pword-flex'>
                    <h1 className='head'>Enter a Story Code</h1>

                    <input id='password' maxLength={6} onChange={CheckInput} placeholder='0NNN01'></input>
                    {/* <div className='error-y-but'> */}
                    {error === true ? 
                      <>
                        <p className='invalid-p'>* '{document.getElementById('password').value.toUpperCase()}' is not a valid story code.</p>
                        <button className='but p e'onClick={Validate}>Confirm</button>
                      </>
                    : <><button className='but p'onClick={Validate}>Confirm</button></>}

                    
                    {/* </div> */}
                  </div>

                </div>
              </Segment>
            </SidebarPusher>
          </SidebarPushable>
        </GridColumn>
      </Grid>

  </div>

  );
}

export default Page;
