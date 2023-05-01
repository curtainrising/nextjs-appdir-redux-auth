'use client';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { get, set, isEqual } from 'lodash';
import { addOne } from '@/redux/reducers/uiReducer';

export default function Template({ children, ...rest }) {
  let {
    count
  } = useSelector(state => mapStateToProps(state, rest))
  
  let {
    doAdd
  } = mapDispatchToProps(useDispatch(), rest);


  const handleClick = async () => {
    doAdd();
  }
  return (
    <div>
      <div>
        template - counter - {count}
      </div>
      <button onClick={handleClick}>
        click me to add
      </button>
      {children}
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