"use client";
import useContactForm from "@/hooks/useContactForm";
import TitleLine from "@/components/Layout/TitleLine";
import SendButton from "@/ui/Buttons/Send";
import { TContactUsSubjectListForm } from "@/models/ContactUs";

const ContactForm = ({
  subjectList,
  serviceId,
}: {
  subjectList: TContactUsSubjectListForm[];
  serviceId?: number;
}) => {
  const { values, errors, handleChange, handleSubmit } =
    useContactForm(serviceId);
  return (
    <>
      <TitleLine data={{ title: "فرم تماس با ما ", size: "small" }} />
      <form
        className="border-[2px] border-border mt-4 lg:mt-5 p-6 lg:p-8 rounded-[15px] lg:rounded-[25px]"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
          <div className="col-span-1 flex flex-col">
            <span className="text-primary text-body mr-2">نام شما</span>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className={`p-2 focus:outline-none border-b-[2.5px] ${
                errors.name
                  ? "border-b-primary"
                  : values.name.trim()
                  ? "border-b-primary"
                  : "border-b-border"
              } focus:border-b-primary placeholder:text-text-secondary text-h4`}
              placeholder="نام خود را وارد کنید"
            />
            {errors.name && (
              <span className="text-primary text-sm mt-1">{errors.name}</span>
            )}
          </div>
          <div className="col-span-1 flex flex-col">
            <span className="text-primary text-body mr-2">ایمیل</span>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={`p-2 focus:outline-none border-b-[2.5px] ${
                errors.email
                  ? "border-b-primary"
                  : values.email.trim()
                  ? "border-b-primary"
                  : "border-b-border"
              } focus:border-b-primary placeholder:text-text-secondary text-h4`}
              placeholder="ایمیل خود را وارد کنید"
            />
            {errors.email && (
              <span className="text-primary text-sm mt-1">{errors.email}</span>
            )}
          </div>
          <div className="col-span-1 flex flex-col">
            <span className="text-primary text-body">موضوع</span>
            <select
              name="subject"
              value={values.subject}
              onChange={handleChange}
              className={`mt-2 px-4 py-1 w-full h-10 text-button rounded-[5px] outline-none
                ${
                  errors.subject
                    ? "border border-primary"
                    : "border border-border"
                }
                 ${!values.subject ? "text-text-secondary" : "text-button"} 
                bg-border [appearance:none] bg-no-repeat bg-[position:left_16px_center]
                bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEwIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTkgMS43MDA5M0w1IDUuNzAwOTNMMSAxLjcwMDkzIiBzdHJva2U9IiM2Qzc1N0QiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPg==')]  
                `}
            >
              <option className="text-text-secondary" value="">
                یک موضوع را انتخاب کنید
              </option>
              {subjectList?.map((item, i) => (
                <option key={i} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
            {errors.subject && (
              <span className="text-primary text-sm mt-1">
                {errors.subject}
              </span>
            )}
          </div>
        </div>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          className={`mt-6 lg:mt-8 px-4 lg:px-6 py-2 lg:py-4 h outline-none bg-background-subtle text-h4 w-full h-[180px] lg:h-[230px] rounded-[10px] border-dashed border-[2.5px] ${
            errors.message
              ? "border-primary"
              : values.message.trim()
              ? "border-primary"
              : "border-border"
          } resize-none placeholder:text-text-secondary`}
          placeholder="پیام خود را اینجا وارد نمایید..."
        />
        {errors.message && (
          <span className="text-primary text-sm mt-1">{errors.message}</span>
        )}
        <div className="mt-4 lg:mt-6 w-full lg:w-[128px] h-[45px]">
          <SendButton radius={100} />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
