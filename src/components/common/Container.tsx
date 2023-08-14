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
        "container flex flex-col gap-10 px-5 md:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}
export default Container;
