<template>
  <section class="logo">
    <div class="logo__img-wrapper">
      <a href="#!">
        <img class="logo__img" src="../../assets/img/logo.png" alt="medi-expo">
      </a>
    </div>

    <div class="logo__personal-area">
      <a class="logo__link" href="#!">Личный кабинет</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../scss/typography.scss';
@import '../../scss/body.scss';


.logo {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &__img-wrapper {
    max-width: 500px;
    max-height: 39px;
  }

  &__img {
    width: 100%;
    height: 100%;
  }

  &__personal-area {
    width: 100%;
    max-width: rem(320px);
    margin: 0.625em auto 0;
  }

  &__link {
    display: block;
    padding: 0.625em;

    font-weight: 600;
    color: $white;

    background-color: $light-blue-darken;
    border-radius: 0.3125em;
  }
}

@media #{$tablet} {
  .logo {
    flex-direction: row;

    &__personal-area {
      max-width: rem(170px);
      margin: 0;
    }
  }
}

</style>

<script>
export default {
    name: 'Logo'
}
</script>
