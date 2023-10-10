<template>
  <div id="app">
    <v-app>
      <v-banner
        v-if="deferredPrompt"
        color="info"
        dark
        class="text-left"
      >
        Install our App
        <template v-slot:actions>
          <v-btn text @click="dismiss">Dismiss</v-btn>
          <v-btn text @click="install">Install</v-btn>
        </template>
      </v-banner>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "vuetifyhead",
  data() {
    return {
      deferredPrompt: null,
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      if (Cookies.get("add-to-home-screen") === undefined) {
        this.deferredPrompt = e;
      }
    });

    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  methods: {
    dismiss() {
      Cookies.set("add-to-home-screen", "dismissed", { expires: 15 });
      this.deferredPrompt = null;
    },
    install() {
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt();
        this.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
          }
          this.deferredPrompt = null;
        });
      }
    },
  },
};
</script>
