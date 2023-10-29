import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUser } from './ActionCreators';
import { IUser } from '../../models/IUser';

interface UsersState {
    users: IUser[];
    activeUser: IUser | null;
    isLoading: boolean;
    error: string;
}

const initialState: UsersState = {
    users: [],
    activeUser: null,
    isLoading: false,
    error: '',
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setActiveUser: (state, action: PayloadAction<IUser | null>) => {
            state.activeUser = action.payload;
        },
    },
    extraReducers: {
        [fetchUser.pending.type]: (state) => {
            state.isLoading = true;
        },

        [fetchUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            state.users = [];
        },
        [fetchUser.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
    },
});

export const { setActiveUser } = usersSlice.actions;
export default usersSlice.reducer;
