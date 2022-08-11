import { createIntl } from "@formatjs/intl";
import messages from "../translations/en_US.json";
import { ref } from "vue";

let intl = ref();

export const defaultConfig = {
  locale: "en-US",
  messages,
};

export function setupIntl(config) {
  intl.value = createIntl({ ...config, defaultLocale: "en-US" });
}

export function t(key, options) {
  return intl.value.formatMessage({ id: key }, options);
}
