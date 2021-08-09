import React from 'react'
import { cx } from '../../../utils/classname';
import styles from './button.scss';

export default function Button(props) {

    const { value, onClick, className } = props;

    return (
        <button
            className={cx(styles['button'], className)}
            onClick={onClick}
        >
            {value}
        </button>
    )
}
