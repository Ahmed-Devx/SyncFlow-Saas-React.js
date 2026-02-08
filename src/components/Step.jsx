import Stepsbg from "../assets/Steps.jpg";
const Step = () => {
  return (
    // Alignment fix: px-6 md:px-16 lg:px-24
    <section className="text-gray-600 body-font px-6 md:px-16 lg:px-24 bg-gray-50/50">
      <div className="container py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          {/* Left Side: Steps */}
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-10">
              Get started in minutes
            </h1>

            {/* Step 1 */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-indigo-100 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider uppercase">
                  Step 1: Secure Signup
                </h2>
                <p className="leading-relaxed">
                  Create your account with enterprise-grade security. No credit
                  card required to start.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-indigo-100 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider uppercase">
                  Step 2: Sync Your Workflow
                </h2>
                <p className="leading-relaxed">
                  Connect your existing tools like Slack, Jira, and GitHub in
                  just a few clicks.
                </p>
              </div>
            </div>

            {/* Step 3 (Finish) */}
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-12 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider uppercase">
                  Final: Optimize & Scale
                </h2>
                <p className="leading-relaxed">
                  Track performance in real-time and scale your team without the
                  administrative chaos.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image/Mockup */}
          <div className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-2xl overflow-hidden mt-12 md:mt-0 shadow-2xl">
            <img
              className="w-full h-full object-cover"
              src={Stepsbg}
              alt="Dashboard Preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
