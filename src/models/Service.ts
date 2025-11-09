import { TCategory } from "./Category";
import { TFaq } from "./Faq";

export type TService = {
  id: number;
  category: TCategory;
  gallery: { id: number; image: string }[];
  faqs: TFaq[];
  related_services: TService[];
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  canonical_tag: string;
  title: string;
  slug: string;
  image: string;
  introduction: string;
  content: string;
};

export type TServiceList = {
  next: number | null;
  previous: number | null;
  count: number;
  page_count: number;
  results: TService[];
};

export type TServicePage = {
  id: number;
  faqs: TFaq[];
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  canonical_tag: string;
  content: string;
};
