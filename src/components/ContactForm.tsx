"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

export default function ContactForm({
  interest,
  onInterestChange,
}: {
  interest: string;
  onInterestChange: (value: string) => void;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [draft, setDraft] = useState("");
  const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const configured = Boolean(service && template && publicKey);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!configured) {
      const body = `Hi CoreScene,\n\nI'm interested in: ${interest}.\n\n${data.get("message")}\n\n${data.get("user_name")}\n${data.get("user_email")}\n${data.get("website") || ""}`;
      setDraft(
        `mailto:hello@corescene.com?subject=${encodeURIComponent(`Let's talk — ${interest}`)}&body=${encodeURIComponent(body)}`,
      );
      return;
    }
    setStatus("sending");
    try {
      await emailjs.sendForm(service!, template!, form, {
        publicKey: publicKey!,
      });
      setStatus("success");
      form.reset();
      onInterestChange("Not sure yet");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={submit}
      onChange={() => {
        if (draft) setDraft("");
        if (status !== "sending") setStatus("idle");
      }}
    >
      <div className="form-row">
        <label>
          Your name
          <input
            required
            name="user_name"
            autoComplete="name"
            placeholder="Alex Morgan"
            maxLength={120}
          />
        </label>
        <label>
          Email address
          <input
            required
            type="email"
            name="user_email"
            autoComplete="email"
            placeholder="alex@yourbusiness.com"
            maxLength={200}
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Website <span className="optional">(optional)</span>
          <input
            name="website"
            placeholder="yourbusiness.com"
            autoComplete="url"
            maxLength={300}
          />
        </label>
        <label>
          I’m interested in
          <select
            name="interest"
            value={interest}
            onChange={(event) => onInterestChange(event.target.value)}
          >
            <option>Not sure yet</option>
            <option>Signal — diagnostic</option>
            <option>Launch — system build</option>
            <option>Orbit — ongoing improvement</option>
          </select>
        </label>
      </div>
      <label>
        What’s getting in your way?
        <textarea
          name="message"
          required
          rows={4}
          maxLength={4000}
          placeholder="The work you keep repeating. The leads that go quiet. The idea you haven’t found time for."
        />
      </label>
      <p className="form-note">
        We’ll use these details to respond to your enquiry.{" "}
        <Link href="/privacy-policy">Privacy policy</Link>
      </p>
      <button
        type="submit"
        className="primary-button"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Sending your enquiry…"
          : configured
            ? "Start a conversation"
            : "Prepare email enquiry"}
        <FiArrowUpRight aria-hidden="true" />
      </button>
      {!configured && !draft && (
        <p className="form-note">
          Prepare your message here, then send it through your email app.
        </p>
      )}
      <div aria-live="polite">
        {draft && (
          <div className="form-feedback">
            <p>
              Your draft is ready. Open it in your email app and send it when
              you’re ready.
            </p>
            <a className="text-link" href={draft}>
              Open email draft <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        )}
        {status === "success" && (
          <p className="form-feedback">
            <FiCheck aria-hidden="true" /> Thanks. Your enquiry has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="form-feedback">
            Your message could not be sent. Please try again or email{" "}
            <a href="mailto:hello@corescene.com">hello@corescene.com</a>.
          </p>
        )}
      </div>
    </form>
  );
}
