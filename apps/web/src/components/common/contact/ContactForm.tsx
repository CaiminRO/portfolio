import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { FaTimes } from "react-icons/fa";
import { contactStyles } from "@/styles/components";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(
      object().shape({
        name: string().required("Name is required"),
        email: string()
          .email("Invalid email format")
          .required("Email is required"),
        subject: string().default("Contact Attempt via Portfolio"),
        message: string().required("Message is required"),
      })
    ),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setError("");
        reset();
      } else {
        setError(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setSuccess(false);
      setError("Something went very wrong");
    }
  };

  if (!isOpen) return null;

  return (
    <section className={contactStyles.outer}>
      <div className={contactStyles.mainContainer}>
        <button onClick={onClose} className={contactStyles.buttonClose}>
          <FaTimes size={20} />
        </button>

        <h2 className={contactStyles.formTitle}>Contact Me</h2>

        <form onSubmit={handleSubmit(onSubmit)} className={contactStyles.form}>
          {/* Form Feedback */}
          {success && (
            <p className={contactStyles.topSuccess}>
              Message sent successfully!
            </p>
          )}
          {error && <p className={contactStyles.topError}>{error}</p>}

          {/* Form Fields */}
          <div>
            <label htmlFor="name" className={contactStyles.fieldLabel}>
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className={contactStyles.fieldInput}
            />
            {/* Name Validation */}
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className={contactStyles.fieldLabel}>
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={contactStyles.fieldInput}
            />
            {/* Email Validation */}
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="subject" className={contactStyles.fieldLabel}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject")}
              className={contactStyles.fieldInput}
            />
            {/* Subject Validation */}
            {errors.subject && <p>{errors.subject.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className={contactStyles.fieldLabel}>
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              className={contactStyles.fieldInput}
              rows={4}
            />
            {/* Message Validation */}
            {errors.message && <p>{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={contactStyles.buttonSubmit}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
