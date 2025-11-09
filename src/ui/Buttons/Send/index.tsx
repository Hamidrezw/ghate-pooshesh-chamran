const SendButton = ({ radius }: { radius: number }) => {
  return (
    <button
      type="submit"
      className="w-full h-full text-button text-background bg-primary hover:bg-primary-dark flex items-center justify-center transition-all duration-300 cursor-pointer select-none"
      style={{ borderRadius: `${radius}px` }}
    >
      ارسال
    </button>
  );
};

export default SendButton;
