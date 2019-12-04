<template>
  <section class="banner">
    <div class="banner__info">
      <p class="banner__text">{{ itemBanner.date }}</p>
      <a href="#!">
        <h1 class="banner__h1">{{ itemBanner.title }}</h1>
      </a>
      <p class="banner__text">{{ itemBanner.adress }}</p>
    </div>
    <div class="banner__wrapper">
      <a href="#!">
        <img class="banner__img" :src="itemBanner.img"
          alt="Медицина и Качество – 2019. XII Всероссийская научно-практическая конференция с международным участием">
      </a>

    </div>
    <div class="banner__wrapper">
      <div class="banner__registered">
        <p class="banner__text banner__text--registered">Зарегестрированных участников</p>
        <p class="banner__text banner__text--registered">{{ itemBanner.registered }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "../../scss/typography.scss";
  @import "../../scss/body.scss";

  .banner {
    &__info {
      max-width: rem(800px);
      margin: 0 auto;
    }


    &__h1 {
      position: relative;

      display: inline-block;

      font-size: 1.5em;
      color: $text-color;

      transition: color 0.2s ease-in-out;

      &::after {
        content: "";
        position: absolute;
        bottom: -4px;

        display: block;
        width: 0;
        height: 2px;

        background-color: $light-blue-darken;

        transition: width 0.2s ease-in-out;
      }

      &:hover,
      &:focus {
        color: $light-blue-darken;
      }

      &:hover::after,
      &:focus::after {
        width: 100%;
      }
    }

    &__text {
      font-size: 0.875em;

      &:first-child {
        margin-bottom: 0.625em;
      }

      &:last-child {
        margin: 0.625em 0;
      }

      &--registered {
        text-align: left;

        &:nth-child(n) {
          margin: 0;
        }
      }
    }

    &__wrapper {
      max-width: rem(980px);
      margin: 0 auto;
    }

    &__img {
      width: 100%;
    }

    &__registered {
      display: flex;
      align-items: flex-start;
      max-width: rem(200px);
      margin: 0.625em 0 0 auto;
      padding: 0.625em;

      color: $white;

      background-color: $light-blue-darken;
      border-radius: 0.3125em;
    }
  }


  @media #{$tablet} {
    .banner {
      &__h1 {
        font-size: 1.875em;
      }

      &__text {
        font-size: 1em;

        &:last-child {
          margin: 0.9375em 0;
        }

        &--registered {
          &:nth-child(n) {
            margin: 0;
          }
        }
      }

      &__registered {
        max-width: rem(230px);
      }
    }
  }

  @media #{$media-720p} {
    .banner {
      &__h1 {
        font-size: 2.1875em;
      }

      &__text {
        font-size: 1em;
      }
    }
  }

</style>

<script>
  export default {
    name: 'Banner',

    data: () => {
      return {
        itemBanner: {
          date: '04–05 декабря',
          title: 'Медицина и Качество – 2019. XII Всероссийская научно-практическая конференция с международным участием',
          adress: 'г. Москва, Площадь Европы, д.2, Славянская Гостиница и Деловой Центр',
          img: 'https://www.mediexpo.ru/fileadmin/user_upload/content/img/980x340_mk2019_ru.png',
          registered: '900'
        }
      }
    }
  }

</script>
