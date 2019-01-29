<template>
  <subscribe-component>
    @subscriptionEmail="subscribeAttempt"
  </subscribe-component>
</template>

<script>
  import SubscribeComponent from "./SubscribeComponent";
  import firebase from 'firebase';
  import { db } from '../main' //todo ??????????????????????????????????????????????????

  export default {
    components: {SubscribeComponent},
    name: 'ContactView',
    data() {
      return {}
    },
    methods: {
      subscribeAttempt(email) {
        const createdAt = new Date();
        db.collection('subscriptionsRepo').add({email, createdAt});
      }
    },
  }
</script>

<style scoped>

</style>
