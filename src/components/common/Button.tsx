import { twMerge } from "tailwind-merge";
import A from "./A";

function Button({
  children,
  action,
  className,
  link,
}: {
  action?: () => void;
  className?: string;
  children: string;
  link?: string | undefined;
}) {
  return (
    <A className="bg-none" href={link}>
      <button
        className={twMerge("p-2 font-semibold", className)}
        onClick={action}
      >
        {children}
      </button>
    </A>
  );
}
export default Button;
