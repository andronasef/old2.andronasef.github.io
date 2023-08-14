import Button from "../../common/Button";

function HowItWorks() {
  return (
    <div className="grid items-center justify-center grid-cols-1 gap-5 text-left md:grid-cols-2 justify-items-center ">
      <img className="border-0 w-96" src="assets/how-it-works.png" alt="" />
      <div className="flex flex-col items-center gap-3 md:items-start">
        <p className="text-2xl font-bold">How it works?</p>
        <div className="flex flex-col gap-2 ">
          <Step
            number={1}
            title="Get in touch and share project specifics with me."
          />
          <Step
            number={2}
            title="We'll collaborate to plan the project effectively."
          />
          <Step
            number={3}
            title="Sit back as I bring your project to life seamlessly. "
          />
        </div>
        <Button link="/contact" style="self-start p-2">
          Let’s Work Together!
        </Button>
      </div>
    </div>
  );
}

function Step({ title, number }: { title: string; number: number }) {
  return (
    <div className="flex gap-2">
      <p>{number}.</p>
      <p>{title}</p>
    </div>
  );
}

export default HowItWorks;
