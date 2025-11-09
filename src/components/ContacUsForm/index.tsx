import { TContactUsSubjectListForm } from "@/models/ContactUs";
import ContactForm from "./form";
import { fetchContactUsFormList } from "@/lib/data";
import { use } from "react";

const ContactUsForm = ({ id }: { id?: number }) => {
  const subjectList: TContactUsSubjectListForm[] = use(
    fetchContactUsFormList()
  ) as TContactUsSubjectListForm[];
  return <ContactForm subjectList={subjectList} serviceId={id} />;
};

export default ContactUsForm;
