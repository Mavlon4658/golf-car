import { useState } from "react";
import IMG from "../assets/images";
import ContactTel from "./ContactTel";

export default function Advice () {
    const [active, setActive] = useState(false)

    return (<div className="advice">
        <h3
            className={`advice_title ${active ? 'active' : ''}`}
            onClick={() => {setActive(!active)}}
        >
            <img src={IMG.adviceIcon} alt="" />
            <span>Нужна консультация?</span>
            <img src={IMG.chevronRightDark} className="icon" alt="" />
        </h3>
        <div className={`advice_body ${active ? 'active' : ''}`}>
            <p className="advice_subtitle">Поможем подобрать гольфкар под Вашу нишу</p>
            <ContactTel />
            <a href="#" className="btn_darkblue">
                <img src={IMG.checkIcon} alt="" />
                <span>Подобрать гольфкар</span>
            </a>
        </div>
    </div>)
}