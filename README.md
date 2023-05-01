# Nextjs appDir auth template using Redux
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  

This is barebones template using redux with nextjs app (appDir) feature.
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Redux
The main [laout.js](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/app/layout.js) always runs with an initial page load.  As it is a server component the auth request was done here as well.  And due to the way the client/server model works the provider was set up in a child [client component](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/app/root-clientComponent.js).  More information can be found in the nextjs documentation [here](https://beta.nextjs.org/docs/rendering/server-and-client-components)

### Workarounds
Due to the way page.js is loaded react/redux does not recognize an update through useSelector.  layout, [template](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/app/counter/template.js), and any [child components of page](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/ui/Counter.js) can.  

#### Counter
Once the app is running you can open [http://localhost:3000/counter](http://localhost:3000/counter).

There you will see 3 uses of redux.  If you click on any of the buttons the counter will update.  Yet the page counter will not.  If you navigate away by pressing the home link and come back you will see that the page counter has updated.

#### Login
Once the app is running you can open [http://localhost:3000/login](http://localhost:3000/login).  

As with [Counter](#Counter) the redux is part of a [child component of the login page](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/ui/Login.js).  When the button is pressed the [login action](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/redux/actions/api.js) does a login request through the [appdir api](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/app/api/login/route.js) and a cookie is set.  Using the "onmount" and "oncomponentdidchange" effect of the "useeffect" hook, once the users data is set with the [user reducer](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/redux/reducers/userReducer.js) a redirect occurs.

#### Logout
When logged in the [Header component](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/ui/Header.js) shows a logout button.  When clicked a [logout action](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/redux/actions/general.js) unsets the cookie and uses the logout action in the [user reducer](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/redux/reducers/userReducer.js) to unset the user data in the state.

## Authentication
As this is a template there is no actual token management.  Instead hard coded values are used and authentication is done by the simple existense of a cookie called "token".  

As part of the [login action](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/redux/actions/api.js) a cookie is set.  Using [appdir api](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/app/api/auth/route.js) an auth request is sent on [initial page load](https://github.com/curtainrising/nextjs-appdir-redux-auth/blob/master/app/layout.js).
