"use client";
import { useState } from "react";
import SendButton from "@/ui/Buttons/Send";
import toast from "react-hot-toast";
import axios from "axios";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.length === 0) {
      toast.error("ایمیلی وارد نشده!!!");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("ایمیل وارد شده معتبر نیست");
      return;
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}core/newsletter`, {
        email: email,
      });
      toast.success("درخواست شما با موفقیت انجام شد");
      setEmail("");
    } catch (err) {
      console.error(err);
      toast.error("درخواست شما با مشکل مواجه شد!!!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full w-full"
    >
      <span className="text-h3 text-background mr-5">
        از آخرین اخبار قطعه پوشش چمران با خبر شوید.
      </span>
      <div className="grid grid-cols-4 bg-background-subtle border-[1.5px] border-border rounded-[10px] w-[300px] mt-6 lg:mt-0 p-1">
        <input
          className="col-span-3 outline-none py-1 px-3 placeholder:text-text-secondary text-link"
          placeholder="آدرس ایمیل خود را وارد کنید"
          type="email"
          name="email"
          id="newsletter-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="col-span-1 w-full h-[47px]">
          <SendButton radius={10} />
        </div>
      </div>
    </form>
  );
};

export default NewsLetter;
