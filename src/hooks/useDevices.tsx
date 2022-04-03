import { getDevices } from 'api/device';
import { useQuery } from 'react-query';

export const useDevices = () => {
    return useQuery('devices', getDevices, { refetchInterval: 5000, cacheTime: 5 });
};
