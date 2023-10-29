import React from 'react';

import styles from './HomePage.module.scss';

import { Logo, Sidebar, UserInfo } from '../../components';

export function HomePage() {
    return (
        <div className={styles.homePage}>
            <div className={styles.header}>
                <Logo />
                <a href="/" className={styles.user}>
                    Пользователь
                </a>
            </div>
            <div className={styles.content}>
                <Sidebar />
                <UserInfo />
            </div>
        </div>
    );
}
