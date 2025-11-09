"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

type Values = {
  name: string;
  email: string;
  subject: string;
  message: string;
  service?: number;
};

type Errors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function useContactForm(serviceId?: number) {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    subject: "",
    message: "",
    service: serviceId || 0,
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => {
      const newErrors = { ...prev };
      if (name === "name")
        newErrors.name = value.trim() ? "" : "نام خود را وارد کنید";
      if (name === "email")
        newErrors.email = emailRegex.test(value) ? "" : "ایمیل معتبر نیست";
      if (name === "subject")
        newErrors.subject = value ? "" : "موضوع را انتخاب کنید";
      if (name === "message")
        newErrors.message = value.trim() ? "" : "پیام خود را وارد کنید";
      return newErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Errors = {};
    if (!values.name.trim()) newErrors.name = "نام خود را وارد کنید";
    if (!values.email.trim() || !emailRegex.test(values.email))
      newErrors.email = "ایمیل معتبر نیست";
    if (!values.subject) newErrors.subject = "موضوع را انتخاب کنید";
    if (!values.message.trim()) newErrors.message = "پیام خود را وارد کنید";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}core/contact_form`,
        {
          name: values.name,
          email: values.email,
          text: values.message,
          subject: values.subject,
          service: values.service || undefined,
        }
      );
      setValues({ name: "", email: "", subject: "", message: "", service: 0 });
      toast.success("درخواست با موفقیت ثبت شد");
    } catch (err) {
      console.error(err);
      toast.error("درخواست شما با مشکل مواجه شد!!!");
    }
  };

  return { values, errors, handleChange, handleSubmit };
}
