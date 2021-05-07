import React from "react";

import styles from './styles/stockForm.module.css';

type FormProps = {
	id: string
}

const StockForm = ({id}: FormProps) => {
	return(
		<form id={id} className={styles.form}>
			<label htmlFor="symbol">Enter Symbol:
				<input type="search" name="symbol" id="symbol" placeholder="Symbol (Ex. AAPL)" />
			</label>
			<output></output>
		</form>
	);
};

export default StockForm;