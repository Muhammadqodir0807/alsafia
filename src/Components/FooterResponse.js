import React from "react";

const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <div className="accordion-wrapper">

            <div
                className={`accordion-title ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(!isOpen)}
            >
                {title}
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">{children}</div>
            </div>
        </div>
    );
};
export const App = () => (
    <div className="col-12 resmedia">
        <Accordion title="Why is">
            <ul>
                <li>
                    <img className='w-50' src="https://alsafia.uz/img/logotip.png" alt=""/>

                </li>
                <li>
                    <h2>Телефон поддержки</h2>
                </li>
                <li>
                    <h2>+998(99) 077 08 49</h2>
                </li>

            </ul>
        </Accordion>
        <Accordion title="What's It ?">
            <ul>

                <li>
                    <img className='mt-3' src="http://qrcoder.ru/code/?http%3A%2F%2Falsafia.uz&4&0" alt=""/>

                </li>
            </ul>
        </Accordion>
        <Accordion title="What Is">
            <ul className="click">
                <li>
                    <img src="https://olcha.uz/_nuxt/img/apelsin.93106ae.png" alt=""/>
                </li>
                <li>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAjCAMAAADrNwfvAAAArlBMVEUAAAAAPYcAPocAPYcAO4UAOYUANYYAPocAPIYAPYcAP4YAPIYAP4gAPocAPogAPocAPoUAQnYAOoUAPoYAPYcAPYYAPocAPYYAPocAPocAPYcAPocAPocAPYcAPocAPoUAPocAPYcAPoYAPokAPYYAPocAPocAPYYAPocAPYcAPogAPocAPYcAPof/hgD/gAAAPYgAPYYAPYf/iQD/hwD/igAAO4T/gAAAPof/iAAXwlIsAAAAOHRSTlMA/fmHGikJwSXzeFmnk3TrIAMWgmUP5bh9793Ww2lLQNCccDk0y4xFq2BSLqOVaQa7s5OG5MQeEsvbhOMAAAIkSURBVEjH3ZRpz6IwEIDbUgtF5RBEFA8Q72N9jz3G///HFmZqSMy7yQb5sNnnA5kp7UNnKLA/YQEyoMz25ef9fv/G2vDsguj2ozPXtPz1+b0jF+hY3W7duCryouzGhSz+Z1ffQ85duEYSUf9aja+5IkAOlM0pO7ZzuYDMMVEZZad2riMgPrbb0ZS1fI+lAMSrk5Rirdq51AwQYW02lvFuWUuuYBAcDGlbVyDgCX/E2pI+qXiftUbtwGAax17hOGtU2Yq9Rngq8qnWib3bh6wDQvU3mvJjKFk3jGbAe0z1al+IVzbuIWYj4/0STwHdcWiU5oyNogqDelz64EsWcLuKHT5hFWuOOLhmqAHEVdEqi/MlRX1eIS5odus4sVQ1+tZnLIB549p4nvdGZzK8QL6I5xDR+UiEOBgXTLw0gzW6YODtcnhH8ZOrjhLawF5ksipiTVUuocj0yLiiOr+QK67m5LD60qVs+MDAoycT4USsLFgb19U5F5AaF/6eoi9dEdjKfEFx4zrrXDliq8glhOAzp3GdYPdwbetGwTvVon2HxmP6PZPYhW0UTcWGXLalfckal/V47HjG++NgABaKM+5KKWlcuKPxwo9r4ZbrCige/bIgNS5X9lLhB4yIhZj5kGFj1wDTirKOVxqShPu9OqxKcpySJ8q4ZOL/JJeeCkiaT3VV2BOP9rwfIg5V707stIdbGZ5w5TCo2zFc1m09hGb+ri8Z8RuJv2K4FAf4iAAAAABJRU5ErkJggg==" alt=""/>
                </li>
                <li>
                    <img src="https://olcha.uz/_nuxt/img/payme.e57aa2a.png" alt=""/>
                </li>
            </ul>
            <ul className="click">
                <li>
                    <img src="https://olcha.uz/_nuxt/img/click.93445f6.png" alt=""/>
                </li>
                <li>
                    <img src="https://olcha.uz/_nuxt/img/humo.7dc7e40.jpeg" alt=""/>
                </li>
                <li>
                    <img src="https://olcha.uz/_nuxt/img/logo-paynet.48b4b59.png" alt=""/>
                </li>
            </ul>
        </Accordion>

        <div className=" lineres">
        <div className="link-five">

        </div>

        </div>
        <div className="d-flex justify-content-between text-light">

            <div><h6> 2017-2021 © Alsafia</h6></div>

        </div>
    </div>
);