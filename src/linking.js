const config = {
  screens: {
    Home: 'home',
    Authenticate: {
      path: 'authenticate',
    },

    Notifications: 'notifications',
    Settings: 'Settings',
  },
};

const linking = {
  prefixes: ['reddit://sample'],
  config,
};

export default linking;
