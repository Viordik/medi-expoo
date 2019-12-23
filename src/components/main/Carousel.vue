<template>
  <section class="carousel__component">
    <button class="carousel__btn carousel__btn--left" type="button" @click="prev">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847">
        <g>
          <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		      L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		      c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" color="curretColor" />
        </g>
      </svg>
    </button>
    <button class="carousel__btn carousel__btn--right" type="button" @click="next">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847">
        <g>
          <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		      L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		      c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" color="curretColor" />
        </g>
      </svg>
    </button>
    <div class="carousel">
      <div ref="slider" class="carousel__wrapper">
        <figure ref="item" class="carousel__item" v-for="item in items" :key="item.id">
          <a href="#!">
            <div class="carousel__img-wrapper">
              <img class="carousel__img" :src="item.img" :alt="item.title">
            </div>
            <div class="carousel__date">
              <p class="carousel__text">{{ item.date }}</p>
            </div>
            <p class="carousel__title">{{ item.title }}</p>
          </a>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
  import {
    media
  } from '../../helpers/media';

  export default {
    name: 'CarouselProject',

    data: () => {
      return {
        step: 0,
        items: [{
            id: 0,
            img: 'https://www.mediexpo.ru/typo3temp/pics/784c3bb2a1.jpg',
            date: '16 декабря',
            title: 'XXV Юбилейная всероссийская научно-практическая конференция с международным участием «Наука и практика лабораторных исследований»'
          },
          {
            id: 1,
            img: 'https://www.mediexpo.ru/typo3temp/pics/784c3bb2a1.jpg',
            date: '17 декабря',
            title: 'XXV Юбилейная всероссийская научно-практическая конференция с международным участием «Наука и практика лабораторных исследований»'
          },
          {
            id: 2,
            img: 'https://www.mediexpo.ru/typo3temp/pics/784c3bb2a1.jpg',
            date: '18 декабря',
            title: 'XXV Юбилейная всероссийская научно-практическая конференция с международным участием «Наука и практика лабораторных исследований»'
          },
          {
            id: 3,
            img: 'https://www.mediexpo.ru/typo3temp/pics/784c3bb2a1.jpg',
            date: '19 декабря',
            title: 'XXV Юбилейная всероссийская научно-практическая конференция с международным участием «Наука и практика лабораторных исследований»'
          },
          {
            id: 4,
            img: 'https://www.mediexpo.ru/typo3temp/pics/784c3bb2a1.jpg',
            date: '20 декабря',
            title: 'XXV Юбилейная всероссийская научно-практическая конференция с международным участием «Наука и практика лабораторных исследований»'
          },
          {
            id: 5,
            img: 'https://www.mediexpo.ru/typo3temp/pics/784c3bb2a1.jpg',
            date: '21 декабря',
            title: 'XXV Юбилейная всероссийская научно-практическая конференция с международным участием «Наука и практика лабораторных исследований»'
          },
          {
            id: 6,
            img: 'https://www.mediexpo.ru/typo3temp/pics/784c3bb2a1.jpg',
            date: '22 декабря',
            title: 'XXV Юбилейная всероссийская научно-практическая конференция с международным участием «Наука и практика лабораторных исследований»'
          },
          {
            id: 7,
            img: 'https://www.mediexpo.ru/typo3temp/pics/784c3bb2a1.jpg',
            date: '23 декабря',
            title: 'XXV Юбилейная всероссийская научно-практическая конференция с международным участием «Наука и практика лабораторных исследований»'
          },
          {
            id: 8,
            img: 'https://www.mediexpo.ru/typo3temp/pics/784c3bb2a1.jpg',
            date: '24 декабря',
            title: 'XXV Юбилейная всероссийская научно-практическая конференция с международным участием «Наука и практика лабораторных исследований»'
          }
        ]
      }
    },

    watch: {
      step(value) {
        this.slider.style.transform = `translate3d(-${this.itemWidth * value}px, 0, 0)`;
      }
    },

    computed: {
      isLastStep() {
        const mathes = media();
        let showItems;

        if (mathes.mobile) {
          showItems = 1;
        }

        if (mathes.tablet) {
          showItems = 3;
        }

        if (mathes.tabletMax) {
          showItems = 4;
        }

        return this.step === this.items.length - showItems;
      },

      isFirstStep() {
        return this.step === 0;
      },

      slider() {
        return this.$refs.slider;
      },

      itemWidth() {
        return this.$refs.item[0].getBoundingClientRect().width;
      }
    },

    methods: {
      next: function () {
        if (this.isLastStep) {
          return;
        }

        this.step += 1;
      },

      prev: function () {
        if (this.isFirstStep) {
          return;
        }

        this.step -= 1;
      }
    }
  }

</script>

<style lang="scss">
  @import "../../scss/typography.scss";
  @import "../../scss/body.scss";

  .carousel {
    position: relative;

    width: 100%;
    max-width: rem(980px);
    margin: 0 auto;
    overflow: hidden;

    &__component {
      position: relative;
      margin: 1.25em auto;
      max-width: rem(980px);
    }

    &__btn {
      padding: 0;
      position: absolute;
      z-index: 2;
      top: 50%;
      left: -12px;
      transform: translateY(-50%);
      width: rem(25px);
      height: 100%;
      border: 2px solid $light-blue-darken;
      background-color: $blue-lighten;
      color: $light-blue-darken;
      transition: box-shadow 1s;

      &:active {
        background-color: $light-blue-darken;
        box-shadow: 0 0 10px $light-blue-lighten;

        &>svg {
          fill: $white;
        }
      }

      &--right {
        left: auto;
        right: -12px;
      }

      &--left {
        &>svg {
          transform: rotate(180deg);
        }
      }

      &>svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
      }
    }

    &__wrapper {
      position: relative;

      display: flex;

      transform: translate3d(0, 0, 0);

      transition: transform 500ms;
    }

    &__item {
      position: relative;

      width: 100%;
      min-width: 100%;
      max-width: 100%;
      height: 100%;
      min-height: rem(270px);
      max-height: rem(300px);
      padding: 0.9375em;

      background-color: $white;
      border: 3px solid $blue-lighten;

      &:hover,
      &:focus {
        border-color: $light-blue-darken;


        .carousel__text,
        .carousel__title {
          color: $light-blue-darken;
        }
      }

      &>a {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
      }
    }

    &__img-wrapper {
      // width: 100%;
      // min-width: 100%;
      // max-width: rem(280px);
      // height: 100%;
      // min-height: rem(123px);
      // max-height: rem(123px);
      // margin: 0 auto;

    }

    &__img {
      width: 100%;
      height: 100%;
    }

    &__date {
      position: absolute;
      top: 3.125em;
      left: 1.875em;

      width: 100%;
      max-width: rem(100px);
      padding: 0.625em;

      font-weight: 600;

      background-color: $white;
    }

    &__text {
      color: $text-color;
    }

    &__title {
      margin-top: 0.9375em;

      font-size: 0.875em;
      line-height: 1.1875em;
      color: $text-color;
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  @media #{$tablet} {
    .carousel {
      &__item {
        width: 100%;
        min-width: rem(242px);
        max-width: rem(242px);
      }

      &__img-wrapper {
        min-width: rem(206px);
        max-width: rem(242px);
      }
    }
  }

  @media #{$tablet-1024} {
    .carousel {
      &__item {
        width: 100%;
        min-width: rem(245px);
        max-width: rem(245px);
      }
    }
  }

</style>
