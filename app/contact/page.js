export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#14294A] py-20 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-[#14294A] mb-6 text-center">Contact Us</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#14294A]"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#14294A]"
            required
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#14294A]"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-[#14294A] text-white font-bold py-2 rounded-lg hover:bg-blue-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
