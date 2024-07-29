import { Link } from "react-router-dom";
import IMG from "../assets/images";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Advice from "../components/Advice";

export default function Service () {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [serviceCard, setServiceCard] = useState([IMG.serviceSwp1, IMG.serviceSwp2, IMG.serviceSwp3, IMG.serviceSwp4, IMG.serviceSwp1, IMG.serviceSwp2, IMG.serviceSwp3, IMG.serviceSwp4]);
    const swpRef = useRef(null);

    return (<div className="service">
        <div className="main_container">
            <div className="service_head">
                <Link to="/">Главная ></Link>
                <Link to="/">Каталог ></Link>
                <span>Гольфкары для отдыха и туризма ></span>
                <span>eCar AW2041EK</span>
            </div>
            <div className="service_content">
                <div className="service_content__left">
                <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={'14'}
                        slidesPerView={4}
                        direction={'vertical'}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="swp_left"
                    >
                        {serviceCard.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <img src={item} className="main_img" />
                                <button>
                                    <img src={IMG.videoPlay} alt="" />
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swp_right">
                        <Swiper
                            spaceBetween={15}
                            loop={true}
                            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                            modules={[FreeMode, Navigation, Thumbs]}
                            ref={swpRef}
                            className="swp_right"
                        >
                            {serviceCard.map((data, idx) => (
                                <SwiperSlide key={idx}>
                                    <img src={data} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swp_btn">
                            <button onClick={() => {swpRef.current.swiper.slidePrev()}}>
                                <img src={IMG.chevronLeftDark} alt="" />
                            </button>
                            <button onClick={() => {swpRef.current.swiper.slideNext()}}>
                                <img src={IMG.chevronRightDark} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="service_content__right">
                    <div className="service_content__right_block">
                        <a href="#" className="btn_darkblue">
                            <img src={IMG.calcuation} alt="" />
                            <span>Получить рассчет</span>
                        </a>
                        <a href="#" className="btn_light">
                            <img src={IMG.handTop} alt="" />
                            <span>Подобрать в 1 клик</span>
                        </a>
                        <h4>Доставка до 3 дней</h4>
                        <ul>
                            <li>Доставим гольфкар под ключ</li>
                            <li>Оплата: Безнал с НДС</li>
                            <li>Аренда: от 2000р/день</li>
                            <li>Лизинг: до 36 мес.</li>
                            <li>Сервис: 24/7</li>
                        </ul>
                        <h3>
                            <img src={IMG.shieldCheck} alt="" />
                            <span>Гарантия 36 мес.</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="service_body">
                <div className="service_body__left">
                    <h2 className="title">
                        <span>Купить Гольфкар eCar AW2041EK</span>
                        <button className="btn_darkblue">Описание</button>
                    </h2>
                    <ul className="characteristic">
                        <li>
                            <p>
                                <img src={IMG.characteristicIcon1} alt="" />
                                <span>Запас хода (КМ):</span>
                            </p>
                            <p>156</p>
                        </li>
                        <li>
                            <p>
                                <img src={IMG.characteristicIcon2} alt="" />
                                <span>Мест:</span>
                            </p>
                            <p>4</p>
                        </li>
                        <li>
                            <p>
                                <img src={IMG.characteristicIcon3} alt="" />
                                <span>Размеры, см (ШхГхВ):</span>
                            </p>
                            <p>140х140х120</p>
                        </li>
                    </ul>
                    <ul className="links">
                        <li>
                            <Link to={'#'}>
                                <span>Все характеристики</span>
                                <img src={IMG.linkRightIcon} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'}>
                                <span>Доставка</span>
                                <img src={IMG.linkRightIcon} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'}>
                                <span>Гарнтия</span>
                                <img src={IMG.linkRightIcon} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'}>
                                <span>Тест - драйв</span>
                                <img src={IMG.linkRightIcon} alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="service_body__right">
                    <Advice icon={true} />
                </div>
            </div>
            <div className="review">
                <h3 className="title">Описание</h3>
                <textarea name="" id=""></textarea>
            </div>
        </div>
    </div>)
}