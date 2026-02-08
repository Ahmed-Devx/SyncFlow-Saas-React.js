const Contact = () => {
  return (
    <section
      id="contact"
      className="text-gray-600 body-font relative px-6 md:px-16 lg:px-24"
    >
      <div className="container py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-2xl overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-inner">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder={0}
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=San+Francisco+(SyncFlow)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.5)" }}
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded-xl shadow-xl w-full">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs uppercase">
                HQ Address
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                123 Innovation Way, Tech Suite 500, San Francisco, CA 94103
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 border-l border-gray-100">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs uppercase">
                Email
              </h2>
              <a className="text-indigo-600 leading-relaxed text-sm font-medium hover:underline cursor-pointer">
                hello@syncflow.io
              </a>
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs mt-4 uppercase">
                Phone
              </h2>
              <p className="leading-relaxed text-sm">+1 (555) 000-FLOW</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-3xl mb-1 font-bold title-font">
            Let's Talk
          </h2>
          <p className="leading-relaxed mb-5 text-gray-500">
            Have a question about our enterprise plans? Send us a message and
            our team will get back to you within 24 hours.
          </p>

          <div className="relative mb-4">
            <label
              htmlFor="name"
              className="leading-7 text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 text-base outline-none text-gray-700 py-2 px-4 transition-all duration-200"
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm font-medium text-gray-700"
            >
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@company.com"
              className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 text-base outline-none text-gray-700 py-2 px-4 transition-all duration-200"
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm font-medium text-gray-700"
            >
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-all duration-200"
              defaultValue={""}
            />
          </div>

          <button className="text-white bg-indigo-600 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-700 rounded-lg text-lg font-bold shadow-lg shadow-indigo-200 transition-all active:scale-95">
            Send Message
          </button>

          <p className="text-xs text-gray-400 mt-3 text-center">
            By clicking send, you agree to our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
