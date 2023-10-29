import React from 'react';

import styles from './Input.module.scss';

import InputProps from './Input.props';
import classNames from 'classnames';

export function Input({ value, onChange, type, placeholder, className }: InputProps) {
    return (
        <input
            className={classNames(styles.input, className)}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}
