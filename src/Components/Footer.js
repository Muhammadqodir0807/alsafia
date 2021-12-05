import React, {Component} from 'react';
import {App} from "./FooterResponse";
import {Link} from "react-router-dom";

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div className="footer">
                <div className="media">
                    <div className="footer-link">
                        <div className="link-one w-25">
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

                        </div>
                        <div className="link-two">
                            <ul>

                                <li>
                                    <img
                                        src="https://cdn-icons.flaticon.com/png/128/2504/premium/2504903.png?token=exp=1638704285~hmac=83981f5cd559c69ab9109b444daa9435"
                                        alt=""/>
                                    <h2>Facebook</h2>
                                </li>
                                <li>
                                    <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt=""/>
                                <h2>Instagram</h2>
                                </li>
                                <li>
                                    <img src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536661.png?token=exp=1638704824~hmac=ebfdf2be2a18703f6a6a2cd7fc82979b" alt=""/>
                                    <h2>Telegram</h2>
                                </li>
                            </ul>
                        </div>
                        <div className="link-three">
                            <ul>

                                <li>
                                    <img src="http://qrcoder.ru/code/?http%3A%2F%2Falsafia.uz&4&0" alt=""/>

                                </li>
                                {/*<li>*/}
                                {/*    <a href="#">Реквизиты</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#">Пресс-центр</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#">Контакты</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#">Вакансии</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#">Bug Bounty</a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>

                        <div className="link-four">
                            <ul>
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
                            <ul>
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
                        </div>
                        <div className="link-five">

                        </div>

                        {/*<div className="link-five">*/}
                        {/*    <ul>*/}
                        {/*        <li>Мобильные устройства</li>*/}
                        {/*        <li className="market">*/}
                        {/*            <a href="#">*/}

                        {/*            </a>*/}
                        {/*        </li>*/}
                        {/*        <li className="market2">*/}
                        {/*            <a href="#">*/}

                        {/*            </a>*/}
                        {/*        </li>*/}
                        {/*        <li className="market3">*/}
                        {/*            <a href="#">*/}

                        {/*            </a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="#">Перейти на мобильную*/}
                        {/*                <br/>*/}
                        {/*                версию сайта</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}

                    </div>

                    <div className="footer-footer">
                        <div className="footer-footer-commit mt-4">
                            2017-2021 © Alsafia — модный интернет-магазин одежды, обуви и аксессуаров.
                            <br/>
                            Все права защищены. Доставка по всему Узбекистану.
                        </div>
                        <div className="footer-footer-link">
                            <a href="#">
                                Проверка совместимости
                            </a>
                        </div>
                       
                    </div>

                    <div className="oval2"></div>

                </div>

                <App/>

            </div>
        );
    }
}

export default Footer;