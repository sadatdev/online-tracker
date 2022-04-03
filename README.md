# Online Tacker

A React application to track online users. The main features of the app is -

1. Login & Logout user.
2. Persist an user's login data.
3. Show currently active devices.
4. Refresh devices status in every 5 seconds.
5. Notify about the project.

## 👨‍💻 Installation and Setup Instructions

To run locally you will need to clone down this repository. You will need `node` and `npm` or `yarn` installed globally on your machine.

Install the dependencies

```shell
yarn
```

To run the project locally

```shell
yarn start
```

To run eslint and prettier checks

```shell
yarn lint
```

To fix eslint and prettier issues silently

```shell
yarn lint:fix
```

<details>
  <summary> Commands with npm</summary>

Install the dependencies

```shell
npm install
```

To run project locally

```shell
npm start
```

To run eslint and prettier checks

```shell
npm run lint
```

To fix eslint and prettier issues silently

```shell
npm run lint:fix
```

</details>

## 📑 Overview

-   `api/*` - API setup and api functions are here. I have used `axios` as a HTTP Client.
-   `assets/*` - All static contents like icons and images are here.
-   `components/*` - All components of the application go here. Separated by folder, which contains the component itself, specific style modules etc.
-   `Contexts/*` - All context providers for the app are here.
-   `hooks/*` - Custom hooks are here.
-   `styles/*` - The global styles are here.
-   `utils/*.ts` - Helper functions are here.

## 👌 Improvements

As the time was limited to develop the project, I couldn't make it with all the ideas in my mind. Things I consider to add to make it better -

1. Testing: There should be some tests for some specific components.

2. Global error handler: A global error handler can be added to catch unwanted errors. My choice would be `React ErrorBoundary Component` or [react-error-boundary](https://www.npmjs.com/package/react-error-boundary?activeTab=dependencies) package.

## Author

-   [@SadatJubayer](https://www.smjubayer.me)
