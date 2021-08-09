import React from 'react'
import { useSelector } from 'react-redux';
import TransactionValue from './transactionvalue'

export default function Transactions() {

    const datastore = useSelector(state => state.datastore)
    const cryptoList = {};

    datastore && Object.keys(datastore).map(key => {
        if (datastore[key]) {
            const data = datastore[key]
            if (cryptoList[data.coin]) {
                cryptoList[data.coin].push(data)
            } else {
                cryptoList[data.coin] = [data]
            }
        }
    })

    return (
        <div>
            {cryptoList ?

                Object.keys(cryptoList).map((key, index) => <TransactionValue key={index} value={cryptoList[key]} />)

                : null
            }

        </div>
    )
}
