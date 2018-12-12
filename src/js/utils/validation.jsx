import validator from 'validator';
import React from 'react';
const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return (
      <span className="validate-error-msg">
        必填项
      </span>
    );
  }
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return (
      <span className="validate-error-msg">
        请输入一个有效的邮箱
      </span>
    );
  }
};

const minLength = (value, props) => {
  // get the minLength from component's props
  if (value.toString().trim().length < props.minLength) {
    return (
      <span className="validate-error-msg">
        长度不少于6位
      </span>
    );
  }
};

export {
  required,
  email,
  minLength
};