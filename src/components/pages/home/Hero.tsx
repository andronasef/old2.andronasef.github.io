import Button from "../../common/Button";
import Icon from "../../common/Icon";

function Hero() {
  return (
    <div className="h-[calc(100vh-70px)] w-screen flex relative flex-col justify-center items-center [&>img]:absolute [&>img]:border-0">
      <div className="md:max-w-lg p-[15%] md:p-5 flex flex-col items-center justify-center gap-6 [&>*]:text-center mb-20">
        <p className="relative text-3xl md:text-4xl">
          A Dedicated Developer <br /> for your{" "}
          <span className="relative underline">
            Business
            <Icon
              src="/assets/click-icon.svg?raw"
              className="absolute border-0 w-8 md:w-10 top-[60%] -right-[40%]"
            />
          </span>
        </p>
        <p className="text-md">
          Hire a skilled full stack developer to boost sales and cut costs by
          optimizing your digital platforms.
        </p>
        <Button link="/contact">Let’s Work Together! </Button>
      </div>
      <Icon
        className="absolute w-8 top-[10%] md:top-[25%] left-[5%]"
        src={"/assets/2-small-stars.svg"}
      />
      <Icon
        src={"/assets/small-star.svg"}
        className="absolute w-4 bottom-[25%] md:bottom-[35%] right-[5%]"
      />
      <Icon
        src={"/assets/divider-pencil.svg"}
        className="fill-[var(--primary)] -z-50 absolute w-screen rounded-none -bottom-8 sm:bottom-[-3rem] md:bottom-[-8rem]"
      />
    </div>
  );
}
export default Hero;
