import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import io, { Socket } from 'socket.io-client';

export default function Home() {

	const socket = useRef<Socket>();
	useEffect(() => {
		socket.current = io({ transports: ['websocket'] });
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Title</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</div>
	)
}
