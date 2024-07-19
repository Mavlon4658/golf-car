import { useState } from "react";
import IMG from "../assets/images";

export default function Dropdown ({data}) {
    const [active, setActive] = useState(false)

    return (<div className="dropdown">
        <button
            className={`dropdown_head ${active ? 'active' : ''}`}
            onClick={() => {setActive(!active)}}
        >
            <img src={IMG.dropdownDots} alt="" />
            <span>Ниши</span>
            <img src={IMG.chevronRightDark} className="icon" alt="" />
        </button>
        <ul className={`dropdown_body ${active ? 'active' : ''}`}>
            {data.list.map((d, idx) => (
                <li key={idx}>
                    <input type="checkbox" id={`checkID${idx}`} />
                    <label for={`checkID${idx}`}>{d}</label>
                </li>
            ))}
            <li className="show">
                <a href="#" className="btn_darkblue">Показать</a>
            </li>
        </ul>
    </div>)
}