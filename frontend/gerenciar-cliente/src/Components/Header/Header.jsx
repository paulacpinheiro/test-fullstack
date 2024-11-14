import './Styles.css';
import logo from '../../images/logoUol.png';


const Header = () => {
    return (
       <div className='topo'>
              <img src={logo} alt="Logo" className='logo'/>
       </div>
    )
}

export default Header;