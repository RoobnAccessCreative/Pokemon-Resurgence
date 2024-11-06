import logo from '../logo.png';

function Logo(props) {
  return (
    <a href='/'><img src={logo} className={props.size}/></a>
  );
}

export default Logo;