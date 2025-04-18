// locales settings for this theme
// Set the languages you want to support on your site.
// https://astro-i18n-starter.pages.dev/setup/

export const DEFAULT_LOCALE_SETTING: string = "en";

interface LocaleSetting {
	[key: Lowercase<string>]: {
		label: string;
		lang?: string;
		dir?: "rtl" | "ltr";
	};
} // refer: https://starlight.astro.build/reference/configuration/#locales

export const LOCALES_SETTING: LocaleSetting = {
	en: {
		label: "English",
		lang: "en-US",
	},
	es: {
		label: "Español",
		lang: "es-ES",
	},
	pt: {
		label: "Português",
		lang: "pt-PT",
	},
	fr: {
		label: "Français",
		lang: "fr-FR",
	},
	ru: {
		label: "Русский",
		lang: "ru-RU",
	},
	"zh-cn": {
		label: "简体中文",
		lang: "zh-CN",
	},
	ja: {
		label: "日本語",
		lang: "ja-JP",
	},
	ar: {
		label: "العربية",
		lang: "ar-SA",
		dir: "rtl",
	},
};
