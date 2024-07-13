import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';
import 'swiper/css';
import IMG from '../assets/images';

export default function SolutoinSlide () {
    const swpRef2 = useRef(null);

    return (<>
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
                576: {
                    spaceBetween: 42,
                }
            }}
            ref={swpRef2}
            className='solution_swp'
        >
            {[1,2,3,4].map((item, idx) => (
                <SwiperSlide key={idx} className='solution_card'>
                    <div className="solution_card__head">
                        <img src={IMG.solutionCard} className='main_img' alt="" />
                        <ul>
                            <li>
                                <a href="#">
                                    <img src={IMG.play} alt="" />
                                    <span>Видео</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Кейс</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="solution_card__body">
                        <h3>eCar AW2041EK</h3>
                        <ul className="links">
                            <li>
                                <a href="#">Лизинг</a>
                            </li>
                            <li>
                                <a href="#">Безнал с НДС</a>
                            </li>
                        </ul>
                        <ul className="datas">
                            <li>Запас хода (КМ): 125</li>
                            <li>Мест: 4 места</li>
                            <li>Размеры, см (ШхГхВ): 595*470*850</li>
                        </ul>
                        <div className="btns">
                            <a href="#" className="btn_lightblue">
                                <span>Все характеристики</span>
                                <img src={IMG.chevronRightDark} alt="" />
                            </a>
                            <a href="#" className="btn_darkblue">
                                <img src={IMG.calcuation} alt="" />
                                <span>Получить рассчет</span>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className="swp__navigation">
            <div className="btns">
                <button onClick={() => {swpRef2.current.swiper.slidePrev()}}>
                    <img src={IMG.chevronLeftDark} alt="" />
                </button>
                <button onClick={() => {swpRef2.current.swiper.slideNext()}}>
                    <img src={IMG.chevronRightDark} alt="" />
                </button>
            </div>
            <a href="#" className="btn_darkblue">
                <img src={IMG.model} alt="" />
                <span>Все модели</span>
            </a>
        </div>
    </>)
}