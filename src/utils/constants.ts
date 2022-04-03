const API_BASE_URL = 'http://35.201.2.209:8000';

const TOKEN_KEY = 'auth-token';

const routes = {
    login: 'login',
    devices: 'devices',
    notify: 'notify',
};

const notifyData = {
    name: 'Sadat Jubayer',
    email: 'sadatjubayer@gmail.com',
    repoUrl: 'https://github.com/sadatdev/online-tracker',
    message:
        'Hello there! Here is the completed project. Please find the source code on my github repo. Thanks.',
};

export { API_BASE_URL, TOKEN_KEY, routes, notifyData };
