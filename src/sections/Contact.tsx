function Contact() {
  return (
    <div id="contact" className="py-16 max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between flex-col md:flex-row">
        <div>
          <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/50">
            Get in <span className="text-sky-300">touch</span>
          </h2>
          <a
            href="mailto:john@doe.com"
            className="md:text-7xl text-4xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-sky-300 transition duration-300"
          >
            john@doe.com
          </a>
        </div>
        <div className="text-white/50 mt-12">
          <div className="mb-8">
            <p className="text-lg mb-1">Phone</p>
            <a
              href="tel:+990788979999"
              className="text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-sky-300 transition duration-300"
            >
              +99 (0) 78 897 9999
            </a>
          </div>
          <div className="text-lg mb-8">
            <p className="font-bold">Office</p>
            <p>Street 98 9897</p>
            <p>Berlin</p>
            <p>Germany</p>
          </div>
        </div>
      </div>
      <form
        id="form"
        method="post"
        action="https://getform.io/f/akkyewza"
        className="max-w-[1200px] mx-auto flex flex-wrap justify-between"
      >
        <div className="md:w-[48%] w-full px-12 space-y-7">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-sky-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-200"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-sky-300 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What is this about?"
              required
              className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-200"
            />
          </div>
        </div>
        <div className="w-full md:w-[48%] px-12 mt-6 md:mt-0">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-sky-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            required
            placeholder="Your message here..."
            className="w-full px-4 py-3 bg-transparent border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-200 border"
          />
        </div>
        <div className="w-full md:w-[48%] px-12 mt-6 md:mt-4 md:text-right">
          <button
            type="submit"
            className="inline-block w-16 h-16 bg-transparent border border-sky-400 text-sky-400 font-medium rounded-lg hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            →
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
