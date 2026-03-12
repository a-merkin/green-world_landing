interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  // Primary button: bg-[#4F5E4A], text-[#F0EAE2], Inter Medium 18px
  // Used for: "Заказать", "Узнать больше", "Больше фото"
  return null;
}
