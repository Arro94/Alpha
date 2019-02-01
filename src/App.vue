<template>
  <!--<div id="app">-->
  <!--<router-view></router-view>-->
  <!--</div>-->
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <!--TODO ////Break header out into component//////////////////////////////////////////////////////////////////////////////////////////-->

    <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
      <div class="mdl-layout__header-row portfolio-logo-row">
        <div class="logo-container">
          <div class="logo-area-background">
            <div class="portfolio-logo"></div>
          </div>
        </div>
      </div>
      <div class="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
        <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
          <router-link class="mdl-navigation__link" to="/home" @click.native="hideMenu">Home</router-link>
          <router-link class="mdl-navigation__link" to="/about" @click.native="hideMenu">About</router-link>
          <router-link class="mdl-navigation__link" to="/gallery" @click.native="hideMenu">Gallery</router-link>
          <router-link class="mdl-navigation__link" to="/contact" @click.native="hideMenu">Contact</router-link>

        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer mdl-layout--small-screen-only">
      <span class="mdl-layout__title">Alphamated</span>
      <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
        <router-link class="mdl-navigation__link" to="/home" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/about" @click.native="hideMenu">About</router-link>
        <router-link class="mdl-navigation__link" to="/gallery" @click.native="hideMenu">Gallery</router-link>
        <router-link class="mdl-navigation__link" to="/contact" @click.native="hideMenu">Contact</router-link>

      </nav>
    </div>
    <!--TODO NEW HEADER//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

    <main class="mdl-layout__content">
      <div class="page-content main">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  require('material-design-lite') // TODO is this valid? <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  export default {
    name: 'App',
    methods: {
      hideMenu: function () {
        document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
        document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
  @import '/assets/styles.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en');

  #app {
  }
</style>
