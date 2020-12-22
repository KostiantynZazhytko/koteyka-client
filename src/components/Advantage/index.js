
const Advantage = () => {
    return (
        <section className="section section_advantages">
            <div className="grid grid_advantages">
                <div className="grid_item">
                    <div className="card card_advantage">
                        <div className="card_icon">
                            <svg className="icon icon-main">
                                <use xlinkHref="icons/SVG2/symbol-defs.svg#icon-temperature"></use>
                            </svg>
                        </div>
                        <h3 className="card_title">Комфортная температура</h3>
                        <div className="card_description">Во всех номерах поддерживается комфортная температура в пределах
                            23 - 25 градусов. В каждом номере можно дополнительно отрегулировать температуру. </div>
                    </div>
                </div>
                <div className="grid_item">
                    <div className="card card_advantage">
                        <div className="card_icon">
                            <svg className="icon icon-main">
                                <use xlinkHref="icons/SVG2/symbol-defs.svg#icon-video"></use>
                            </svg>
                        </div>
                        <h3 className="card_title">Видеонаблюдение</h3>
                        <div className="card_description">Мы предоставляем доступ в нашу систему. Вы сможете следить
                            за своим питомцем со своего смартфона или компьютера.</div>
                    </div>
                </div>
                <div className="grid_item">
                    <div className="card card_advantage">
                        <div className="card_icon">
                            <svg className="icon icon-main">
                                <use xlinkHref="icons/SVG2/symbol-defs.svg#icon-taxi"></use>
                            </svg>
                        </div>
                        <h3 className="card_title">Услуги Зоотакси</h3>
                        <div className="card_description">Мы приедем за вашим питомцем в любой район Санкт-Петербурга.</div>
                    </div>
                </div>
                <div className="grid_item">
                    <div className="card card_advantage">
                        <div className="card_icon">
                            <svg className="icon icon-main">
                                <use xlinkHref="icons/SVG2/symbol-defs.svg#icon-meal"></use>
                            </svg>
                        </div>
                        <h3 className="card_title">Сбалансированное питание</h3>
                        <div className="card_description">Вы можете привезти свой корм
                        или доверить рацион своего
                            питомца нашим профессионалам.</div>
                    </div>
                </div >
                <div className="grid_item">
                    <div className="card card_advantage">
                        <div className="card_icon">
                            <svg className="icon icon-main">
                                <use xlinkHref="icons/SVG2/symbol-defs.svg#icon-walking"></use>
                            </svg>
                        </div>
                        <h3 className="card_title">Ежедневные прогулки</h3>
                        <div className="card_description">По вашему желанию мы выгуливаем вашего питомца два раза в день
                            на специализированной закрытой территории.</div>
                    </div>
                </div >
                <div className="grid_item">
                    <div className="card card_advantage">
                        <div className="card_icon">
                            <svg className="icon icon-main">
                                <use xlinkHref="icons/SVG2/symbol-defs.svg#icon-veterinarian"></use>
                            </svg>
                        </div>
                        <h3 className="card_title">Лучшие ветеринары</h3>
                        <div className="card_description">В гостинице 24 часа дежурит ветеринарный врач, который окажет любую помощь в случае необходимости.</div>
                    </div>
                </div >
            </div >
        </section >
    )
}

export default Advantage;