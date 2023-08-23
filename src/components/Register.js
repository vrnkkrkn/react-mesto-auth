

export default function Register() {


    return (
        <section className="authorization">
            <h2 className="authorization__title">Регистрация</h2>
            <form className="authorization__form"

            //onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="authorization__input"
                    minLength={10}
                    maxLength={30}
                    required
                //value={}
                //onChange={}
                />
                <input
                    type="text"
                    placeholder="Пароль"
                    name="password"
                    className="authorization__input"
                    minLength={6}
                    maxLength={15}
                    required
                //value={}
                //onChange={}
                />
            </form>
            <button className="authorization__button">Зарегистрироваться</button>
        <p className="authorization__text">Уже зарегистрированы? Войти</p>
        </section>

    )
}