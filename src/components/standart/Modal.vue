<template>
  <form class="modal">
    <h2 class="modal__h2">Подписка на рассылку</h2>
    <p class="modal__text">Рассылки</p>
    <ul class="modal__list">
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Акушерство и гинекология, перинатология</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Анестезиология и реаниматология</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Гематология</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Генетика</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Кардиология</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Клиническая лабораторная диагностика</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Неонатология</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Онкология</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Организация здравоохранения</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Радиология (рентгенология, лучевая терапия, лучевая диагностика)</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Смежные специализации</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Терапия</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Травматология</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Ультразвуковая диагностика (УЗД)</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Урология</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Функциональная диагностика</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Хирургия</label>
      </li>
      <li class="modal__list-item">
        <input class="modal__input-check" type="checkbox" name="" id="">
        <span class="modal__input-check-custom"></span>
        <label class="modal__label" for="">Эксперт по качеству оказания медицинской помощи</label>
      </li>
    </ul>

    <div class="modal__input-block">
      <label class="modal__input-wr">
        <input class="modal__input" type="text" placeholder="Имя">
        <span></span>
      </label>
      <label class="modal__input-wr">
        <input class="modal__input" type="email" name="" id="" placeholder="E-mail">
        <span></span>
      </label>
    </div>

    <div class="modal__list-item">
      <input class="modal__input-check" type="checkbox" name="" id="">
      <span class="modal__input-check-custom"></span>
      <label class="modal__label" for="">Я даю <a class="modal__link" href="#!">согласие на обработку персональных данных</a></label>
    </div>

    <div class="modal__btn-wr">
      <button class="modal__btn" type="submit"><span>Подписаться</span></button>
      <button class="modal__btn" type="button"><span>Закрыть</span></button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
  @import "../../scss/typography.scss";
  @import "../../scss/body.scss";

  .modal {
    position: absolute;
    top: 10%;
    left: 50%;
    z-index: 10;

    display: none;
    flex-direction: column;
    width: 100%;
    max-width: rem(600px);
    padding: 1em;

    background-color: $blue-lighten;
    border: 2px solid $light-blue-darken;
    border-radius: 1em;
    box-shadow: 2px 2px 5px $light-blue-lighten;
    transform: translateX(-50%);

    &--active {
      display: flex;
    }

    &__h2 {
      margin-bottom: 0.625em;

      font-weight: 600;
      font-size: 1.25em;
    }

    &__text {
      margin-bottom: 0.625em;
    }

    &__list-item {
      position: relative;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 0.4375em;

      text-align: left;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__input-check {
      width: 18px;
      height: 18px;

      opacity: 0;

      &:checked + span::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;

        width: 10px;
        height: 10px;

        background-color: $light-blue-darken;
        transform: translate(-50%, -50%);
      }
    }

    &__input-check-custom {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      width: 18px;
      height: 18px;

      border: 2px solid $light-blue-darken;
    }

    &__label {
      margin-left: 0.625em;
    }

    &__input-block {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: baseline;
      min-width: rem(36px);
      height: 100%;
      max-height: rem(80px);
      margin: 0.625em 0;
    }

    &__input-wr {
      position: relative;

      width: 100%;
      max-width: rem(275px);
      margin: 0 auto;
    }


    &__input {
      position: relative;

      display: block;
      width: 100%;
      padding: 0.4375em;

      background-color: transparent;
      border: none;
      border-bottom: 2px solid $grey-lighten;

      & + span {
        position: absolute;
        bottom: 0.625em;
        left: 0;

        display: block;
        width: 0;
        height: 2px;

        background-color: $light-blue-darken;

        transition: width 0.2s ease-in-out;
      }

      &:focus {
        & + span {
          width: 100%;
        }
      }

      &:first-child {
        margin-bottom: 0.625em;
      }
    }

    &__btn-wr {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: baseline;
      width: 100%;
      max-width: rem(300px);
      margin: 0 auto;
    }

    &__btn {
      width: 100%;
      max-width: rem(130px);
      padding: 0.625em;

      font-weight: 600;
      color: $white;

      background-color: $light-blue-darken;
      border: none;
      border-radius: 5px;

      & span {
        position: relative;

        display: inline-block;
        &::after {
          content: "";
          position: absolute;
          bottom: -4px;

          display: block;
          width: 0;
          height: 2px;

          background-color: $white;

          transition: width 0.2s ease-in-out;
        }
      }



      &:hover,
      &:focus {
        & span {
          &::after {
            width: 100%;
          }
        }
      }
    }

    &__link {
      position: relative;

      display: inline-block;

      font-weight: 600;
      color: $text-color;

      &::after {
        content: "";
        position: absolute;
        bottom: -4px;

        display: block;
        width: 0;
        height: 2px;

        background-color: $text-color;

        transition: width 0.2s ease-in-out;
      }

      &:hover,
      &:focus {
        &::after {
          width: 100%;
        }
      }
    }
  }

</style>

<script>
  export default {
    name: 'Modal',
    props: {

    },
    data: () => {
      return {

      }
    },
    methods: {
      isClose: function() {

      }
    }
  }
</script>
