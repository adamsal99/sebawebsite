import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" aria-label="SEBA home">
          <img src={logo} alt="SEBA Consulting logo" className="h-8 w-auto" />
        </a>
        <p className="text-sm text-muted-foreground font-body">
          © 2025 SEBA. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Home</a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Services</a>
          <a href="/contact-us" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
