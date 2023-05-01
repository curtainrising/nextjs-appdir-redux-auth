'use client';

import { useSelector, useDispatch } from 'react-redux';
import { get } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

import { logout } from '@/redux/actions/general';

const Header = (props) => {
  let router = useRouter();
  let {
    user
  } = useSelector(state => mapStateToProps(state, props))
  
  let {
    doLogout
  } = mapDispatchToProps(useDispatch(), props);

  const handleClick = () => {
    doLogout()
    router.push('/');
  }
  return (
    <div className='header-menu'>
      <Link className='header-menu-item'
        href='/'
      >
        home
      </Link>
      <Link className='header-menu-item'
        href='/counter'
      >
        Counter
      </Link>
      {(!user || !user.token) ? (
        <Link className='header-menu-item-right'
          href='/login'
        >
          login
        </Link>
      ): (
        <button 
          className='header-menu-item-right'
          onClick={handleClick}
        >
          Logout
        </button>
      )}
      
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: get(state, 'user', {}),
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doLogout: () => {
      dispatch(logout());
    }
  }
}
export default Header;