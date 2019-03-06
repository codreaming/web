<template>
  <div class='auth__wrapper' @click='closeModal' v-if='open'>
    <div class="auth__contain" @click.stop="">
      <div class='auth__header'>
        <h2 class='auth__title'>Log in</h2>
        <button class='auth__close' @click='closeModal'>Close</button>
      </div>
      <div class="auth__buttons">
        <button class='auth__button  auth__button--google'>Log in with Google</button>
        <button class='auth__button  auth__button--fb'>Log in with Facebook</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    authOpen: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      openModal: this.authOpen
    }
  },
  methods: {
    closeModal () {
      this.openModal = false
      this.$emit('closeModal', this.openModal)
    }
  },
  computed: {
    open () {
      return this.authOpen
    }
  }
}
</script>

<style lang="scss">
  .auth__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
  }

  .auth__contain {
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 320px;
    background-color: #fff;
    box-shadow: 0 5px 15px 0 rgba(50,50,50,0.3);
    box-sizing: border-box;
    border-radius: 4px;
  }

  .auth__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    background-color: #3d5063;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .auth__title {
    margin: 0;
    color: #fff;
    text-align: left;
  }

  .auth__close {
    font-size: 0;
    line-height: 0;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
    outline: none;
    background-image: url('../assets/cancel.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    &:hover {
      cursor: pointer;
    }
  }

  .auth__buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px 30px 40px;
    background-color: rgb(247, 242, 242);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .auth__button {
    position: relative;
    display: inline-block;
    padding: 15px 20px;
    padding-left: 50px;
    margin-top: 15px;
    margin-bottom: 15px;
    border: none;
    border-radius: 4px;
    color: rgb(247, 242, 242);
    font-size: 15px;
    font-weight: 600;
    &:hover {
      cursor: pointer;
    }

    &::before {
      content: "";
      position: absolute;
      left: 25px;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
    }

    &--fb::before {
      background-image: url('../assets/facebook-social-symbol.svg');
    }

    &--google::before {
      background-image: url('../assets/google-plus-logo.svg');
    }

    &--fb {
      background-color: #4b74cc;
    }
    &--google {
      background-color: #db5546;
    }
  }

</style>
