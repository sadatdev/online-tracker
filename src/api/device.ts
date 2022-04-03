import { IDevice } from 'types/IDevice';
import { routes } from 'utils/constants';
import { axios } from './axios';

export const getDevices = async () => {
    const response = await axios.get<{ devices: IDevice[] }>(routes.devices);
    return response.data.devices;
};
