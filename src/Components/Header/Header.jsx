import { FaRegBell } from "react-icons/fa";
import image1 from '../../assets/students.jfif'
import image2 from '../../assets/syria.png'
import './Header.css'
function Header (){
    return( <header>
              <div className='information'>
                <img src={image1} alt="" />
              <div className="text">
                <h3>Islam Shaheen</h3>
                <p>2212105</p>
              </div>
              </div>
              <div className='data'>
                <select>
                    <option value="">العربية</option>
                    <option value="">English</option>
                </select>
                  <FaRegBell className='icon'/>
                <img src={image2} alt="not found" />
              
              </div>
            </header>)
}
export default Header