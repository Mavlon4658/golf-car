import IMG from "../assets/images";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';
import SolutoinSlide from "../components/SolutionSlide";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function Home () {
    const swpRef = useRef(null);
    const faqSwp = useRef(null);

    const swpNext = () => {
        swpRef.current.swiper.slideNext();
        console.log(swpRef.current)
    }

    return (<>
        
        {/* Home */}
        <section className="home">
            <div className="main_container">
                <h2 className="text-h1">Гольфкары напрямую <span>от производителя,</span> <br /> с выгодой <span>до 25,000 рублей</span></h2>
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
                        <img src={IMG.homeCard1} className="home__card_img" alt="" />
                        <a href="#" className="btn_darkblue">
                            <span>Подобрать <span>гольфкар под</span> 🔑</span>
                        </a>
                    </div>
                    <div className="home__content_right">
                        <h4>Мы организуем доставку гольфкаров в любой уголок страны.</h4>
                        <h3>Логистика под ключ:</h3>
                        <ul>
                            <li>
                                <span>1</span>
                                <p>Подбор транспортного средства</p>
                            </li>
                            <li>
                                <span>2</span>
                                <p>Оформление всех документов и страховки</p>
                            </li>
                            <li>
                                <span>3</span>
                                <p>Доставка до вашего объекта</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/* Home end */}

        {/* Clients */}
        <section className="clients">
            <div className="main_container clients__container">
                <h2 className="text-h1">Доверие крупных клиентов!</h2>
                <p className="clients__description">🏰 Курорт Красная Поляна, 🎡 Сочи Парк, 🏎️ Росгонки, 🏨 Гранд Отель Геленджик, ВДНХ, 📍 Курорт Газпром, Лукойл, ФК Краснодар и многие другие.</p>
                <ul className="clients__card">
                    <li className="clients__card_item">
                        <span className="alert">Проверено временем</span>
                        <p>Более 10 <span>лет на рынке</span> специальной техники</p>
                    </li>
                    <li className="clients__card_item">
                        <span className="alert">Надежно</span>
                        <p>Гарантия до 36 мес, на все <span>батареи до 60 мес.</span></p>
                    </li>
                    <li className="clients__card_item">
                        <span className="alert">Сервис</span>
                        <p>Свой склад <span>запчастей</span> и <span>комплектующих</span></p>
                    </li>
                    <li className="clients__card_item">
                        <span className="alert">Удобно</span>
                        <p><span>Собственный</span> арендный парк из 30 гольфкаров.</p>
                    </li>
                    <li className="clients__card_item">
                        <span className="alert">Доверие</span>
                        <p><span>Дилеры в крупнейших</span> городах России</p>
                    </li>
                    <li className="clients__card_item">
                        <span className="alert">Забота о клиенте</span>
                        <p>Выездные бригады для <span>быстрого сервиса 24/7</span></p>
                    </li>
                </ul>
            </div>
        </section>
        {/* Clients end */}

        {/* Carts */}
        <section className="carts">
            <div className="main_container carts__container">
                <div className="carts__head">
                    <div className="carts__head_content">
                        <h2 className="text-h1">Гольфкар не только для гольфа</h2>
                        <div className="sm_line"></div>
                        <p className="carts__description">Мы помогли улучшить логистику разных ниш за счет гибкой комплектации наших гольфкаров</p>
                    </div>
                    <div className="carts__head_img">
                        <img src={IMG.cartCard} alt="" />
                    </div>
                </div>
                <ul className="carts__hash">
                    <li>
                        <a href="#"># Отдых и туризм</a>
                    </li>
                    <li>
                        <a href="#"># Жилые комплексы</a>
                    </li>
                    <li>
                        <a href="#"># Большой бизнес</a>
                    </li>
                    <li>
                        <a href="#"># Гостеприимство</a>
                    </li>
                    <li>
                        <a href="#"># Образование</a>
                    </li>
                    <li>
                        <a href="#"># Спорт мероприятия</a>
                    </li>
                    <li>
                        <a href="#"># Медицина</a>
                    </li>
                    <li>
                        <a href="#"># События, фестивали</a>
                    </li>
                </ul>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    breakpoints={{
                        576: {
                            spaceBetween: 40,
                        }
                    }}
                    ref={swpRef}
                >
                    <SwiperSlide className="carts__card">
                        <img src={IMG.cartsCard1} className="main_img" alt="" />
                        <ul className="carts__card_head">
                            <li>
                                <a href="#">Кейс</a>
                            </li>
                            <li>
                                <a href="#">Статья</a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={IMG.play} alt="" />
                                    <span>Видео</span>
                                </a>
                            </li>
                        </ul>
                        <div className="carts__card_foot">
                            <div>
                                <h3>Отдых и туризм</h3>
                                <p>Курорты, кемпинги и парки развлечений</p>
                            </div>
                            <a href="#">
                                <img src={IMG.chevronRight} alt="" />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carts__card">
                        <img src={IMG.cartsCard2} className="main_img" alt="" />
                        <ul className="carts__card_head">
                            <li>
                                <a href="#">Кейс</a>
                            </li>
                            <li>
                                <a href="#">Статья</a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={IMG.play} alt="" />
                                    <span>Видео</span>
                                </a>
                            </li>
                        </ul>
                        <div className="carts__card_foot">
                            <div>
                                <h3>Жилые комплексы</h3>
                                <p>Курорты, кемпинги и парки развлечений</p>
                            </div>
                            <a href="#">
                                <img src={IMG.chevronRight} alt="" />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carts__card">
                        <img src={IMG.cartsCard3} className="main_img" alt="" />
                        <ul className="carts__card_head">
                            <li>
                                <a href="#">Кейс</a>
                            </li>
                            <li>
                                <a href="#">Статья</a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={IMG.play} alt="" />
                                    <span>Видео</span>
                                </a>
                            </li>
                        </ul>
                        <div className="carts__card_foot">
                            <div>
                                <h3>Большой бизнес</h3>
                                <p>Курорты, кемпинги и парки развлечений</p>
                            </div>
                            <a href="#">
                                <img src={IMG.chevronRight} alt="" />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="carts__card">
                        <img src={IMG.cartsCard4} className="main_img" alt="" />
                        <ul className="carts__card_head">
                            <li>
                                <a href="#">Кейс</a>
                            </li>
                            <li>
                                <a href="#">Статья</a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={IMG.play} alt="" />
                                    <span>Видео</span>
                                </a>
                            </li>
                        </ul>
                        <div className="carts__card_foot">
                            <div>
                                <h3>Гостеприимство</h3>
                                <p>Курорты, кемпинги и парки развлечений</p>
                            </div>
                            <a href="#">
                                <img src={IMG.chevronRight} alt="" />
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="swp__navigation">
                    <div className="btns">
                        <button onClick={() => {swpRef.current.swiper.slidePrev()}}>
                            <img src={IMG.chevronLeftDark} alt="" />
                        </button>
                        <button onClick={() => {swpRef.current.swiper.slideNext()}}>
                            <img src={IMG.chevronRightDark} alt="" />
                        </button>
                    </div>
                    <a href="#" className="btn_darkblue">
                        <img src={IMG.keyIcon} alt="" />
                        <span>Подберем под ключ</span>
                    </a>
                </div>
            </div>
        </section>
        {/* Carts end */}

        {/* Solution */}
        <section className="solution">
            <div className="main_container">
                <h2 className="text-h1">Получите решение под Вашу нишу</h2>
                <div className="sm_line"></div>
                <p className="solution__description">Мы помогли улучшить логистику разных ниш за счет гибкой комплектации наших гольфкаров</p>
                <SolutoinSlide />
            </div>
        </section>
        {/* Solution end */}

        {/* Build */}
        <section className="build">
            <div className="main_container">
                <h2 className="text-h1 build__title">Соберите гольфкар по своим параметрам и нуждам</h2>
                <div className="build__content">
                    <div className="build__content_left">
                        <div className="sm_line"></div>
                        <p className="buil__description">Наш гибкий <span>сервис</span> и услуги позволяет собрать <span>необходимую</span> комплектацию <a href="#">под ваши запросы</a></p>
                        <h3>Гибкая система кастомизации</h3>
                        <ul>
                            <li>
                                <img src={IMG.buildIcon1} alt="" />
                                <p>Предоставляем более 30 вариантов кастоматизации и комбинций для вашей техники. </p>
                            </li>
                            <li>
                                <img src={IMG.buildIcon2} alt="" />
                                <p>Можем усовершенствовать скорость зарядки батареи, её ёмкость.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="build__content_right home__card">
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
                            <span>Подобрать <span>гольфкар под</span> 🔑</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/* Build end */}

        {/* Move */}
        <section className="move">
            <div className="main_container">
                <h2 className="text-h1">Передвигайтесь сохраняя природу и деньги за счёт <span>эко-эконом гольфкара</span></h2>
                <div className="sm_line"></div>
                <p className="move__description">Траты только на электричество!</p>
                <ul>
                    <li>
                        <div className="img">
                            <img src={IMG.moveIcon1} alt="" />
                        </div>
                        <h3>На мощной батарее</h3>
                        <div className="texts">
                            <p>Разгон от 20-35 км в час.</p>
                            <p>Компактный - может с легкостью проехать участки где не проедит газель.</p>
                            <p>Батареи держут заряд весь рабочий день.</p>
                        </div>
                    </li>
                    <li>
                        <div className="img">
                            <img src={IMG.moveIcon2} alt="" />
                        </div>
                        <h3>В тишине и спокойствии</h3>
                        <div className="texts">
                            <p>Топливом является электричество и не имеет шумного двигателя.</p>
                            <p>По этому не выбрасывает в воздух гари и едет бесшумно.</p>
                        </div>
                    </li>
                    <li>
                        <div className="img">
                            <img src={IMG.money} alt="" />
                        </div>
                        <h3>В чем моя выгода?</h3>
                        <div className="texts">
                            <p>Дешевая за счет отсутствия нужды в найме обслуживающего персонала, бензина и масла.</p>
                            <p>Вы сами можете за ним следить сохраняя экологию.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        {/* Move end */}

        {/* Help */}
        <section className="help">
            <div className="main_container">
                <h2 className="text-h1">Держите свою технику в тонусе - мы поможем</h2>
                <div className="sm_line"></div>
                <p className="help__description">Наш сервис не оставит вас в трудный час</p>
                <ul>
                    <li className="help__networks">
                        <h3>Нужна помощь?</h3>
                        <div className="help__networks_card">
                            <p>Ответим на все вопросы и проконсультируем</p>
                            <a href="tel:+79288442424">+7 (928) 844-24-24</a>
                            <h4>Мы на связи 24/7</h4>
                        </div>
                        <div className="btns">
                            <a href="#" className="btn_darkblue">
                                <img src={IMG.checkIcon} alt="" />
                                <span>Мне нужен техсервис</span>
                            </a>
                            <a href="#" className="btn_green">Нужна консультация</a>
                        </div>
                    </li>
                    <li className="help__card">
                        <img src={IMG.helpIcon1} alt="" />
                        <h3>Готовы отремонтировать или осмотерть вашу технику!</h3>
                        <div className="texts">
                            <p>Наш сервис выступит к вам <br /> в течении 48 часов после запроса.</p>
                            <p>Вам не нужно никуда ехать - Отремонтируем все на месте в кратчайшие сроки!</p>
                        </div>
                    </li>
                    <li className="help__card">
                        <img src={IMG.helpIcon2} alt="" />
                        <h3>Примем звонок даже ночью!</h3>
                        <div className="texts">
                            <p>Мы на связи 24/7. <br />Проконсультируем, поможем выявить и решить проблему связанную с вашим гольфкаром.</p>
                            <p>Возможно вашу проблему можно решить телефонным звоноком а если нет... </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        {/* Help end */}

        {/* Legal */}
        <section className="legal">
            <div className="main_container">
                <h2 className="text-h1">Для юридечских лиц:</h2>
                <p className="legal__description">Мы предлагаем удобные условия безналичной оплаты</p>
                <ul>
                    <li className="legal__card">
                        <img src={IMG.legalCard1} alt="" className="main_img" />
                        <p className="alert">Належно</p>
                        <div className="legal__card_foot">
                            <div className="legal__card_text">
                                <h3>Безнал для юр.лиц с НДС</h3>
                                <p>Для юридических лиц мы предлагаем удобные условия безналичной оплаты</p>
                            </div>
                            <a href="#">
                                <img src={IMG.legalLinkIcon} alt="" />
                            </a>
                        </div>
                    </li>
                    <li className="legal__card">
                        <img src={IMG.legalCard2} alt="" className="main_img" />
                        <p className="alert">Выгодно</p>
                        <div className="legal__card_foot">
                            <div className="legal__card_text">
                                <h3>Реализуем Ваш проект</h3>
                                <p>Выгодный лизинг с возвратом НДС</p>
                            </div>
                            <a href="#">
                                <img src={IMG.legalLinkIcon} alt="" />
                            </a>
                        </div>
                    </li>
                    <li className="legal__card">
                        <img src={IMG.legalCard3} alt="" className="main_img" />
                        <p className="alert">Под Ключ</p>
                        <div className="legal__card_foot">
                            <div className="legal__card_text">
                                <h3>Лизинг для физ и юр.лиц</h3>
                                <p>Обслуживание и поддержка 24/7 на весь срок аренды</p>
                            </div>
                            <a href="#">
                                <img src={IMG.legalLinkIcon} alt="" />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        {/* Legal end */}

        {/* FAQ */}
        <section className="faq">
            <div className="main_container faq__container">
                <h2 className="text-h1">Часто задаваемые вопросы</h2>
                <div className="sm_line"></div>
                <p className="faq__description">Остались вопросы ? Позвони нам, мы поможем!</p>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        1100: {
                            slidesPerView: 3,
                            spaceBetween: 43,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    ref={faqSwp}
                >
                    <SwiperSlide className="faq__card">
                        <img src={IMG.hand} alt="" />
                        <h3>Как вы обслуживаете гольфкары?</h3>
                        <div className="text">
                            <p>Наши гольфкары находятся на постоянном обслуживании</p>
                            <a href="#">Читать подробнее</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="faq__card">
                        <img src={IMG.hand} alt="" />
                        <h3>Сможете ли Вы доставить его в Москву?</h3>
                        <div className="text">
                            <p>Да, без проблем. Доставим Ваш гольфкар в любую точку Росии в течении 1 недели после заключения довгора</p>
                            <a href="#">Читать подробнее</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="faq__card">
                        <img src={IMG.hand} alt="" />
                        <h3>Как быстро я могу получить гольфкар?</h3>
                        <div className="text">
                            <p>После заключения договора, доставка занимает до 1 недели</p>
                            <a href="#">Читать подробнее</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swp__navigation">
                    <div className="btns">
                        <button onClick={() => {faqSwp.current.swiper.slidePrev()}}>
                            <img src={IMG.chevronLeftDark} alt="" />
                        </button>
                        <button onClick={() => {faqSwp.current.swiper.slideNext()}}>
                            <img src={IMG.chevronRightDark} alt="" />
                        </button>
                    </div>
                    <a href="#" className="btn_darkblue">
                        <span>Все попросы</span>
                        <img src={IMG.chevronRight} alt="" />
                    </a>
                </div>
            </div>
        </section>
        {/* FAQ end */}

    </>)
}