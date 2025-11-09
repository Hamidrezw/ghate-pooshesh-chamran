const SocialMediaIcon = ({ logo }: { logo: string }) => {
  return (
    <div
      className="w-5 h-5 bg-current"
      style={{
        WebkitMask: `url(${
          process.env.NEXT_PUBLIC_SERVER_URL + logo
        }) no-repeat center`,
        mask: `url(${
          process.env.NEXT_PUBLIC_SERVER_URL + logo
        }) no-repeat center`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
};

export default SocialMediaIcon;
