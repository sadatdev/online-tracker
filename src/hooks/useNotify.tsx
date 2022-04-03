import { postNotify } from 'api/notify';
import { useMutation } from 'react-query';

export const useNotify = () => {
    return useMutation(postNotify);
};
