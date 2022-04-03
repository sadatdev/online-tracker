import { notifyData, routes } from 'utils/constants';
import { axios } from './axios';

export const postNotify = async () => {
    const response = await axios.post(routes.notify, { ...notifyData });
    return response.data;
};
