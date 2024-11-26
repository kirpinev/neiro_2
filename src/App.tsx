import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import image from "./assets/image.png";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import star from "./assets/star.png";

import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { StatusBadge } from "@alfalab/core-components/status-badge";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [transfer, setTransfer] = useState<string>("self");

  const submit = () => {
    setLoading(true);
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
      <>
        <div className={appSt.container}>
          <div className={appSt.box}>
            <img src={image} alt="" className={appSt.face}/>
            <Gap size={24}/>
            <Typography.TitleResponsive
                font="system"
                tag="h1"
                view="medium"
                weight="semibold"
            >
              Нейросоветник
            </Typography.TitleResponsive>
            <Typography.Text
                tag="p"
                view="primary-medium"
                color="secondary"
                style={{marginBottom: 0}}
            >
              Твой персональный финансовый консультант
            </Typography.Text>
          </div>

          <Gap size={32}/>

          <Typography.TitleResponsive
              font="system"
              tag="h3"
              view="small"
              weight="semibold"
              className={appSt.productsTitle}
          >
            Что я умею
          </Typography.TitleResponsive>

          <Gap size={16}/>

          <div className={appSt.benefits}>
            <div className={appSt.benefit}>
              <img
                  src={image1}
                  alt=""
                  width={50}
                  height={50}
                  style={{objectFit: "cover"}}
              />
              <Typography.Text
                  tag="p"
                  view="primary-small"
                  weight="bold"
                  style={{marginBottom: 0}}
              >
                Умный анализ
              </Typography.Text>
              <Typography.Text tag="p" view="primary-small">
                AI поможет в оптимизации твоих трат
              </Typography.Text>
            </div>
            <div className={appSt.benefit}>
              <img
                  src={image2}
                  alt=""
                  width={50}
                  height={50}
                  style={{objectFit: "cover"}}
              />
              <Typography.Text
                  tag="p"
                  view="primary-small"
                  weight="bold"
                  style={{marginBottom: 0}}
              >
                Личный план
              </Typography.Text>
              <Typography.Text tag="p" view="primary-small">
                Создаем финансовый план с учетом твоих целей
              </Typography.Text>
            </div>
            <div className={appSt.benefit}>
              <img
                  src={image3}
                  alt=""
                  width={50}
                  height={50}
                  style={{objectFit: "cover"}}
              />
              <Typography.Text
                  tag="p"
                  view="primary-small"
                  weight="bold"
                  style={{marginBottom: 0}}
              >
                Советник
              </Typography.Text>
              <Typography.Text tag="p" view="primary-small">
                Персональные рекомендации каждую неделю
              </Typography.Text>
            </div>
            <div className={appSt.benefit}>
              <img
                  src={image4}
                  alt=""
                  width={50}
                  height={50}
                  style={{objectFit: "cover"}}
              />
              <Typography.Text
                  tag="p"
                  view="primary-small"
                  weight="bold"
                  style={{marginBottom: 0}}
              >
                Цели и успех
              </Typography.Text>
              <Typography.Text tag="p" view="primary-small">
                Отслеживай прогресс и празднуй победы
              </Typography.Text>
            </div>
          </div>

          <Gap size={32}/>

          <Typography.TitleResponsive
              font="system"
              tag="h3"
              view="small"
              weight="semibold"
              className={appSt.productsTitle}
          >
            Как это работает
          </Typography.TitleResponsive>

          <Gap size={16}/>

          <div className={appSt.howWorks}>
            <div className={appSt.work}>
              <div className={appSt.number}>
                <Typography.Text
                    tag="p"
                    view="primary-medium"
                    style={{marginBottom: 0}}
                >
                  1
                </Typography.Text>
              </div>
              <div>
                <Typography.Text
                    tag="p"
                    view="primary-small"
                    weight="bold"
                    style={{marginBottom: 0}}
                >
                  Подключись
                </Typography.Text>
                <Typography.Text tag="p" view="primary-small">
                  Выбери тариф и получи доступ к персональному финансовому плану
                </Typography.Text>
              </div>
            </div>
            <div className={appSt.work}>
              <div className={appSt.number}>
                <Typography.Text
                    tag="p"
                    view="primary-medium"
                    style={{marginBottom: 0}}
                >
                  2
                </Typography.Text>
              </div>
              <div>
                <Typography.Text
                    tag="p"
                    view="primary-small"
                    weight="bold"
                    style={{marginBottom: 0}}
                >
                  Поставь цель
                </Typography.Text>
                <Typography.Text tag="p" view="primary-small">
                  Определи свою главную финансовую цель, и мы составим план её
                  достижения
                </Typography.Text>
              </div>
            </div>
            <div className={appSt.work}>
              <div className={appSt.number}>
                <Typography.Text
                    tag="p"
                    view="primary-medium"
                    style={{marginBottom: 0}}
                >
                  3
                </Typography.Text>
              </div>
              <div>
                <Typography.Text
                    tag="p"
                    view="primary-small"
                    weight="bold"
                    style={{marginBottom: 0}}
                >
                  Следуй плану
                </Typography.Text>
                <Typography.Text tag="p" view="primary-small">
                  Получай рекомендации и двигайся к своей цели с поддержкой
                  эксперта
                </Typography.Text>
              </div>
            </div>
          </div>

          <Gap size={16}/>

          <div style={{width: "100%"}}>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
              <SwiperSlide>
                <div className={appSt.slider}>
                  <div style={{display: "flex", gap: "0.4rem"}}>
                    <img src={star} alt="" width={20} height={20}/>
                    <img src={star} alt="" width={20} height={20}/>
                    <img src={star} alt="" width={20} height={20}/>
                    <img src={star} alt="" width={20} height={20}/>
                    <img src={star} alt="" width={20} height={20}/>
                  </div>
                  <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{marginBottom: 0}}
                  >
                    "За 4 месяца накопил на новый iPhone, просто следуя
                    рекомендациям по экономии. Теперь коплю на ноутбук для учебы!"
                  </Typography.Text>
                  <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{marginBottom: 0}}
                  >
                    Даня, 16 лет
                  </Typography.Text>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={appSt.slider}>
                  <div style={{display: "flex", gap: "0.4rem"}}>
                    <img src={star} alt="" width={20} height={20}/>
                    <img src={star} alt="" width={20} height={20}/>
                    <img src={star} alt="" width={20} height={20}/>
                    <img src={star} alt="" width={20} height={20}/>
                    <img src={star} alt="" width={20} height={20}/>
                  </div>
                  <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{marginBottom: 0}}
                  >
                    "За 4 месяца накопил на новый iPhone, просто следуя
                    рекомендациям по экономии. Теперь коплю на ноутбук для учебы!"
                  </Typography.Text>
                  <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{marginBottom: 0}}
                  >
                    Даня, 16 лет
                  </Typography.Text>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={appSt.slider}>
                  <div style={{display: "flex", gap: "0.4rem"}}>
                    <img src={star} alt="" width={20} height={20}/>
                    <img src={star} alt="" width={20} height={20}/>
                    <img src={star} alt="" width={20} height={20}/>
                    <img src={star} alt="" width={20} height={20}/>
                    <img src={star} alt="" width={20} height={20}/>
                  </div>
                  <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{marginBottom: 0}}
                  >
                    "За 4 месяца накопил на новый iPhone, просто следуя
                    рекомендациям по экономии. Теперь коплю на ноутбук для учебы!"
                  </Typography.Text>
                  <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{marginBottom: 0}}
                  >
                    Даня, 16 лет
                  </Typography.Text>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <Gap size={32}/>

          <div style={{display: "flex", gap: "1rem"}}>
            <ButtonMobile
                block
                view={transfer !== "self" ? "secondary" : "primary"}
                onClick={() => setTransfer("self")}
                size="xs"
                style={{padding: "0.5rem"}}
            >
              <span style={{display: "block"}}>Старт</span>
              <b>Бесплатно</b>
            </ButtonMobile>
            <ButtonMobile
                block
                onClick={() => setTransfer("sfr")}
                view={transfer !== "sfr" ? "secondary" : "primary"}
                size="xs"
                style={{padding: "0.5rem"}}
            >
              <span style={{display: "block"}}>Стандарт</span>
              <b>149 ₽/мес.</b>
            </ButtonMobile>
          </div>

          <Gap size={16}/>

          {transfer === "self" ? (
              <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                  }}
              >
                <div
                    style={{display: "flex", gap: "0.5rem", alignItems: "center"}}
                >
                  <StatusBadge view="positive-checkmark" size={24}/>
                  <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{marginBottom: 0}}
                  >
                    Персональный финансовый план
                  </Typography.Text>
                </div>
                <div
                    style={{display: "flex", gap: "0.5rem", alignItems: "center"}}
                >
                  <StatusBadge view="positive-checkmark" size={24}/>
                  <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{marginBottom: 0}}
                  >
                    AI-рекомендации по расходам
                  </Typography.Text>
                </div>
                <div
                    style={{display: "flex", gap: "0.5rem", alignItems: "center"}}
                >
                  <StatusBadge view="positive-checkmark" size={24}/>
                  <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{marginBottom: 0}}
                  >
                    Комплексный ответ на любые вопросы
                  </Typography.Text>
                </div>
              </div>
          ) : (
              <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                  }}
              >
                <Typography.Text
                    tag="p"
                    view="primary-medium"
                    style={{marginBottom: 0}}
                >
                  Всё в Старте, плюс:
                </Typography.Text>
                <div
                    style={{display: "flex", gap: "0.5rem", alignItems: "center"}}
                >
                  <StatusBadge view="positive-checkmark" size={24}/>
                  <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{marginBottom: 0}}
                  >
                    Детализированная финансовая стратегия
                  </Typography.Text>
                </div>
                <div
                    style={{display: "flex", gap: "0.5rem", alignItems: "center"}}
                >
                  <StatusBadge view="positive-checkmark" size={24}/>
                  <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{marginBottom: 0}}
                  >
                    Советы по банковским продуктам
                  </Typography.Text>
                </div>
                <div
                    style={{display: "flex", gap: "0.5rem", alignItems: "center"}}
                >
                  <StatusBadge view="positive-checkmark" size={24}/>
                  <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{marginBottom: 0}}
                  >
                    Помощь в достижении цели
                  </Typography.Text>
                </div>
                <div
                    style={{display: "flex", gap: "0.5rem", alignItems: "center"}}
                >
                  <StatusBadge view="positive-checkmark" size={24}/>
                  <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{marginBottom: 0}}
                  >
                    Консультации по финансам
                  </Typography.Text>
                </div>
              </div>
          )}
        </div>

        <Gap size={32}/>

        <div className={appSt.bottomBtn}>
          <ButtonMobile loading={loading} block view="primary" onClick={submit}>
            Подключить
          </ButtonMobile>
        </div>
      </>
  );
};
