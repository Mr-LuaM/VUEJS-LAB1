<template>
  <!--Body wrapper-->
  <div
    class="page-wrapper"
    id="main-wrapper"
    data-layout="vertical"
    data-navbarbg="skin6"
    data-sidebartype="full"
    data-sidebar-position="fixed"
    data-header-position="fixed"
  >
    <Sidebar />
    <!--  Main wrapper -->
    <div class="body-wrapper">
      <Header />
    </div>
    <!--  Main wrapper end -->
  </div>
  <!--Body wrapper end-->
</template>
<script>
import { defineComponent } from "vue";
import Sidebar from "@/components/admin/Sidebar.vue";
import Header from "@/components/admin/Header.vue";
export default defineComponent({
  name: "ManageView",
  components: {
    Sidebar,
    Header,
  },
  mounted() {
    this.loadScripts();
  },

  methods: {
    loadScripts() {
      const scriptUrls = [
        "/admin/libs/jquery/dist/jquery.min.js",
        "/admin/libs/bootstrap/dist/js/bootstrap.bundle.min.js",
        //"/admin/js/sidebarmenu.js",
        //"/admin/js/app.min.js",
        "/admin/libs/apexcharts/dist/apexcharts.min.js",
        "/admin/libs/simplebar/dist/simplebar.js",
        //    "/admin/js/dashboard.js",
      ];

      const head = document.getElementsByTagName("head")[0];

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
@import "@/assets/admin/css/styles.min.css";
</style>
