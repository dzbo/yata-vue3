<script setup>
import { ref } from "vue";
import { t, setupIntl } from "../lib/intl";
import enTranslations from "../translations/en_US.json";
import deTranslations from "../translations/de_DE.json";

defineProps({
  msg: String,
});

const count = ref(0);

const changeLocale = (locale, messages) => {
  setupIntl({
    locale,
    messages,
  });
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">
      {{ t("hello_count", { count }) }}
    </button>
    <p>
      {{ t("hello_edit", { code: "components/HelloWorld.vue" }) }}
    </p>
  </div>

  <button type="button" @click="changeLocale('en-US', enTranslations)">
    EN
  </button>
  <button type="button" @click="changeLocale('de-DE', deTranslations)">
    DE
  </button>
  <p>
    {{ t("hello_checkout") }}

    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >
    {{ t("hello_official") }}
  </p>
  <p>
    {{ t("hello_install") }}
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a
    >{{ t("hello_ide") }}
  </p>
  <p class="read-the-docs">{{ t("hello_click") }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
