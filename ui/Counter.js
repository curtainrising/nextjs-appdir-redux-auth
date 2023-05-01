'use client';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'lodash';

import { addOne } from '@/redux/reducers/uiReducer';

const Counter = (props) => {
  let {
    count
  } = useSelector(state => mapStateToProps(state, props))
  
  let {
    doAdd
  } = mapDispatchToProps(useDispatch(), props);

  const handleClick = async () => {
    doAdd();
  }
  return (
    <div>
      <div>
        component - counter {count}
      </div>
      <button onClick={handleClick}>
        click me to add
      </button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: get(state, 'ui.count', 0),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doAdd: () => {
      dispatch(addOne())
    }
  }
}

export default Counter;