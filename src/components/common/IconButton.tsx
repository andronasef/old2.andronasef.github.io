import { twMerge } from "tailwind-merge";
import Button from "./Button";

function IconButton({
  src,
  buttonClass,
  imgClass,
}: {
  src: string;
  buttonClass?: string;
  imgClass?: string;
}) {
  return (
    <button className={twMerge("border-0 w-8", buttonClass)}>
      <img src={src} className={twMerge("border-0 rounded-none", imgClass)} />
    </button>
  );
}
export default IconButton;
