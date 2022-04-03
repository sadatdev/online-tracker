import Axios from 'axios';
import { API_BASE_URL, TOKEN_KEY } from 'utils/constants';
import { loadState } from './../utils/storage';

export const axios = Axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${loadState(TOKEN_KEY)}`,
    },
});
