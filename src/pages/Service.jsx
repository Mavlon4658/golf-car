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
import ContactTel from "../components/ContactTel";

export default function Service () {
    const [serviceCard, setServiceCard] = useState([
        {url: IMG.serviceSwp1, type: 'img'},
        {url: IMG.serviceSwpVideo, type: 'video'},
        {url: IMG.serviceSwp2, type: 'img'},
        {url: IMG.serviceSwp3, type: 'img'},
        {url: IMG.serviceSwp4, type: 'img'},
        {url: IMG.serviceSwp5, type: 'img'},
        {url: IMG.serviceSwp6, type: 'img'},
        {url: IMG.serviceSwp7, type: 'img'},
        {url: IMG.serviceSwp8, type: 'img'},
    ]);
    const swpRef = useRef(null);
    const swpRef2 = useRef(null);
    const [dropdownList, setDropdownList] = useState([
        {title: 'Все характеристики'},
        {title: 'Доставка'},
        {title: 'Гарнтия'},
        {title: 'Тест - драйв'},
    ]);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);

    return (<div className="service">
        <div className="main_container">
            <div className="service_head">
                <Link to="/">Главная ></Link>
                <Link to="/">Каталог ></Link>
                <Link to="/">Гольфкары для отдыха и туризма ></Link>
                <span>eCar AW2041EK</span>
            </div>
            <div className="service_content">
                <div className="service_content__left">
                    <Swiper
                        spaceBetween={'14'}
                        slidesPerView={4}
                        direction={'vertical'}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="swp_left"
                        ref={swpRef2}
                    >
                        {serviceCard.map((item, idx) => (
                            <SwiperSlide
                                className={`${activeSlide == idx ? 'active' : ''}`}
                                key={idx}
                                onClick={() => {
                                    setActiveSlide(idx);
                                    swpRef.current.swiper.slideTo(idx);
                                }}
                            >
                                {item.type == 'img'
                                    ? <img src={item.url} className="main_img" />
                                    : <video src={item.url}></video>
                                }
                                {}
                                <button>
                                    {item.type == 'video'
                                        ? <img src={IMG.videoPlay} alt="" />
                                        : ''
                                    }
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swp_right">
                        <Swiper
                            spaceBetween={15}
                            loop={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            ref={swpRef}
                            className="swp_right"
                            onSlideChange={(swiperCore) => {
                                const {
                                    activeIndex,
                                    snapIndex,
                                    previousIndex,
                                    realIndex,
                                } = swiperCore;
                                setActiveSlide(realIndex);
                                if (swpRef2.current.swiper) {
                                    swpRef2.current.swiper.slideTo(realIndex);
                                }
                            }}
                        >
                            {serviceCard.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    {item.type == 'img'
                                        ? <img src={item.url} className="main_img" />
                                        : <video controls src={item.url}></video>
                                    }
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
                    <h3 className="title">Гольфкар eCar AW2041EK</h3>
                    <div className="description">Описание</div>
                    <Link to="#" className="characteristic_btn">Характеристики</Link>
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
                        {dropdownList.map((data, dataID) => (
                            <li className={`links_dropdown ${activeDropdown == dataID ? 'active' : ''}`} key={dataID}>
                                <button className="links_dropdown__head" onClick={() => {setActiveDropdown(dataID)}}>
                                    <span>{data.title}</span>
                                    <img src={IMG.linkRightIcon} alt="" />
                                </button>
                                <div className="links_dropdown__body">
                                    <p>Поможем подобрать гольфкар под Вашу нишу</p>
                                    <ContactTel />
                                    <a href="#" className="btn_darkblue">
                                        <img src={IMG.checkIcon} alt="" />
                                        <span>Подобрать гольфкар</span>
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="service_body__right">
                    <Advice icon={true} />
                </div>
            </div>
            <div className="review">
                <h3 className="title">Описание</h3>
                <div className="review_text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam quaerat vitae architecto, laborum eligendi. Dolorum doloremque neque quas odit facere quia perferendis possimus itaque modi voluptas soluta amet ex maiores sequi deleniti nisi quidem, nulla cumque consequatur reprehenderit harum praesentium veniam animi hic. Voluptatum, ab? Dolorem, illo numquam possimus modi, itaque quidem voluptatibus nesciunt delectus error exercitationem nostrum? Architecto iure deserunt inventore provident cupiditate ad vero voluptates fuga distinctio et reprehenderit, dolore at unde sunt laboriosam, vel ipsa dolor adipisci facere exercitationem praesentium quis minima corporis? Inventore perferendis temporibus odio sed cupiditate tempora, corrupti ratione. Eveniet voluptatibus architecto numquam.
                </div>
            </div>
        </div>
    </div>)
}