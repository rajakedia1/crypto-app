import React from 'react'
import { useSelector } from 'react-redux'
import styles from './coinvaluebox.scss'

export default function CoinValueBox() {

    const datastore = useSelector(state => state.datastore)
    let totalBuyingPrice = 0;
    let totalSoldPrice = 0;
    const cryptoList = {};

    datastore && Object.keys(datastore).map(key => {
        if (datastore[key]) {
            const data = datastore[key]
            const total = parseFloat(data.quantity, 10) * parseFloat(data.price, 10)

            if (data.type === 'BUY') {
                totalBuyingPrice += total;
            } else {
                totalSoldPrice += total;
            }
            if (cryptoList[data.coin]) {
                cryptoList[data.coin].push(data)
            } else {
                cryptoList[data.coin] = [data]
            }
        }
    })


    return (
        <div className={styles['container']}>
            <div className={styles['row']}>
                <div className={styles['items']}>
                    <span>Crypto Count</span>
                    {Object.keys(cryptoList).length}
                </div>
                <div className={styles['items']}>
                    <span>Current Investment</span>
                    Rs {(totalBuyingPrice - totalSoldPrice).toFixed(2)}
                </div>

            </div>
            <div className={styles['row']}>
                <div className={styles['items']}>
                    <span>Cost Price</span>
                    Rs {totalBuyingPrice.toFixed(2)}
                </div>
                <div className={styles['items']}>
                    <span>Total Sold</span>
                    Rs {totalSoldPrice}
                </div>

            </div>
        </div>
    )
}
