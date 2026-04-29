import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="font-serif-display text-3xl text-ink">Saath</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">साथ · together</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              A neighbourhood chemist and sexual health clinic. Doctor-led, plainly packaged, made with care.
            </p>
            <p className="mt-6 text-sm text-ink">Clinics in Mumbai · New Delhi</p>
            <p className="text-sm text-ink-soft">More cities launching soon</p>
            <p className="mt-4 text-sm text-ink-soft">
              <span className="text-ink">Shipping</span> across all Indian states.
            </p>
          </div>

          <div>
            <h4 className="font-serif-display text-sm text-ink">Clinic</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li><a href="/#services" className="hover:text-ink">Services</a></li>
              <li><a href="/#visit" className="hover:text-ink">Book a visit</a></li>
              <li><a href="/#clinic" className="hover:text-ink">Find us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-display text-sm text-ink">Pharmacy</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li><a href="/#shop" className="hover:text-ink">ED care</a></li>
              <li><a href="/#shop" className="hover:text-ink">Protection</a></li>
              <li><a href="/#shop" className="hover:text-ink">Daily wellness</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-display text-sm text-ink">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li><Link to="/careers" className="hover:text-ink">Careers</Link></li>
              <li><Link to="/franchise" className="hover:text-ink">Franchise</Link></li>
              <li><a href="#" className="hover:text-ink">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-display text-sm text-ink">Legal</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li><a href="#" className="hover:text-ink">Privacy</a></li>
              <li><a href="#" className="hover:text-ink">Terms</a></li>
              <li><a href="#" className="hover:text-ink">Shipping</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Saath Wellness Pvt. Ltd. · saathyours.com</p>
          <p>Made quietly, in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
