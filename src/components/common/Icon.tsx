import { twMerge } from "tailwind-merge";

function Icon({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      className={twMerge("icon border-0 w-7 rounded-none", className)}
    />
  );
}
export default Icon;
