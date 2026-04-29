import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "No. Walk in any time between 9am and 9pm and we'll see you. If you'd rather skip the wait, you can book a private slot in under a minute — we always honour bookings first.",
  },
  {
    q: "Will anyone in the shop know why I'm here?",
    a: "No. Reception is a single tablet sign-in, no names called out. You wait in a private nook, not a public waiting area, and consultations happen behind a closed door.",
  },
  {
    q: "What kinds of things can I come in for?",
    a: "Erectile dysfunction, premature ejaculation, low libido, painful intercourse, lumps or rashes, STI testing, contraception, fertility questions, menopause and andropause concerns — and anything else you're not sure who to ask.",
  },
  {
    q: "Will the doctor examine me?",
    a: "Only if it's clinically helpful, and only with your consent. Many concerns are handled with a conversation alone. If an examination is needed, a chaperone is always offered.",
  },
  {
    q: "Can I just buy condoms or medication without seeing a doctor?",
    a: "Of course. Our pharmacy counter is open all day for over-the-counter purchases — protection, lubricants, daily wellness — no questions, no forms.",
  },
  {
    q: "How much does a consultation cost?",
    a: "₹ 800 for a standard 20-minute consultation, including any prescription. Follow-ups within 30 days are free. Tests and medication are billed transparently — you'll always see the price before you agree.",
  },
];

const Faq = () => {
  return (
    <section id="learn" className="bg-secondary/40 py-24 md:py-32">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-sage">Quietly answered</p>
          <h2 className="mt-3 font-serif-display text-4xl tracking-tight text-ink md:text-5xl text-balance">
            The questions you'd rather not ask out loud.
          </h2>
          <p className="mt-5 text-ink-soft">
            If yours isn't here, write to us at <a className="underline underline-offset-4" href="mailto:hello@saathyours.com">hello@saathyours.com</a> or call +91 22 4000 1100. We answer everything personally.
          </p>
        </div>
        <div className="md:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-6 text-left font-serif-display text-xl text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[15px] leading-relaxed text-ink-soft">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
