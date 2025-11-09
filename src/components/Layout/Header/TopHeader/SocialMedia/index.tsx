"use client";
import { fetchSocialMedia } from "@/lib/data";
import { TSocialMedia } from "@/models/SocialMedia";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialMediaIcon from "./SocialIcon";

const SocialMedia = ({ place }: { place: "header" | "footer" | "contact" }) => {
  const [socialMedia, setSocialMedia] = useState<TSocialMedia[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data: TSocialMedia[] = (await fetchSocialMedia({
          in_header: place === "header",
          in_footer: place === "footer",
          in_contact: place === "contact",
        })) as TSocialMedia[];
        setSocialMedia(data);
      } catch (err) {
        console.error(`error fetching ${place} social media`, err);
      }
    };
    loadData();
  }, [place]);

  return (
    <div className="flex gap-4">
      {socialMedia?.map((data) =>
        data?.links?.map((item) => (
          <Link href={item?.link} key={item?.id} rel="nofollow" target="_blank">
            <div
              className={`${
                place === "contact" ? "text-text-primary" : "text-background"
              }`}
            >
              <SocialMediaIcon logo={data?.logo} />
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default SocialMedia;
