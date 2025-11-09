export type TNumber = {
  id: number;
  title: string;
  number: string;
};

export type TContactUs = {
  id: number;
  title: string;
  introduction: string;
  address: string;
  location: string;
  numbers: TNumber[];
};

export type TContactUsSubjectListForm = {
  id: number;
  title: string;
};
