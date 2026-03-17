import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactForm } from "@/hooks/useQueries";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Division } from "../backend.d";

const divisionOptions: { label: string; value: Division }[] = [
  {
    label: "Agricultural Imports/Exports",
    value: { __kind__: "other", other: "Agricultural Imports/Exports" },
  },
  {
    label: "Carbo Bricks",
    value: { __kind__: "other", other: "Carbo Bricks" },
  },
  { label: "Dates Trading", value: { __kind__: "trading", trading: null } },
  {
    label: "Pharmacy Chains",
    value: { __kind__: "other", other: "Pharmacy Chains" },
  },
  {
    label: "Wellness Products",
    value: { __kind__: "wellness", wellness: null },
  },
  {
    label: "General Inquiry",
    value: { __kind__: "other", other: "General Inquiry" },
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const mutation = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const divisionOption = divisionOptions.find(
      (d) => d.label === form.subject,
    );
    if (!divisionOption) return;
    await mutation.mutateAsync({
      name: form.name,
      email: form.email,
      phone: form.phone,
      subject: divisionOption.value,
      message: form.message,
    });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold font-sans font-semibold text-sm tracking-widest uppercase mb-3">
            Reach Out
          </span>
          <h2 className="font-display font-black text-navy text-4xl md:text-5xl leading-tight">
            Let's Build Something
            <br />
            <span className="text-gold">Together</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg mt-4 max-w-2xl mx-auto">
            Whether you're a buyer, supplier, investor, or patient — we'd love
            to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-navy rounded-2xl p-8 shadow-navy text-white">
              <h3 className="font-display font-bold text-xl mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-sm text-white/90 mb-0.5">
                      Head Office
                    </p>
                    <p className="font-sans text-sm text-white/60 leading-relaxed">
                      Tower One, Business Bay
                      <br />
                      Dubai, United Arab Emirates
                      <br />
                      P.O. Box 12345
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-sm text-white/90 mb-0.5">
                      Phone
                    </p>
                    <p className="font-sans text-sm text-white/60">
                      +971 4 000 0000
                    </p>
                    <p className="font-sans text-sm text-white/60">
                      +971 50 000 0000
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-sm text-white/90 mb-0.5">
                      Email
                    </p>
                    <p className="font-sans text-sm text-white/60">
                      info@globaltradecorp.com
                    </p>
                    <p className="font-sans text-sm text-white/60">
                      trade@globaltradecorp.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-sm text-white/90 mb-0.5">
                      Business Hours
                    </p>
                    <p className="font-sans text-sm text-white/60">
                      Mon – Fri: 9:00 AM – 6:00 PM
                    </p>
                    <p className="font-sans text-sm text-white/60">
                      Sat: 9:00 AM – 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional offices */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
              <h4 className="font-display font-bold text-navy text-base mb-4">
                Regional Offices
              </h4>
              {[
                { city: "Mumbai, India", role: "South Asia Hub" },
                { city: "Nairobi, Kenya", role: "Africa Operations" },
                { city: "London, UK", role: "European Liaison" },
              ].map((office) => (
                <div
                  key={office.city}
                  className="flex justify-between items-center py-2 border-b border-border last:border-0"
                >
                  <span className="font-sans font-semibold text-sm text-foreground">
                    {office.city}
                  </span>
                  <span className="font-sans text-xs text-muted-foreground">
                    {office.role}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <AnimatePresence mode="wait">
                {mutation.isSuccess ? (
                  <motion.div
                    key="success"
                    data-ocid="contact.success_state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-navy text-2xl">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground font-sans text-base max-w-xs">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => mutation.reset()}
                      className="mt-2 text-sm font-sans text-gold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor="contact-name"
                          className="font-sans font-medium text-sm text-foreground"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="contact-name"
                          data-ocid="contact.name.input"
                          placeholder="John Smith"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, name: e.target.value }))
                          }
                          className="border-border focus:ring-ring font-sans"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor="contact-email"
                          className="font-sans font-medium text-sm text-foreground"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="contact-email"
                          data-ocid="contact.email.input"
                          type="email"
                          placeholder="john@company.com"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, email: e.target.value }))
                          }
                          className="border-border focus:ring-ring font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor="contact-phone"
                          className="font-sans font-medium text-sm text-foreground"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="contact-phone"
                          data-ocid="contact.phone.input"
                          type="tel"
                          placeholder="+971 50 000 0000"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, phone: e.target.value }))
                          }
                          className="border-border focus:ring-ring font-sans"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label className="font-sans font-medium text-sm text-foreground">
                          Division / Subject *
                        </Label>
                        <Select
                          required
                          value={form.subject}
                          onValueChange={(v) =>
                            setForm((p) => ({ ...p, subject: v }))
                          }
                        >
                          <SelectTrigger
                            data-ocid="contact.subject.select"
                            className="font-sans"
                          >
                            <SelectValue placeholder="Select a division" />
                          </SelectTrigger>
                          <SelectContent>
                            {divisionOptions.map((opt) => (
                              <SelectItem
                                key={opt.label}
                                value={opt.label}
                                className="font-sans"
                              >
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="contact-message"
                        className="font-sans font-medium text-sm text-foreground"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="contact-message"
                        data-ocid="contact.message.textarea"
                        placeholder="Tell us how we can help you..."
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                        className="border-border focus:ring-ring font-sans resize-none"
                      />
                    </div>

                    {mutation.isError && (
                      <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                        <p className="text-destructive font-sans text-sm">
                          Something went wrong. Please try again.
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      data-ocid="contact.submit_button"
                      disabled={mutation.isPending || !form.subject}
                      className="bg-navy text-white hover:bg-navy-light font-display font-bold text-base py-3 h-auto transition-all duration-200 shadow-navy"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 size={16} className="mr-2 animate-spin" />{" "}
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
