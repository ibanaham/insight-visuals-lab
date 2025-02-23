
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container px-4 py-32">
        <div className="text-center space-y-6 animate-fade-up">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold rounded-full bg-secondary/10 text-secondary">
            Power BI Consultant
          </div>
          
          <h1 className="hero-title font-heading">
            Turning Data into
            <span className="text-secondary"> Insights</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            Helping businesses unlock the power of their data through expert Power BI consultancy,
            dashboard development, and automation solutions.
          </p>
          
          <div className="flex items-center justify-center space-x-4 pt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-muted transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-muted transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@example.com"
               className="p-2 rounded-full hover:bg-muted transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
