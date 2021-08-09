import React from 'react'
import { rupees } from '../../utils/constants'
import { DialogState } from '../common/dialog/dialog';
import TransactionsDialog from './transactionsDialog';
import styles from './transactionvalue.scss'

export default function TransactionValue({value}) {

    let totalPrice = 0;
    let netQuantity = 0;

    if(value.length > 0) {
        value.map(v => {
            const total = parseFloat(v.quantity, 10) * parseFloat(v.price, 10)
            if (v.type === 'BUY') {
                totalPrice += total;
                netQuantity += parseFloat(v.quantity, 10);
            } else {
                totalPrice -= total;
                netQuantity -= parseFloat(v.quantity, 10);
            }
        })
    }

    function openTransactionDialog() {
        DialogState.open(<TransactionsDialog value={value}/>)
    }

    return (
        <div className={styles['container']} onClick={openTransactionDialog}>
            <div className={styles['row']}>
                <div className={styles['title']}>{value[0].coin}</div>
                <div className={styles['avg']}><span>Avg Price: </span>{rupees} {(totalPrice / netQuantity).toFixed(2)}</div>
            </div>
            <div className={styles['row']}>
                <div className={styles['avg']}><span>Total Price: </span>{rupees} {totalPrice.toFixed(2)}</div>
                <div className={styles['avg']}><span>Quantity: </span>{netQuantity.toFixed(3)}</div>
            </div>
        </div>
    )
}
