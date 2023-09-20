import Button from "../../common/Button";

function CTA() {
  return (
    <div className="text-center center min-h-[300px] p-10 py-[50px] bg-[var(--primary)]  text-white mt-10 w-full">
      <div className="flex-col gap-5 center md:max-w-lg">
        <p className="text-2xl font-bold">
          Have Projects in Your Mind? <br /> Let’s Work Together
        </p>
        <p>
          Ready to see your projects come alive? Let's team up and turn your
          ideas into reality. Reach out now, and let's get started on crafting
          something remarkable together.
        </p>
        <Button link="/contact" style="border-white">
          Let’s Start Your Project
        </Button>
      </div>
    </div>
  );
}
export default CTA;
