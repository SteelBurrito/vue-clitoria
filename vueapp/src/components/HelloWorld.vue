<template>
  <div class="container">
    <h1 class="has-text-centered has-text-weight-bold is-size-1">{{ msg }}</h1>
    <hr />
    <div class="box has-text-centered">
      <div class="field">
          <input type="text" v-model="input_val">
          Input Value: <span v-text="input_val"></span>
      </div>
      <div class ="field">
          <button class="btn btn-primary" v-on:click="counter++">You've clicked this button {{counter}} times!</button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome',
        input_val: '',
        counter: 0
      }
    }
  }
</script>