export type TSocialMedia = {
  id: number;
  title: string;
  logo: string;
  links: {
    id: number;
    link: string
    in_footer: boolean;
    in_header: boolean;
    in_contact: boolean;
  }[];
};
