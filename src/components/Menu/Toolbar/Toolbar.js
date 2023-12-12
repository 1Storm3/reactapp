import React from "react";
import s from './Toolbar.module.css'

const Toolbar = () => {

    return (<div className={s.content}>
        <div className={s.head}>Поиск</div>
        <div>Виды</div>
        <div>Методы</div>
        <div>Приёмы</div>
        <div>Шаблоны</div>
    </div>)
}

export default Toolbar;