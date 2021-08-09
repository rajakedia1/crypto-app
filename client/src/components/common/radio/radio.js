import React from 'react'
import { cx } from '../../../utils/classname';
import styles from './radio.scss'

export default function Radio(props) {

    const {value, checked, onClick} = props;

    return (
        <div className={styles['container']} onClick={onClick}>
            <div className={cx(styles['radio'], checked && styles['checked'])}></div>
            <div className={styles['title']}>{value}</div>
        </div>
    )
}
