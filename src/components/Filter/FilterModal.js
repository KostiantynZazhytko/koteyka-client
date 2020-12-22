import Modal from 'react-modal';
import { ModalFilter, ModalClose } from '../Modal';
import { useState } from 'react'




const FilterModal = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div onClick={openModal} className="button_filter">
                <svg width="12" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 8.684L0 1.58V0h12v1.579L7.5 8.684v4.737L4.5 15V8.684z" fill="#1A212F" /></svg>
                <span>Фильтры</span>
            </div>
            <ModalFilter isOpen={modalIsOpen}>
                <div class="filter">
                    <ModalClose onClick={closeModal} />
                    <form action="#" class="filter__form" method="GET">
                        <div class="filter__item">
                            <span class="filter__label">Цена за сутки, ₽</span>
                            <div class="filter__control">
                                <div class="price">
                                    <input
                                        class="price__from"
                                        type="text"
                                        placeholder="от 100"
                                    />
                                    <input
                                        class="price__to"
                                        type="text"
                                        placeholder="до 600"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="filter__item">
                            <span class="filter__label">Площадь</span>
                            <p class="filter__control">
                                <label class="label-checkbox">
                                    <input class="input-checkbox" type="checkbox" />
                                    <span class="custom-checkbox"></span>
                                    <span class="text-checkbox">0,63м2</span>
                                </label>
                            </p>
                            <p class="filter__control">
                                <label class="label-checkbox">
                                    <input class="input-checkbox" type="checkbox" />
                                    <span class="custom-checkbox"></span>
                                    <span class="text-checkbox">0,90 м2</span>
                                </label>
                            </p>
                            <p class="filter__control">
                                <label class="label-checkbox">
                                    <input class="input-checkbox" type="checkbox" />
                                    <span class="custom-checkbox"></span>
                                    <span class="text-checkbox">1,13 м2</span>
                                </label>
                            </p>
                            <p class="filter__control">
                                <label class="label-checkbox">
                                    <input class="input-checkbox" type="checkbox" />
                                    <span class="custom-checkbox"></span>
                                    <span class="text-checkbox">1,56 м2</span>
                                </label>
                            </p>
                            <p class="filter__control">
                                <label class="label-checkbox">
                                    <input class="input-checkbox" type="checkbox" />
                                    <span class="custom-checkbox"></span>
                                    <span class="text-checkbox">2,56 м2</span>
                                </label>
                            </p>
                            <p class="filter__control">
                                <label class="label-checkbox">
                                    <input class="input-checkbox" type="checkbox" />
                                    <span class="custom-checkbox"></span>
                                    <span class="text-checkbox">2,88 м2</span>
                                </label>
                            </p>
                        </div>
                        <div class="filter__item">
                            <span class="filter__label">Оснащение номера</span>
                            <p class="filter__control">
                                <label class="label-checkbox">
                                    <input class="input-checkbox" type="checkbox" />
                                    <span class="custom-checkbox"></span>
                                    <span class="text-checkbox">Пустой номер</span>
                                </label>
                            </p>
                            <p class="filter__control">
                                <label class="label-checkbox">
                                    <input class="input-checkbox" type="checkbox" />
                                    <span class="custom-checkbox"></span>
                                    <span class="text-checkbox">Лежак</span>
                                </label>
                            </p>
                            <p class="filter__control">
                                <label class="label-checkbox">
                                    <input class="input-checkbox" type="checkbox" />
                                    <span class="custom-checkbox"></span>
                                    <span class="text-checkbox">Когтеточка</span>
                                </label>
                            </p>
                            <p class="filter__control">
                                <label class="label-checkbox">
                                    <input class="input-checkbox" type="checkbox" />
                                    <span class="custom-checkbox"></span>
                                    <span class="text-checkbox">Игровой-комплекс</span>
                                </label>
                            </p>
                            <p class="filter__control">
                                <label class="label-checkbox">
                                    <input class="input-checkbox" type="checkbox" />
                                    <span class="custom-checkbox"></span>
                                    <span class="text-checkbox">Домик</span>
                                </label>
                            </p>
                        </div>

                        <div class="filter__actions">
                            <button class="button button_secondary" type="submit">
                                Применить
                  </button>
                            <button class="button button_tertiary" type="reset">
                                Сбросить фильтр
                  </button>
                        </div>
                    </form>
                </div>
            </ModalFilter>
        </>
    )

}

export default FilterModal