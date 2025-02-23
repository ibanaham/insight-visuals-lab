
import { BarChart2, Database, BookOpen } from 'lucide-react';

const services = [
  {
    icon: BarChart2,
    title: "Dashboard Development",
    description: "Custom Power BI dashboards that transform your raw data into actionable insights."
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamless integration of multiple data sources for comprehensive business intelligence."
  },
  {
    icon: BookOpen,
    title: "Power BI Training",
    description: "Expert training to help your team master Power BI and unlock its full potential."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Services</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Comprehensive data solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card p-6 group">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
