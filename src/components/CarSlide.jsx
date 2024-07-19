import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import IMG from '../assets/images';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function CarSlide () {
    return (<div className="car-slide">
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
        >
            {[1,2,3,4].map((data, idx) => (
                <SwiperSlide key={idx}>
                    <img src={IMG.carSlideCard} className='main_img' alt="" />
                    <span>Удобно</span>
                    <a href="#">
                        <img src={IMG.legalLinkIcon} alt="" />
                    </a>
                    <div>
                        <h3>Аренда гольфкаров — <br /> легко и удобно!</h3>
                        <p>Обслуживание и поддержка 24/7 на <br /> весь срок аренды</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>)
}