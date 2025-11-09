import { TFaq } from "./Faq";

export type TCategory = {
    id: number
    title: string;
    slug: string;
    image: string;
    father: TCategory | null;
    children: TCategory[];
    faqs: TFaq[];
    meta_title: string;
    meta_keywords: string;
    meta_description: string;
    canonical_tag: string;
    content: string;
}