function loadView(path) {
    return () =>
        import(
            /* webpackChunkName: "[request]" */
            // /* webpackPrefetch: true */
            // /* webpackPreload: true */
            `../views/${path}`
        );
};

export default [
    {
        path: '/',
        name: 'home',
        component: loadView('index.vue'),
    },
    {
        path: '/expirement',
        name: 'expirement',
        component: loadView('expirements'),
        redirect: '/expirement/create-an-expirement',
        children: [
            {
                path: 'create-an-expirement',
                name: 'create-an-expirement',
                component: loadView('expirements/create-an-expirement'),
            },
            {
                path: 'expirement-by-days',
                name: 'expirement-by-days',
                component: loadView('expirements/expirement-by-days'),
            },
            {
                path: 'expirement-by-sessions',
                name: 'expirement-by-sessions',
                component: loadView('expirements/expirement-by-sessions'),
            },
        ]
    }
];
