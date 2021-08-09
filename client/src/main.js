import React, { useEffect, useState } from 'react';
import Dialog from './components/common/dialog/dialog';
import Header from './components/header/header';
import {useDispatch} from 'react-redux'

import styles from './main.scss';
import { firebaseDatabase } from './utils/firebaseutils';
import { UPDATE_DATA } from './reducers/actions';
import CoinValueBox from './components/coinvaluebox/coinvaluebox';
import Transactions from './components/transactions/transactions';

function Main() {

	const dispatch = useDispatch()

	function getAllData() {
		firebaseDatabase.on('value', snap => {
			const items = snap.val();

			dispatch({
				type: UPDATE_DATA,
				payload: items
			});
		})
	}


	useEffect(() => {
		getAllData()
	}, [])

	return (
		<div className={styles['container']}>
			<Header />
			<CoinValueBox />
			<Transactions />
			<Dialog />
		</div>
	);
}

export default Main;