import { useState } from "react"
import Dropdown from "../components/Dropdown"
import IMG from "../assets/images"
import Advice from "../components/Advice"
import CarSlide from "../components/CarSlide"

export default function Catalog () {
    const [dropdown, setDropdown] = useState({
        title: 'Ниши',
        list: ['Медицина','Отдых и туризм','Жилые комплексы','Гостеприимство','Спорт мероприятия','Большой бизнес','События, фестивали',]
    })

    return (<div className="catalog">
        <div className="main_container">
            <div className="catalog__head">
                <ul className="breadcrumb">
                    <a href="/">Главная</a>
                    <span>/</span>
                    <span>Каталог гольфкаров</span>
                </ul>
                <h3 className="text-h1 catalog__title">Каталог гольфкаров</h3>
                <p className="catalog__description">Лучшие решения для Вашиз задач</p>
            </div>
            <div className="catalog__content">
                <div className="catalog__left">
                    <Dropdown data={dropdown} />
                    <Advice />
                    <CarSlide />
                </div>
                <div className="catalog__right">
                    <div className="catalog__head">
                        <ul className="breadcrumb">
                            <a href="/">Главная</a>
                            <span>/</span>
                            <span>Каталог гольфкаров</span>
                        </ul>
                        <h3 className="text-h1 catalog__title">Каталог гольфкаров</h3>
                        <p className="catalog__description">Лучшие решения для Вашиз задач</p>
                    </div>
                    <div className="catalog__block">
                        <h3 className="catalog__block_title">Медицина</h3>
                        <div className="catalog__block_list">
                            <div className="solution_card">
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
                            </div>
                        </div>
                    </div>
                    <div className="catalog__block">
                        <h3 className="catalog__block_title">Медицина</h3>
                        <div className="catalog__block_list">
                            <div className="solution_card">
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
                            </div>
                            <div className="solution_card">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}