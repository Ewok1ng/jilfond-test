import React from 'react';

import styles from './UserInfo.module.scss';
import { Heading } from '../Heading/Heading';
import { Paragraph } from '../Paragraph/Paragraph';
import { useAppSelector } from '../../hooks/redux';

export function UserInfo() {
    const { activeUser } = useAppSelector((state) => state.usersReducer);

    if (activeUser === null) {
        return (
            <div className={styles.noInfoContainer}>
                <Paragraph size="sm" className={styles.noInfo}>
                    Выберите сотрудника, чтобы посмотреть его профиль
                </Paragraph>
            </div>
        );
    }

    return (
        <div className={styles.userInfo}>
            <div className={styles.imageContainer}>
                <img src="/user-image-lg.png" alt="" className={styles.image} />
            </div>
            <div className={styles.info}>
                <Heading tag="h2" className={styles.infoTitle}>
                    {activeUser.name}
                </Heading>
                <div className={styles.emailContainer}>
                    <Heading tag="h3">email:</Heading>
                    <Paragraph size="sm">{activeUser.email}</Paragraph>
                </div>
                <div className={styles.phoneContainer}>
                    <Heading tag="h3">phone:</Heading>
                    <Paragraph size="sm">{activeUser.phone}</Paragraph>
                </div>
                <Heading tag="h2" className={styles.aboutTitle}>
                    О себе:
                </Heading>
                <Paragraph size="sm" className={styles.about}>
                    {`Address: ${activeUser.address.zipcode}, ${activeUser.address.city}, ${activeUser.address.street}, ${activeUser.address.suite}`}
                </Paragraph>
            </div>
        </div>
    );
}
