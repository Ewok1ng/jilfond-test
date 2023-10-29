import React from 'react';
import classNames from 'classnames';

import styles from './Paragraph.module.scss';

import { ParagraphProps } from './Paragraph.props';

export const Paragraph = ({
    size,
    className,
    children,
    ...props
}: ParagraphProps): React.JSX.Element => {
    return (
        <p
            className={classNames(className, {
                [styles.sm]: size === 'sm',
                [styles.md]: size === 'md',
                [styles.lg]: size === 'lg',
            })}
            {...props}
        >
            {children}
        </p>
    );
};
