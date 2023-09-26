import { twMerge } from "tailwind-merge";

function IconButton({
  src,
  className,
  imgClass,
  action,
}: {
  action?: () => void;
  src: string;
  className?: string;
  imgClass?: string;
}) {
  return (
    <button className={twMerge("border-0 w-8", className)} onClick={action}>
      <img src={src} className={twMerge("border-0 rounded-none", imgClass)} />
    </button>
  );
}
export default IconButton;
