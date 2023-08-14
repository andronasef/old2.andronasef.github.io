import { twMerge } from "tailwind-merge";

function Button({
  children,
  action,
  style,
  link,
}: {
  action?: () => void;
  style?: string;
  children: string;
  link?: string;
}) {
  return (
    <a className="bg-none" href={link}>
      <button className={twMerge("p-2", style)} onClick={action}>
        {children}
      </button>
    </a>
  );
}
export default Button;
