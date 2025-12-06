"use client";

import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchData();
  }, []);

  const reset = () => {
    setFormData({ name: "", number: "", email: "", message: "" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    try {
      const formBody = new URLSearchParams(formData).toString();

      const response = await fetch(
        "https://formsubmit.co/ajax/pokhrelrubina2061@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody,
        }
      );

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        reset();
      } else {
        console.error("Failed to send message", data);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="no-print bg-white">
      <div className="container mx-auto px-4">
        <div className="py-16  max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-3">
                Let's Connect
              </h2>
              <div className="h-1.5 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-full"></div>
            </div>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-x-12">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-slate-200/50 p-8  border border-slate-200 ">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="flex gap-2 text-sm font-semibold text-slate-700"
                      >
                        Full Name
                        <span className="text-primary">*</span>
                      </label>
                      <input
                        required
                        className="w-full p-2 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white text-slate-900 placeholder-slate-400"
                        id="name"
                        name="name"
                        placeholder="Rubina Pokhrel"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="number"
                        className="flex gap-2 text-sm font-semibold text-slate-700"
                      >
                        Phone Number
                        <span className="text-primary">*</span>
                      </label>
                      <input
                        required
                        className="w-full p-2 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white text-slate-900 placeholder-slate-400"
                        id="number"
                        type="tel"
                        name="number"
                        placeholder="+977 9862122655"
                        value={formData.number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="flex gap-2 text-sm font-semibold text-slate-700"
                    >
                      Email Address
                      <span className="text-primary">*</span>
                    </label>
                    <input
                      required
                      className="w-full p-2 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white text-slate-900 placeholder-slate-400"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="pokhrelrubina2061@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="flex gap-2 text-sm font-semibold text-slate-700"
                    >
                      Your Message
                      <span className="text-primary">*</span>
                    </label>
                    <textarea
                      required
                      className="w-full p-2 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white text-slate-900 placeholder-slate-400 resize-none"
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                    />
                  </div>

                  {/* Success message */}
                  {submitted && (
                    <div className="flex items-center gap-3 p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl">
                      <div className="flex-shrink-0">
                        <Image
                          src={getImgPath("/images/icon/success-icon.svg")}
                          alt="success"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-emerald-700 font-medium">
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-md cursor-pointer hover:bg-primary/80 focus:outline-none disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Connect With Me
                </h3>
                <div className="space-y-3 mb-6">
                  {contactData?.socialLinks?.map(
                    (social: any, index: number) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 bg-slate-50 hover:bg-primary/5 rounded-xl border border-slate-200 hover:border-primary/50 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-100">
                            <Image
                              src={social.icon}
                              alt={social.platform}
                              width={20}
                              height={20}
                              className="w-5 h-5"
                            />
                          </div>
                          <span className="text-slate-700 font-medium group-hover:text-primary">
                            {social.platform}
                          </span>
                        </div>
                        <svg
                          className="w-4 h-4 text-slate-400 group-hover:text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    )
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Get In Touch
                </h3>
                <div className="space-y-3">
                  {contactData?.contactItems?.map((value: any, index: any) => (
                    <Link
                      key={index}
                      href={value?.link}
                      target="_blank"
                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-primary/5 rounded-xl border border-slate-200 hover:border-primary/50 group"
                    >
                      <span className="text-slate-700 font-medium group-hover:text-primary">
                        {value?.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
