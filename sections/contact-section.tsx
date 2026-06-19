"use client";

import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", smsConsent: false });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "", smsConsent: false });
    } else {
      const data = await res.json();
      setErrorMsg(data.error || "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full relative px-5 md:px-10 py-16"
    >
      <div className="mx-5 md:mx-10 relative max-w-5xl w-full">
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

        <div className="text-center py-16">
          <span className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground">
            Reach Out To Us
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-4 mt-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium max-w-3xl mx-auto">
            Ready to make a difference? Contact our team to be a part of the LCR Transportation family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-4">
          {/* Email */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 4.125H3A1.125 1.125 0 0 0 1.875 5.25V18a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 22.125 18V5.25A1.125 1.125 0 0 0 21 4.125m-2.892 2.25L12 11.974 5.892 6.375zM4.125 17.625V7.808l7.115 6.522a1.125 1.125 0 0 0 1.52 0l7.115-6.522v9.817z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Support</h3>
            <p className="text-muted-foreground mb-4">Our team responds promptly to all inquiries.</p>
            <a href="mailto:info@lcrtransportationinc.com" className="text-primary hover:underline font-medium">
              info@lcrtransportationinc.com
            </a>
          </div>

          {/* Address */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.875 19.125H21.75V9.309a1.125 1.125 0 0 0-.375-2.184h-3.75V4.809a1.125 1.125 0 0 0-.375-2.184H3.75a1.125 1.125 0 0 0-.375 2.184v14.316H2.25a1.125 1.125 0 1 0 0 2.25h20.625a1.125 1.125 0 1 0 0-2.25M19.5 9.375v9.75h-1.875v-9.75zm-13.875-4.5h9.75v14.25h-1.5V15a1.125 1.125 0 0 0-1.125-1.125h-4.5A1.125 1.125 0 0 0 7.125 15v4.125h-1.5zm6 14.25h-2.25v-3h2.25zM6.75 7.5a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 0 1 0 2.25h-.75A1.125 1.125 0 0 1 6.75 7.5m4.5 0a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 0 1 0 2.25h-.75A1.125 1.125 0 0 1 11.25 7.5m-4.5 3.75a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 1 1 0 2.25h-.75A1.125 1.125 0 0 1 6.75 11.25m4.5 0a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 1 1 0 2.25h-.75a1.125 1.125 0 0 1-1.125-1.125" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Visit Our Office</h3>
            <p className="text-muted-foreground mb-4">Located in Palatine, Illinois.</p>
            <span className="text-primary font-medium">
              722 E Constitution Dr<br />
              Palatine, IL 60074
            </span>
          </div>

          {/* Phone */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m19 13.513-4.415-1.98-.017-.007a1.87 1.87 0 0 0-1.886.243l-2.091 1.781c-1.22-.66-2.478-1.91-3.14-3.113l1.787-2.125q.043-.051.08-.108a1.88 1.88 0 0 0 .148-1.782L7.488 2A1.88 1.88 0 0 0 5.539.89 5.65 5.65 0 0 0 .625 6.5c0 7.651 6.224 13.875 13.875 13.875a5.65 5.65 0 0 0 5.61-4.914A1.88 1.88 0 0 0 19 13.513m-4.5 4.612A11.64 11.64 0 0 1 2.875 6.5a3.4 3.4 0 0 1 2.67-3.332l1.764 3.938-1.796 2.14q-.044.051-.08.108a1.88 1.88 0 0 0-.12 1.841c.883 1.808 2.702 3.615 4.529 4.5a1.88 1.88 0 0 0 1.845-.136q.055-.036.105-.08l2.102-1.787 3.938 1.763a3.4 3.4 0 0 1-3.332 2.67" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Call Us Directly</h3>
            <p className="text-muted-foreground mb-4">Available during business hours.</p>
            <a href="tel:847-305-4537" className="text-primary hover:underline font-medium">
              (847) 305-4537
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 border border-border rounded-2xl p-8">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground mb-6">We received your message and will get back to you shortly.</p>
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-2 border border-border rounded-lg text-sm hover:bg-primary/10 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium">Full Name <span className="text-primary">*</span></label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium">Email Address <span className="text-primary">*</span></label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number <span className="text-muted-foreground text-xs">(optional)</span></label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div className="flex items-start gap-3 md:col-span-2">
                  <input
                    id="smsConsent"
                    type="checkbox"
                    checked={form.smsConsent}
                    onChange={e => setForm(f => ({ ...f, smsConsent: e.target.checked }))}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border border-border accent-primary cursor-pointer"
                  />
                  <label htmlFor="smsConsent" className="text-xs text-muted-foreground cursor-pointer">
                    By providing your phone number, you consent to receive SMS messages from LCR Transportation Inc. Message and data rates may apply. Reply STOP to opt out at any time.
                  </label>
                </div>

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium">Message <span className="text-primary">*</span></label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="md:col-span-2 text-sm text-red-500">{errorMsg}</p>
                )}

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
