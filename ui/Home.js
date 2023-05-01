"use client"
import { useSelector, useDispatch } from 'react-redux';
import { get, isEqual } from 'lodash';

const Home = (props) => {
  let {
    user
  } = useSelector(state => mapStateToProps(state, props), isEqual)

  return (
    <>
      {user && user.userName ? (
        <div>
          Welcome home {user.userName}
        </div>
      ) : (
        <div>
          home
        </div>
      )}
    </>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: get(state, 'user', {}),
  }
}

export default Home;