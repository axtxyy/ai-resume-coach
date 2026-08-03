type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md bg-black px-6 py-3 text-white transition hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;