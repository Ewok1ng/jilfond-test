import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IUser } from '../../models/IUser';

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async (userParams: string, thunkAPI) => {
        try {
            const params = userParams.split(',');
            let paramsString = '';

            params.forEach((param, index) => {
                if (!Number.isNaN(parseInt(param))) {
                    paramsString += `id=${param.trim()}`;
                } else {
                    paramsString += `username=${param.trim()}`;
                }

                if (index + 1 < params.length) {
                    paramsString += `&`;
                }
            });

            const response = await axios.get<IUser[]>(
                `https://jsonplaceholder.typicode.com/users?${paramsString}`,
            );

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue((e as Error).message);
        }
    },
);
