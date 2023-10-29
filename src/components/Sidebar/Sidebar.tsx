import React from 'react';

import styles from './Sidebar.module.scss';
import { Heading, Input, Paragraph, ResultItem } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUser } from '../../store/reducers/ActionCreators';
import { setActiveUser } from '../../store/reducers/usersSlice';
import { IUser } from '../../models/IUser';

export function Sidebar() {
    const dispatch = useAppDispatch();
    const { isLoading, users } = useAppSelector((state) => state.usersReducer);
    const [searchValue, setSearchValue] = React.useState<string>('');

    React.useEffect(() => {
        dispatch(fetchUser(searchValue));
        dispatch(setActiveUser(null));
    }, [dispatch, searchValue]);

    const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const onSelectUser = (user: IUser) => dispatch(setActiveUser(user));

    return (
        <aside className={styles.sidebar}>
            <Heading className={styles.searchTitle} tag="h2">
                Поиск сотрудников
            </Heading>
            <Input
                className={styles.searchInput}
                onChange={onChangeSearchValue}
                value={searchValue}
                type="text"
                placeholder="Введите id или username"
            />
            <Heading className={styles.resultsTitle} tag="h2">
                Результаты
            </Heading>

            {!isLoading && users.length <= 0 && searchValue.length <= 0 && (
                <Paragraph size="sm">начните поиск</Paragraph>
            )}

            {!isLoading && users.length <= 0 && searchValue.length > 0 && (
                <Paragraph size="sm">ничего не найдено</Paragraph>
            )}

            {isLoading && <Paragraph size="sm">Загрузка...</Paragraph>}

            {!isLoading && (
                <div className={styles.results}>
                    {users.map((item) => (
                        <ResultItem
                            key={item.id}
                            userId={item.id}
                            className={styles.resultItem}
                            name={item.name}
                            email={item.email}
                            onClick={() => onSelectUser(item)}
                        />
                    ))}
                </div>
            )}
        </aside>
    );
}
