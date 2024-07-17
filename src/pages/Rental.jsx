import IMG from "../assets/images"
import SolutoinSlide from "../components/SolutionSlide"

export default function Rental () {
    return (<>
        {/* Rental home */}
        <section className="home rental_home">
            <div className="main_container">
                <a href="#" className="btn_darkblue rental_home__link">Условия аренды</a>
                <h2 className="text-h1">
                    Аренда гольфкаров от <span>2000</span>р. <br />
                    в сутки <span>с выгодой до 30%</span> 
                </h2>
                <div className="sm_line"></div>
                <div className="home__content">
                    <div className="home__content_left home__card">
                        <ul className="home__card_msg">
                            <li className="msg_start">
                                <p>
                                    Хочу арендовать гольфкар
                                    <img src={IMG.msgLeftIcon} alt="" />
                                </p>
                            </li>
                            <li className="msg_end">
                                <p>
                                    Мы можем Вам помочь! ✅ 🔑
                                    <img src={IMG.msgRightBg} alt="" />
                                </p>
                            </li>
                        </ul>
                        <ul className="home__card_networks">
                            <li>
                                <a href="#">
                                    <img src={IMG.telegram} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={IMG.whatsapp} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={IMG.wiber} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="tel:+79288442424">+7 (928) 844-24-24</a>
                                <p>Мы на связи 24/7</p>
                            </li>
                        </ul>
                        <img src={IMG.homeCard1} className="home__card_img" alt="" />
                        <a href="#" className="btn_darkblue">
                            <span>Подобрать <span>гольфкар в аренду</span></span>
                        </a>
                    </div>
                    <div className="home__content_right">
                        <h4>Идеальное решение для сезонных бизнесов и мероприятий.</h4>
                        <h3>Преимущества аренды:</h3>
                        <ul>
                            <li>
                                <span>1</span>
                                <p>Оформление от 15 минут</p>
                            </li>
                            <li>
                                <span>2</span>
                                <p>Выгода до 30% при долгосрочной аренде</p>
                            </li>
                            <li>
                                <span>3</span>
                                <p>Обслуживание и поддержка 24/7 на весь срок аренды</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/* Rental home end */}

        {/* Delivery */}
        <section className="delivery">
            <div className="main_container delivery__container">
                <div className="delivery__left">
                    <img src={IMG.deliveryIcon1} alt="" />
                    <h2 className="text-h1">
                        Доставка по <span>всей России</span> от 3х рабочих дней!
                    </h2>
                </div>
                <div className="delivery__right">
                    <div className="sm_line"></div>
                    <p>Оформим страховку, проконтролируем погрузку и разгрузку, доставим до двери.</p>
                </div>
            </div>
        </section>
        {/* Delivery end */}

        {/* Discount */}
        <section className="discount">
            <div className="main_container">
                <h2 className="text-h1">
                    Скидка на первую доставку 23% <br />
                    <span>до конца месяца</span>
                </h2>
                <div className="sm_line"></div>
                <p className="discount__description">Подберем гольфкар под Ваш запрос или Вашу нишу, подготовим договор для оплаты по безналу с НДС, доставим гольфкар на нужный адрес по всей России</p>
                <SolutoinSlide />
            </div>
        </section>
        {/* Discount end */}

        {/* Supply */}
        <section className="supply">
            <div className="main_container">
                <div className="supply__top">
                    <div className="supply__top_content">
                        <img src={IMG.deliveryIcon1} alt="" />
                        <h2 className="text-h1 supply__title">
                            Доставим ваш гольфкар от <span>Калининграда до Владивостока</span>
                        </h2>
                    </div>
                    <div className="supply__top_texts">
                        <div className="sm_line"></div>
                        <p className="supply__description">Со сроком от 7 дней. Найдем машину, оформим страховку груза и привезем до указанного адреса.</p>
                        <a href="#">Получить индивидуальный рассчет</a>
                    </div>
                </div>
                <div className="supply__bottom">
                    <div className="supply__card">
                        <img src={IMG.logo} alt="" />
                        <h3>Нужна консультация?</h3>
                        <p>Поможем подобрать гольфкар под Вашу нишу</p>
                        <a href="tel:+79288442424" className="tel">+7 (928) 844-24-24</a>
                        <h4>Мы на связи 24/7</h4>
                        <div className="supply__card_links">
                            <a href="#" className="btn_darkblue">
                                <img src={IMG.checkIcon} alt="" />
                                <span>Подобрать гольфкар</span>
                            </a>
                            <a href="#" className="btn_green">Нужна консультация</a>
                        </div>
                    </div>
                    <div className="supply__links">
                        <a href="#" className="title">Сервис</a>
                        <a href="#">Обслуживание батарей</a>
                        <a href="#">Гарнтиния</a>
                        <a href="#" className="title">Аренда</a>
                        <a href="#">По договру </a>
                        <a href="#">Доставка</a>
                        <a href="#">Часто задаваемые вопросы</a>
                        <a href="#" className="title">Детали под заказ</a>
                        <a href="#">Как это работает?</a>
                    </div>
                    <div className="supply__links">
                        <a href="#" className="title">Сервис</a>
                        <a href="#">Обслуживание батарей</a>
                        <a href="#">Гарнтиния</a>
                        <a href="#" className="title">Аренда</a>
                        <a href="#">По договру </a>
                        <a href="#">Доставка</a>
                        <a href="#">Часто задаваемые вопросы</a>
                        <a href="#" className="title">Детали под заказ</a>
                        <a href="#">Как это работает?</a>
                    </div>
                </div>
            </div>
        </section>
        {/* Supply end */}
    </>)
}