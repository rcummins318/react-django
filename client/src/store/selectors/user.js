import { get } from 'lodash';

export const selectUsers = (state) => get(state, 'user.users.data');

export const selectUserStatus = (state) => get(state, 'user.status');

export const selectUserError =(state) => get(state, 'user.error');
