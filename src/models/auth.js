const Auth = {
    endpoints: {
        login: "/login",
        register: "/register",
        logout: "/logout",
        me: "/me",
    },

    loginConfig: [
        {
            key: "email",
            label: "Username / Email",
            type: "email",
            placeholder: "Masukkan Username atau Email",
        },
        {
            key: "password",
            label: "Password",
            type: "password",
            placeholder: "Masukkan Password",
        },
    ],
};

export default Auth;
