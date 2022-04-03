import { routes } from 'utils/constants';
import { axios } from './axios';

//@Types
interface ILoginPrams {
    email: string;
    password: string;
}
// interface IGetAllResponse {
//     // results: IRestaurant[];
// }

export const login = async ({ email, password }: ILoginPrams) => {
    const response = await axios.post(routes.login, { email, password });
    return response;
};
