import React, { useEffect, useState, useRef } from 'react'
import styles from './dialog.scss'

export default function Dialog() {

    const [dialogValue, setDialogValue] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [childValue, setChildValue] = useState(null)
    const dialogRef = useRef(null)


    function dialogState(dialogState, childvalue) {
        setDialogValue(dialogState)
        setChildValue(childvalue)
    }

    useEffect(() => {
        DialogState.subscribe(dialogState);
    }, [])

    useEffect(() => {

        if (dialogValue) {
            setShowDialog(true)
            dialogRef.current.classList.add(styles['show-dialog']);
        } else {
            dialogRef.current.classList.remove(styles['show-dialog']);
        }




    }, [dialogValue])

    return (
        <div className={styles['container']} ref={dialogRef}>
            <div className={styles['wrapper']}>
                {childValue}
            </div>

        </div>
    )
}


class dialogState {
    constructor() {
        this.isOpen = false;
        this.dialogState = null;
    }

    open(child) {
        this.dialogState(true, child)
    }

    close() {
        this.dialogState(false, null)
    }

    subscribe(dialogState) {
        this.dialogState = dialogState
    }
}

export const DialogState = new dialogState;