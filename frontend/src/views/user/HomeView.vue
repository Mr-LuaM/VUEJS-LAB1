<template>
  <!---<preloader />-->
  <Header />
  <h1>HI</h1>
    <h1>Lei Ann Nastor</h1>
</template>
<script>
import { defineComponent } from "vue";
import preloader from "@/components/user/preloader.vue";
import Header from "@/components/user/Header.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    preloader,
    Header,
  },
  mounted() {
    this.loadScripts();
  },

  methods: {
    loadScripts() {
      const scriptUrls = [
        // "/user/js/vendor/modernizr-3.5.0.min.js",
        // "/user/js/vendor/jquery-1.12.4.min.js",
        // "/user/js/popper.min.js",
        // "/user/js/bootstrap.min.js",
        // "/user/js/owl.carousel.min.js",
        // "/user/js/slick.min.js",
        // "/user/js/jquery.slicknav.min.js",
        // "/user/js/wow.min.js",
        // "/user/js/animated.headline.js",
        // "/user/js/jquery.magnific-popup.js",
        // "/user/js/gijgo.min.js",
        // "/user/js/lightslider.min.js",
        // "/user/js/price_rangs.js",
        // "/user/js/jquery.nice-select.min.js",
        // "/user/js/jquery.sticky.js",
        // "/user/js/jquery.barfiller.js",
        // "/user/js/jquery.counterup.min.js",
        // "/user/js/waypoints.min.js",
        // "/user/js/jquery.countdown.min.js",
        // "/user/js/hover-direction-snake.min.js",
        // "/user/js/contact.js",
        // "/user/js/jquery.form.js",
        // "/user/js/jquery.validate.min.js",
        // "/user/js/mail-script.js",
        // "/user/js/jquery.ajaxchimp.min.js",
        // "/user/js/plugins.js",
        // "/user/js/main.js",
      ];

      const head = document.getElementsByTagName("hea")[0];

      scriptUrls.forEach((scriptUrl) => {
        const script = document.createElement("script");

        script.src = scriptUrl;

        script.async = true;

        head.appendChild(script);
      });
    },
  },
});
</script>
<style>
@import "@/assets/user/css/bootstrap.min.css";
@import "@/assets/user/css/owl.carousel.min.css";
@import "@/assets/user/css/slicknav.css";
@import "@/assets/user/css/flaticon.css";
@import "@/assets/user/css/progressbar_barfiller.css";
@import "@/assets/user/css/lightslider.min.css";
@import "@/assets/user/css/price_rangs.css";
@import "@/assets/user/css/gijgo.css";
@import "@/assets/user/css/animate.min.css";
@import "@/assets/user/css/animated-headline.css";
@import "@/assets/user/css/magnific-popup.css";
@import "@/assets/user/css/fontawesome-all.min.css";
@import "@/assets/user/css/themify-icons.css";
@import "@/assets/user/css/slick.css";
@import "@/assets/user/css/nice-select.css";
@import "@/assets/user/css/style.css";
</style>
