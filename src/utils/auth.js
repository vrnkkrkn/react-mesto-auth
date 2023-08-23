export const BASE_URL = 'https://auth.nomoreparties.co';

/** проверка, всё ли в порядке с ответом от сервера */
const checkRes = (res) => {
    if(res.ok) {
        return res.json();
    }
return Promise.reject(`Ошибка: ${res.status}`);
}

/** запрос для регистрации в сервисе */
export const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email })
    })
    .then(checkRes)
        .catch((err) => console.log(err));
};

/** запрос для авторизации в сервисе */
export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email })
    })
    .then(checkRes)
    .catch((err) => console.log(err));
};

/** запроса для проверки валидности токена и получения email для вставки в шапку сайта */
export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(checkRes)
    .catch((err) => console.log(err));
}