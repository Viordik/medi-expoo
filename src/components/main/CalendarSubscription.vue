<template>
  <section class="calendar-subscription">
    <div class="calendar-subscription__link-wr">
      <a class="calendar-subscription__link" href="#!">Календарь событий</a>
    </div>
    <div class="calendar-subscription__link-wr">
      <a class="calendar-subscription__link" href="#!">Подписка на анонсы</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "../../scss/typography.scss";
  @import "../../scss/body.scss";

  .calendar-subscription {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    max-width: rem(980px);
    margin: 0 auto;

    &__link-wr {
      width: 100%;
      max-width: 20rem;
      padding: 0.625em;

      background-color: $light-blue-darken;
      border-radius: 0.3125em;

      &:first-child {
        margin-bottom: 0.625em;
      }
    }

    &__link {
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
  }


  @media #{$tablet} {
    .calendar-subscription {
      &__link-wr {
        &:first-child {
          margin-bottom: 0;
          margin-right: 10px;
        }
      }
    }
  }

</style>

<script>
export default {
  name: 'CalendarSubscription',
  data: () => {
    return {

    }
  }
}
</script>
