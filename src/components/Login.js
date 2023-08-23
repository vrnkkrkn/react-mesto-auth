import { useState } from "react";

export default function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(email, password);
    }

    return (
        <section className="authorization">
            <h2 className="authorization__title">Вход</h2>
            <form
                className="authorization__form"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="authorization__input"
                    minLength={10}
                    maxLength={30}
                    required
                    value={email}
                    onChange={handleChangeEmail}
                />
                <input
                    type="text"
                    placeholder="Пароль"
                    name="password"
                    className="authorization__input"
                    minLength={6}
                    maxLength={15}
                    required
                    value={password}
                    onChange={handleChangePassword}
                />
            </form>
            <button className="authorization__button">Войти</button>
        </section>

    )
}