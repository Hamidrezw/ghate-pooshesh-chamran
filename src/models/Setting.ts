import { TSocialMedia } from "./SocialMedia";

export type TSetting = {
  id: number;
  headerSocials: TSocialMedia[];
  footerSocials: TSocialMedia[];
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  canonical_tag: string;
  content: string;
  home_about_us: string;
  footer_about_us: string;
  header_number: string;
  footer_number: string;
  sticky_number: string;
  sticky_whatsapp: string;
  address: string;
  location: string;
};
