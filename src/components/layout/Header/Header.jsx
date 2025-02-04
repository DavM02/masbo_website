import './header.scss'
import { Link } from 'react-router-dom';
import logo from '@assets/icons/MASBO_Logo 2.svg'
export default function Header() {
  return (
    <header>
      <div
        className='container'>
        <div
          className='row s-between'>

          <div
            className='row center-y gap-115'>
            <Link
              to={'/'}>
              <img
                className='icon'
                src={logo}
                alt='logo' />
            </Link>

            <nav>
              <ul
                className='row gap-50'>

                <li>
                  <Link >
                    About us
                  </Link>
                </li>

                <li>
                  <Link >
                    Portfolio
                  </Link>
                </li>

                <li>
                  <Link >
                    Team
                  </Link>
                </li>

                <li>
                  <Link >
                    Services
                  </Link>
                </li>

                <li>
                  <Link >
                    News
                  </Link>
                </li>

                <li>
                  <Link >
                    Contacts
                  </Link>
                </li>
                
              </ul>
            </nav>
          </div>

          <div>
            <div>
              <span></span>
            </div>

            <div
              className='menu-bars'></div>
          </div>
        </div>
      </div>
    </header>
  )
}
