import PriceCard from "./PriceCard";

const Pricing = () => {
  const plans = [
    {
      plan: "Start",
      price: "Free",
      features: ["1 User", "5GB Storage", "Basic Support"],
      isPopular: false,
    },
    {
      plan: "Pro",
      price: "38",
      features: [
        "10 Users",
        "50GB Storage",
        "Priority Support",
        "Advanced Analytics",
      ],
      isPopular: true,
    },
    {
      plan: "Business",
      price: "56",
      features: [
        "Unlimited Users",
        "100GB Storage",
        "Custom Domain",
        "24/7 Support",
      ],
      isPopular: false,
    },
    {
      plan: "Special",
      price: "72",
      features: [
        "Enterprise Tools",
        "Unlimited Everything",
        "Dedicated Manager",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden bg-gray-50/50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-2 text-gray-900">
            Simple, Transparent Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Choose the plan that's right for your business growth.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {plans.map((p, i) => (
            <PriceCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
