import { createI18n } from "vue-i18n";

const i18n = createI18n({
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE ?? "en",

  locale: "en",

  legacy: false,

  pluralizationRules: {
    ar: function (number, choicesLength) {
      if (choicesLength < 4 && import.meta.env.DEV)
        console.warn(
          "[vue-i18n] Arabic pluralization, found too few choices",
          choicesLength,
          "unexpected result",
        );

      if (
        choicesLength < 5 &&
        number === 0 &&
        process.env.NODE_ENV === "development"
      )
        console.warn(
          "[vue-i18n] Arabic pluralization, usage of zero with non-zero supporting translation",
        );

      type ChoiceMapEntry = {
        match: number | ((val: number) => boolean);
        index: number;
      };

      let choicesMap: ChoiceMapEntry[] = [
        {
          match: (val: number) => val === 0 || val === 1,
          index: 0,
        },
        {
          match: (val: number) => val >= 2,
          index: 1,
        },
      ];

      if (choicesLength === 3) {
        // this branch should never be used but we're just accounting for an edge-case
        // this options should never be used with number=0
        choicesMap = [
          {
            match: (val) => val === 0 || val === 1,
            index: 0,
          },
          {
            match: 2,
            index: 1,
          },
          {
            match: (val) => val >= 3,
            index: 2,
          },
        ];
      } else if (choicesLength === 4) {
        // this options should never be used with number=0

        choicesMap = [
          {
            match: (val) => val === 0 || val === 1,
            index: 0,
          },
          {
            match: 2,
            index: 1,
          },
          {
            match: (val) => val >= 3 && val <= 10,
            index: 2,
          },
          {
            match: (val) => val >= 11,
            index: 3,
          },
        ];
      } else if (choicesLength === 5) {
        choicesMap = [
          {
            match: 0,
            index: 0,
          },
          {
            match: 1,
            index: 1,
          },
          {
            match: 2,
            index: 2,
          },
          {
            match: (val) => val >= 3 && val <= 10,
            index: 3,
          },
          {
            match: (val) => val >= 11,
            index: 4,
          },
        ];
      } else if (choicesLength === 6) {
        choicesMap = [
          {
            match: 0,
            index: 0,
          },
          {
            match: 1,
            index: 1,
          },
          {
            match: 2,
            index: 2,
          },
          {
            match: (val) => val >= 3 && val <= 10,
            index: 3,
          },
          {
            match: (val) => val >= 11 && val <= 99,
            index: 4,
          },
          {
            match: (val) => val > 99,
            index: 5,
          },
        ];
      }

      for (const mapItem of choicesMap) {
        const match = mapItem.match;
        if (typeof match === "number") {
          if (number === match) return mapItem.index;
        } else {
          if (match(number)) return mapItem.index;
        }
      }
    },
  },

  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "LYD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
    ar: {
      currency: {
        style: "currency",
        currency: "LYD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },

  modifiers: {
    define: (str) => "ال" + str,
  },

  messages: {},

  silentTranslationWarn: true,
});

export type SupportedLocale = typeof i18n.global.locale.value;

export function setLocale(locale: SupportedLocale) {
  if (i18n.global.locale.value === locale) {
    return locale;
  }

  i18n.global.locale.value = locale;
}

export default i18n;
