import React from 'react';

import styles from './styles/header.module.css';


const Header = () => {
	return(
		<header className={styles.header}>
			<h1>React + TypeScript! {new Date().toLocaleDateString()}</h1>
		</header>
	);
};

export default Header;