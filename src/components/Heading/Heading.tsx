import React from 'react';
import classNames from 'classnames';

import { HeadingProps } from './Heading.props';

import styles from './Heading.module.scss';

export const Heading = ({ tag, className, children }: HeadingProps): React.JSX.Element => {
    switch (tag) {
        case 'h1':
            return <h1 className={classNames(styles.h1, className)}>{children}</h1>;
        case 'h2':
            return <h2 className={classNames(styles.h2, className)}>{children}</h2>;
        case 'h3':
            return <h3 className={classNames(styles.h3, className)}>{children}</h3>;
    }
};
