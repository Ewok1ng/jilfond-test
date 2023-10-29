import React from 'react';

import styles from './Logo.module.scss';
import { Heading } from '../Heading/Heading';

export function Logo() {
    return (
        <div className={styles.container}>
            <Heading tag="h1" className={styles.logo}>
                Жилфонд
            </Heading>
        </div>
    );
}
