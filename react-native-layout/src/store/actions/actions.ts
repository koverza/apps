export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';

export const setEmail = (email: string) => ({
    type: SET_EMAIL,
    payload: email,
});

export const setPassword = (password: string) => ({
    type: SET_PASSWORD,
    payload: password,
});
