import React from "react";
import s from './Header.module.css'

const Header = () => {

    return (<div className={s.content}>
        <div className={s.head}>Поиск</div>
        <div>Виды</div>
        <div>Методы</div>
        <div>Приёмы</div>
        <div>Концерты</div>
    </div>)
}

export default Header;