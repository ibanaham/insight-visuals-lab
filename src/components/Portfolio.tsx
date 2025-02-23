
import { ExternalLink } from 'lucide-react';

const reports = [
  {
    title: "Call Center Insights",
    description: "Interactive dashboard analyzing call center performance metrics, customer satisfaction, and agent productivity.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjk3ZTBlMGMtYjE4OC00OGZjLWJiMTctMmM5NTM1ZDVhMDQ3IiwidCI6IjRjMGZmZmQ0LTFhYTUtNGQ0OS04MTg5LTNmMjE3ODM1MDdkZSJ9"
  },
  {
    title: "Sales Performance Dashboard",
    description: "Comprehensive sales analytics tracking revenue, trends, and key performance indicators across multiple regions.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjk3ZTBlMGMtYjE4OC00OGZjLWJiMTctMmM5NTM1ZDVhMDQ3IiwidCI6IjRjMGZmZmQ0LTFhYTUtNGQ0OS04MTg5LTNmMjE3ODM1MDdkZSJ9"
  },
  {
    title: "Financial Analytics",
    description: "Deep dive into financial metrics, budget tracking, and forecasting for strategic decision making.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjk3ZTBlMGMtYjE4OC00OGZjLWJiMTctMmM5NTM1ZDVhMDQ3IiwidCI6IjRjMGZmZmQ0LTFhYTUtNGQ0OS04MTg5LTNmMjE3ODM1MDdkZSJ9"
  },
  {
    title: "HR Analytics Dashboard",
    description: "Employee performance metrics, retention analysis, and workforce planning insights.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjk3ZTBlMGMtYjE4OC00OGZjLWJiMTctMmM5NTM1ZDVhMDQ3IiwidCI6IjRjMGZmZmQ0LTFhYTUtNGQ0OS04MTg5LTNmMjE3ODM1MDdkZSJ9"
  },
  {
    title: "Supply Chain Metrics",
    description: "End-to-end supply chain visibility with inventory management and logistics tracking.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjk3ZTBlMGMtYjE4OC00OGZjLWJiMTctMmM5NTM1ZDVhMDQ3IiwidCI6IjRjMGZmZmQ0LTFhYTUtNGQ0OS04MTg5LTNmMjE3ODM1MDdkZSJ9"
  },
  {
    title: "Marketing Campaign Analysis",
    description: "ROI tracking, campaign performance metrics, and customer engagement analytics.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjk3ZTBlMGMtYjE4OC00OGZjLWJiMTctMmM5NTM1ZDVhMDQ3IiwidCI6IjRjMGZmZmQ0LTFhYTUtNGQ0OS04MTg5LTNmMjE3ODM1MDdkZSJ9"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Portfolio</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Explore my interactive Power BI reports showcasing real-world data insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-lg mb-2">{report.title}</h3>
                <p className="text-sm text-foreground/70">{report.description}</p>
              </div>
              <div className="aspect-video">
                <iframe
                  title={report.title}
                  src={report.embedUrl}
                  className="w-full h-full border-none"
                  allowFullScreen
                />
              </div>
              <div className="p-4 flex justify-end">
                <a href={report.embedUrl} target="_blank" rel="noopener noreferrer"
                   className="p-2 hover:bg-muted rounded-full transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
