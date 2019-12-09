<template>
  <nav class="nav-menu">
    <button class="nav-menu__btn" :class="{'nav-menu__btn--active': isActive}" @click="classMenuActive">
      <span class="nav-menu__btn-line nav-menu__btn-line--first"></span>
      <span class="nav-menu__btn-line nav-menu__btn-line--second"></span>
      <span class="nav-menu__btn-line nav-menu__btn-line--third"></span>
    </button>
    <ul class="nav-menu__list" :class="{'nav-menu__list--active': isActiveMenuList}">
      <li v-for="(item, index) in menuItems" :key="index">
        <a href="#!">{{ item.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "../../scss/typography.scss";
@import "../../scss/body.scss";

@keyframes scale-left {
  0% {
    transform: scaleX(0);
    transform-origin: 100% 100%;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 100% 100%;
  }
}

@keyframes scale-right {
  0% {
    transform: scaleX(1);
    transform-origin: 100% 100%;
  }
  100% {
    transform: scaleX(0);
    transform-origin: 100% 100%;
  }
}

.nav-menu {
  position: relative;

  margin-top: 0.625em;

  text-align: right;

  &__btn {
    position: relative;
    z-index: 2;

    width: rem(40px);
    height: rem(40px);

    background-color: $white;
    border: 2px solid $light-blue-darken;
    border-radius: 5px;
    box-shadow: 2px 2px 5px $light-blue-lighten;

    transition: box-shadow 0.3s;


    &--active {
      box-shadow: 4px 4px 0 $light-blue-lighten;

      & .nav-menu__btn-line--first {
        width: 90%;
      }

      & .nav-menu__btn-line--second {
        width: 90%;
      }

      & .nav-menu__btn-line--third {
        width: 90%;
      }
    }
  }

  &__btn-line {
    position: absolute;
    top: 5px;
    right: 0;

    display: block;
    width: 100%;
    height: 5px;

    background-color: $light-blue-darken;

    transition: width 0.3s;

    &--first {
      width: 70%;
    }

    &--second {
      top: 50%;

      width: 50%;

      transform: translateY(-50%);
    }

    &--third {
      top: auto;
      bottom: 5px;

      width: 30%;
    }
  }

  &__list {
    position: absolute;
    top: 0;
    z-index: 1;

    display: block;
    width: 100%;

    text-align: center;

    background-color: $light-blue-darken;
    border-radius: 10px;
    opacity: 0;

    transition: opacity 0.3s;
    animation: scale-right 0.3s linear both;

    & li {
      padding: 10px 0;

      border-top: 1px solid $white;

      &:first-child {
        border-top: none;
      }
    }

    & a {
      position: relative;

      display: inline-block;

      font-weight: 600;
      color: $white;

      cursor: pointer;

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

      &:hover::after,
      &:focus::after {
        width: 100%;
      }
    }

    &--active {
      display: block;

      opacity: 1;

      animation: scale-left 0.3s linear both;
    }
  }

  @media #{$media-720p} {
    .nav-menu {
      &__btn {
        display: none;
      }

      &__list {
        position: relative;

        display: flex;
        justify-content: space-between;
        padding: 0.625em;

        opacity: 1;

        animation: none;

        & li {
          border: none;
        }
      }
    }
  }
}

</style>

<script>
  export default {
    name: 'NavMenu',

    data: () => {
      return {
        menuItems: [
          { title: 'О нас' },
          { title: 'Новости' },
          { title: 'Услуги' },
          { title: 'Ассоциациям и Обществам' },
          { title: 'Экспонентам и спонсорам' },
          { title: 'Делегатам' },
          { title: 'Календарь событий' }
        ],
        isActive: false,
        isActiveMenuList: false
      }
    },
    methods: {
      classMenuActive: function() {
        this.isActive = !this.isActive;
        this.isActiveMenuList = !this.isActiveMenuList;
      }
    }
  }

</script>
