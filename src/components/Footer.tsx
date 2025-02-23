
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">The Statistics Lab</h3>
            <p className="text-primary-foreground/80 text-sm">
              Transforming data into actionable insights through expert Power BI consultancy.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground">Home</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground">Services</a></li>
              <li><a href="#portfolio" className="text-primary-foreground/80 hover:text-primary-foreground">Portfolio</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Dashboard Development</li>
              <li className="text-primary-foreground/80">Data Integration</li>
              <li className="text-primary-foreground/80">Power BI Training</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com"
                 className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} The Statistics Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
