function WhyMe() {
  return (
    <div className="mt-[50px] z-10 flex flex-col items-center justify-center gap-5 text-center md:py-10 lg:pt-32">
      <p className="text-2xl font-bold"> Why Choose Me?!</p>
      <div className="grid justify-between grid-cols-1 gap-5 md:grid-cols-3">
        <Reason
          title="Predictable Pricing"
          description={
            "No surprises here! Choose a plan that works for you and pay the same amount every month.          "
          }
          icon="reports-icon.svg"
        />
        <Reason
          title="Fast Turnaround"
          description={
            "Don't waste time searching for an agency or the right freelancer. Get work done in days, not in weeks."
          }
          icon="fast-icon.svg"
        />
        <Reason
          title="Dependable & Flexible"
          description={
            "No surprises here! Choose a plan that works for you and pay the same amount every month."
          }
          icon="location-icon.svg"
        />
      </div>
    </div>
  );
}

function Reason({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <img className="w-12 border-0" src={`/assets/${icon}`} alt="" />
      <p className="text-xl">{title}</p>
      <p className="text-bg">{description}</p>
    </div>
  );
}

export default WhyMe;
