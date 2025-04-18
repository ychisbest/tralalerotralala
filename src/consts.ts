// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Multilingual } from "@/i18n";
import { shorthash } from "astro/runtime/server/shorthash.js";

//meme wiki site
export const SITE_TITLE: string | Multilingual = {
  en: "Tralalero Tralala Wiki - Your Meme Encyclopedia",
  es: "Tralalero Tralala Wiki - Tu Enciclopedia de Memes",
  ar: "ترالاليرو ترالالا ويكي - موسوعة الميمات الخاصة بك",
  pt: "Tralalero Tralala Wiki - Sua Enciclopédia de Memes",
  fr: "Tralalero Tralala Wiki - Votre Encyclopédie de Mèmes",
  ru: "Тралалеро Тралала Вики - Ваша Энциклопедия Мемов",
  "zh-cn": "Tralalero Tralala 维基 - 你的梗百科",
  ja: "トゥララレロ トゥララーラ ウィキ - あなたのミーム百科事典"
};

export const SITE_TITLE_SHORT = "Tralalero Tralala Wiki";

export const SITE_DESCRIPTION: string | Multilingual =  {
  en: "Discover the fascinating world of memes at Tralalero Tralala Wiki. Your comprehensive guide to internet culture, viral trends, and hilarious moments. Join our community of meme enthusiasts today!",
  es: "Descubre el fascinante mundo de los memes en Tralalero Tralala Wiki. Tu guía completa de la cultura de internet, tendencias virales y momentos divertidos. ¡Únete a nuestra comunidad!",
  ar: "اكتشف عالم الميمات المذهل في ترالاليرو ترالالا ويكي. دليلك الشامل لثقافة الإنترنت والاتجاهات الفيروسية واللحظات المضحكة. انضم إلى مجتمعنا اليوم!",
  pt: "Descubra o fascinante mundo dos memes na Tralalero Tralala Wiki. Seu guia completo da cultura da internet, tendências virais e momentos hilários. Junte-se à nossa comunidade hoje!",
  fr: "Découvrez le monde fascinant des mèmes sur Tralalero Tralala Wiki. Votre guide complet de la culture Internet, des tendances virales et des moments hilarants. Rejoignez notre communauté!",
  ru: "Откройте для себя увлекательный мир мемов на Тралалеро Тралала Вики. Ваш полный путеводитель по интернет-культуре, вирусным трендам и забавным моментам. Присоединяйтесь!",
  "zh-cn": "在 Tralalero Tralala 维基探索迷人的梗世界。这里是你了解互联网文化、病毒趋势和欢乐时刻的完整指南。今天就加入我们的社区！",
  ja: "トゥララレロ トゥララーラ ウィキで魅力的なミームの世界を発見しましょう。インターネット文化、バイラルトレンド、面白い瞬間の完全ガイド。今すぐコミュニティに参加！"
};

export const X_ACCOUNT: string | Multilingual = "@psephopaiktes";

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
	en: "This page is not available in your language.",
	es: "Esta página no está disponible en tu idioma.",
	ar: "هذه الصفحة غير متوفرة بلغتك.",
	pt: "Esta página não está disponível no seu idioma.",
	fr: "Cette page n'est pas disponible dans votre langue.",
	ru: "Эта страница недоступна на вашем языке.",
	"zh-cn": "此页面不支持您的语言。",
	ja: "このページはご利用の言語でご覧いただけません。",
};
