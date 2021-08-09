import React from 'react'
import { cx } from '../../../utils/classname';
import styles from './input.scss'

export default function Input(props) {

    const { value, onTextChange, className, placeholder, type } = props;

    function onChangeHandler(evt) {
        onTextChange(evt.target.value)
    }

    return (
        <input
            type={type || 'text'}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            className={cx(styles["input"], className)}


        />


    )
}
