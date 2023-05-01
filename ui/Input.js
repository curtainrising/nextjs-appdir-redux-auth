"use client"
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input as SemanticInput } from 'semantic-ui-react'
import { get, isEqual } from 'lodash';

import { setFormData, removeFormData } from '@/redux/reducers/formReducer';

const Input = (props) => {
  const {
    id,
    label,
  } = props;

  const {
    value,
  } = useSelector(state => mapStateToProps(state, props), isEqual);

  const {
    onMount,
    onUnMount,
    onChange,
  } = mapDispatchToProps(useDispatch(), props);

  useEffect(() => {
    onMount(value)
    return onUnMount;
  }, [])

  // const formClasses = classnames({'form-group': !!label})
  return (
    <div>
      {label && <label>{label}</label>}
      <div>
        <div>
          <SemanticInput
            id={id}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}



const mapStateToProps = (state, ownProps) => {
  const { id, defaultValue } = ownProps;
  return {
    value: get(state, `formData.${id}`, defaultValue),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, value, defaultValue } = ownProps;
  const onMount = (formDataVal) => {
    let setValue = value || defaultValue || '';
    dispatch(setFormData({[id]: setValue}))
  }
  const onUnMount = () => {
    dispatch(removeFormData([id]));
  }
  const onChange = (e, target) => {
    dispatch(setFormData({
      [id]: target.value,
    }))
  }
  return {
    onMount,
    onUnMount,
    onChange,
  }
}

export default Input
