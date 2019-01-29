<template>
  <div class="mdl-grid">
    <div class="mdl-layout-spacer"></div>

    <div class="mdl-card mdl-shadow--2dp my-subscribe-card-size">
      <form @submit.prevent="submitSubscription">
        <div class="mdl-card__title mdl-color--primary">
          <h2 class="mdl-card__title-text mdl-color-text--white">Subscribe:</h2>
        </div>
        <div class="mdl-card__supporting-text">

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="email" class="mdl-textfield__label">Email Address:</label>
            <input ref="txtEmail" name="email" @input="checkEmailValidator" id="email" class="mdl-textfield__input"
                   type="email">
            <span class="mdl-textfield__error">Please enter a valid email address.</span>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="comment" class="mdl-textfield__label">Comment:</label>
            <input ref="txtComment" name="comment" id="comment" class="mdl-textfield__input" type="text">
          </div>

        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button :disabled="submitButtonDisabled"
                  class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Submit
          </button>
        </div>
      </form>
    </div>
    <div class="mdl-layout-spacer"></div>
  </div>
</template>

<script>




  export default {
    props: {
    },
    name: "SubscribeComponent",
    data() {
      return {
        submitButtonDisabled: true
      }
    },
    methods: {

      submitSubscription: function () {
        let email = this.$refs.txtEmail.value.trim()
        this.isLoading = true
        this.submitButtonDisabled = true
        this.$emit('subscriptionEmail', {
          'email': email
        })
      },
      checkEmailValidator: function () {
        if (this.$refs.txtEmail.checkValidity()) {
          this.submitButtonDisabled = false;
        } else {
          this.submitButtonDisabled = true;
        }
      }
    }
  }
</script>

<style scoped>
  .my-subscribe-card-size {
    max-width: 320px;
    height: auto;
  }
</style>
