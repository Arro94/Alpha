<template>
  <main class="mdl-layout__content">

    <div class="mdl-grid portfolio-max-width">

      <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
        <div class="mdl-grid portfolio-copy">
          <video width="auto" height="auto" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0"
                 data-autoplay>
            <source src="static/demo.mp4" type="video/mp4">
            Your browser does not support video.
          </video>
        </div>
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">The Roller XPress</h2>
        </div>
        <div class="mdl-card__media">
        </div>
        <div class="mdl-card__supporting-text">
          <strong>The world’s first machine that fully automates the process of rolling silverware into napkins!</strong>
        </div>
        <div class="mdl-grid portfolio-copy">
          <div class="mdl-cell mdl-cell--10-col mdl-card__supporting-text no-padding ">
            <ul>
              <li>10 Seconds a Roll, 250 Roll-Ups an Hour which is 5 times faster than the average person.</li>
              <li>Load one time and go!</li>
              <li>No operator required!</li>
              <li>Accommodate both paper and cloth napkins!</li>
              <li>Able to work with 95% of silverware sizes on the market today.</li>
              <li>Patented Technology!</li>
              <li>Up to 4 utensils and down to 2 utensils.</li>
              <li>Any combination of fork, knife and spoons.</li>
              <li>Banding for both paper and cloth.</li>
              <li>3 X 3 X 4 Feet footprint size, table top apparatus!</li>
              <li>NSF and UL certified.</li>
              <li>Stainless Steel Framework.</li>
              <li>Made in the USA.</li>
              <li>10 Year Life Cycle.</li>
              <li>Medium Size Restaurants spends approximately  $15,000 a year rolling silverware!</li>
              <li>Great for Restaurants, Hotels, Catering and Event Planning, Cruise Ships and Colleges!</li>
              <li>Leasing options available upon request.</li>
            </ul>

          </div>

        </div>
      </div>
    </div>
    <footer class="mdl-mini-footer">
      <div class="mdl-mini-footer__left-section">
        <div class="mdl-logo">Alphamated</div>
      </div>
      <div class="mdl-mini-footer__right-section">
        <ul class="mdl-mini-footer__link-list">
          <li><a href="#">Help</a></li>
          <li><a href="#">Privacy & Terms</a></li>
        </ul>
      </div>
    </footer>
  </main>

</template>

<script>
  export default {
    name: "HomeView"
  }
</script>
<style scoped>
  @import url('https://code.getmdl.io/1.0.6/material.min.js');
</style>
