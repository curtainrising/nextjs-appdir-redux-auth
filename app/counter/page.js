'use client';
import { useSelector, useDispatch } from 'react-redux';
import { get, set, isEqual } from 'lodash';
import { addOne } from '@/redux/reducers/uiReducer';

import { Counter } from '@/ui/exportedComponents';

export default async function Page(props) {
  let {
    count
  } = useSelector(state => mapStateToProps(state, props), isEqual)
  
  let {
    doAdd
  } = mapDispatchToProps(useDispatch(), props);

  const handleClick = async () => {
    doAdd();
  }
  return (
    <div>
      <div>
        page - counter {count}
      </div>
      <button onClick={handleClick}>
        click me to add
      </button>
      <Counter />
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