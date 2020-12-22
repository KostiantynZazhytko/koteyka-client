import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Advantage from "../components/Advantage";
import {
  Section,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "../components/Section";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getServerSideProps(context) {

  const products = await fetch(`${API_URL}/products`)
    .then((response) => response.json());
  const reviews = await fetch(`${API_URL}/reviews`)
    .then((response) => response.json());

  return {
    props: { products, reviews },
  };
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function HomePage({ products, reviews }) {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="hero hero_home">
          <div className="hero__background">
            <picture>
              <source media="(max-width: 991px)" srcSet="/images/img-02.jpg" />
              <source media="(min-width: 992px)" srcSet="/images/img-01.jpg" />
              <img src="/images/img-01.jpg" alt="" />
            </picture>
          </div>
          <div className="hero__pattern"></div>
          <div className="hero__foreground">
            <Container>
              <div className="hero__content">
                <div className="hero__subtitle">Санкт-Петербург</div>
                <h1 className="hero__title">Котейка</h1>
                <div className="hero__description">
                  Уютная гостиница для котов и кошек
                </div>
                <div className="hero__actions">
                  <Link href="/products">
                    <a className="button button_primary button_inverse">
                      Забронировать
                    </a>
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <Section className="section_advantages">
          <SectionTitle as="h2">Почему мы?</SectionTitle>
          <SectionBody>
            <Container>
              <Advantage />
            </Container>
          </SectionBody>
        </Section>
        <Section className="section_products">
          <SectionHeader>
            <SectionTitle as="h2">Номера</SectionTitle>
          </SectionHeader>
          <SectionBody>
            <Container>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >

                {products.map(product => {
                  return (
                    <SwiperSlide key={product.id}>
                      <Link href={`/products/${product.id}`}>
                        <a >
                          <div className="card card_product-2">
                            <div className="card__media">
                              <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL ?? ""}${product?.featured_image.formats.thumbnail.url}`}
                                className="card__image"
                                alt=""
                              />
                            </div>
                            <div className="card__body">
                              <h3 className="card__title">{product.title}</h3>
                              <div className="card__params">
                                <div className="card__param">
                                  Размеры (ШхГхВ) - {product.size.width}х
                                {product.size.depth}х{product.size.height}см
                            </div>
                                <div className="card__param">Площадь - {product.area.value} м2</div>
                                <span className="card__param">
                                  Цена за сутки:
                              <span className="card__price">{product.price}₽</span>
                                </span>
                              </div>
                              <div className="card__actions">
                                <a className="button button_primary" >
                                  Забронировать
                            </a>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </Container>
          </SectionBody>
        </Section>
        <Section className="section_reviews">
          <SectionHeader>
            <SectionTitle as="h2">Отзывы</SectionTitle>
          </SectionHeader>
          <SectionBody>
            <Container>
              <Swiper
                spaceBetween={30}
                slidesPerView="auto"
                navigation
                pagination={{ clickable: true }}
                className="swiper-reviews"
              >
                {reviews && reviews.map(review => {
                  return (
                    <SwiperSlide key={review.id}>
                      <div className="card card_review">
                        <div className="card__body">
                          <div className="card__text">
                            {review.description}
                          </div>
                          <div className="card__meta">
                            <div className="card__meta-author">
                              {review.author}
                            </div>
                            <div className="card__meta-date">{review.date}</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}

                {/* <SwiperSlide>
                  <div className="card card_review">
                    <div className="card__body">
                      <div className="card__text">
                        Первый раз пришлось оставить нашего котика в гостинице,
                        очень переживали. Администратор Мария каждый день
                        высылала нам фото нашего питомца, рассказывала, как он
                        себя чувствует. И мы и котик остались очень довольны!
                      </div>
                      <div className="card__meta">
                        <div className="card__meta-author">
                          Валерия Гришаева
                        </div>
                        <div className="card__meta-date">15 ноября, 2019</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card_review">
                    <div className="card__body">
                      <div className="card__text">
                        Первый раз пришлось оставить нашего котика в гостинице,
                        очень переживали. Администратор Мария каждый день
                        высылала нам фото нашего питомца, рассказывала, как он
                        себя чувствует. И мы и котик остались очень довольны!
                      </div>
                      <div className="card__meta">
                        <div className="card__meta-author">
                          Валерия Гришаева
                        </div>
                        <div className="card__meta-date">15 ноября, 2019</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card_review">
                    <div className="card__body">
                      <div className="card__text">
                        Первый раз пришлось оставить нашего котика в гостинице,
                        очень переживали. Администратор Мария каждый день
                        высылала нам фото нашего питомца, рассказывала, как он
                        себя чувствует. И мы и котик остались очень довольны!
                      </div>
                      <div className="card__meta">
                        <div className="card__meta-author">
                          Валерия Гришаева
                        </div>
                        <div className="card__meta-date">15 ноября, 2019</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card_review">
                    <div className="card__body">
                      <div className="card__text">
                        Первый раз пришлось оставить нашего котика в гостинице,
                        очень переживали. Администратор Мария каждый день
                        высылала нам фото нашего питомца, рассказывала, как он
                        себя чувствует. И мы и котик остались очень довольны!
                      </div>
                      <div className="card__meta">
                        <div className="card__meta-author">
                          Валерия Гришаева
                        </div>
                        <div className="card__meta-date">15 ноября, 2019</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card_review">
                    <div className="card__body">
                      <div className="card__text">
                        Первый раз пришлось оставить нашего котика в гостинице,
                        очень переживали. Администратор Мария каждый день
                        высылала нам фото нашего питомца, рассказывала, как он
                        себя чувствует. И мы и котик остались очень довольны!
                      </div>
                      <div className="card__meta">
                        <div className="card__meta-author">
                          Валерия Гришаева
                        </div>
                        <div className="card__meta-date">15 ноября, 2019</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}
              </Swiper>
            </Container>
          </SectionBody>
        </Section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
