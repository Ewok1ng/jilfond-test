import React from 'react';

import ResultItemProps from './ResultItem.props';
import styles from './ResultItem.module.scss';
import classNames from 'classnames';
import { Heading } from '../Heading/Heading';
import { Paragraph } from '../Paragraph/Paragraph';
import { useAppSelector } from '../../hooks/redux';

export function ResultItem({ userId, name, email, className, onClick }: ResultItemProps) {
    const { activeUser } = useAppSelector((state) => state.usersReducer);

    return (
        <div
            className={classNames(styles.resultItem, className, {
                [styles.active]: userId === activeUser?.id,
            })}
            onClick={onClick}
        >
            <div className={styles.imageContainer}>
                <img className={styles.image} src="/user-image-sm.png" alt="" />
            </div>
            <div className={styles.resultInfo}>
                <Heading tag="h3" className={styles.resultName}>
                    {name}
                </Heading>

                <Paragraph size="sm" className={styles.resultEmail}>
                    {email}
                </Paragraph>
            </div>
        </div>
    );
}
