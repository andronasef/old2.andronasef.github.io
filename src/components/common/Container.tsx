import { twMerge } from "tailwind-merge";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-10 px-5 md:px-10 max-w-7xl w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
export default Container;
