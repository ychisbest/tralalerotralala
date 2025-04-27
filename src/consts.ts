// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Multilingual } from "@/i18n";
import { shorthash } from "astro/runtime/server/shorthash.js";

//meme wiki site
export const SITE_TITLE: string | Multilingual = {
  en: "Tralalero Tralala Wiki - Expain the tralalero tralala meaning",
  es: "Tralalero Tralala Wiki - Explica el significado de tralalero tralala",
  ar: "ترالاليرو ترالالا ويكي - توضيح معنى ترالاليرو ترالالا",
  pt: "Tralalero Tralala Wiki - Explica o significado de tralalero tralala",
  fr: "Tralalero Tralala Wiki - Explique le sens de tralalero tralala",
  ru: "Тралалеро Тралала Вики - Объясните значение tralalero tralala",
  "zh-cn": "Tralalero Tralala 维基 - 解释 tralalero tralala 的含义",
  
};

export const SITE_TITLE_SHORT = "Tralalero Tralala Wiki";

export const SITE_DESCRIPTION: string | Multilingual =  {
  en: "Discover the meaning behind Tralalero Tralala - the viral TikTok meme featuring a three-legged shark in Nike shoes. Learn about its origins, cultural impact and community lore.",
  es: "Descubre el significado de Tralalero Tralala - el meme viral de TikTok que presenta un tiburón de tres patas con zapatos Nike. Conoce sus orígenes, impacto cultural y tradición comunitaria.",
  ar: "اكتشف معنى ترالاليرو ترالالا - الميم الفيروسي على تيك توك الذي يصور سمكة قرش بثلاث أرجل ترتدي أحذية نايكي. تعرف على أصوله وتأثيره الثقافي وتراثه المجتمعي.",
  pt: "Descubra o significado de Tralalero Tralala - o meme viral do TikTok com um tubarão de três pernas usando tênis Nike. Conheça suas origens, impacto cultural e tradição da comunidade.",
  fr: "Découvrez la signification de Tralalero Tralala - le mème viral TikTok mettant en scène un requin à trois pattes portant des chaussures Nike. Apprenez ses origines, son impact culturel et son histoire communautaire.",
  ru: "Узнайте значение Тралалеро Тралала - вирусного мема из TikTok с трехногой акулой в кроссовках Nike. Узнайте о его происхождении, культурном влиянии и истории сообщества.",
  "zh-cn": "探索 Tralalero Tralala 的含义 - TikTok 上穿着耐克鞋的三条腿鲨鱼病毒式传播的梗。了解其起源、文化影响和社区传说。",
  ja: "Tralalero Tralalaの意味を探る - ナイキのシューズを履いた三本足のサメが特徴のTikTokウイルスミーム。その起源、文化的影響、コミュニティの伝説について学ぶ。"

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
