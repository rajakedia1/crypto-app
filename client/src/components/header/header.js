import React from 'react'
import AddCoinDialog from '../addcoindialog/addcoindialog'
import Button from '../common/button/button'
import { DialogState } from '../common/dialog/dialog'
import styles from './header.scss'



export default function Header() {

    function openDialog() {
        DialogState.open(<AddCoinDialog />)
    }

    return (
        <header
            className={styles['header']}

        >
            <div className={styles['title']}>Crypto Track</div>

            <div className={styles['right']}>
                <Button
                    className={styles['button']}
                    value={
                        <div className={styles['plus']}></div>
                    }
                    onClick={openDialog} />
            </div>
        </header>
    )
}
