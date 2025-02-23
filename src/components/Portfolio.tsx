
import { ExternalLink } from 'lucide-react';

const reports = [
  {
    title: "Call Center Insights",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjk3ZTBlMGMtYjE4OC00OGZjLWJiMTctMmM5NTM1ZDVhMDQ3IiwidCI6IjRjMGZmZmQ0LTFhYTUtNGQ0OS04MTg5LTNmMjE3ODM1MDdkZSJ9"
  },
  {
    title: "Sales Performance",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjk3ZTBlMGMtYjE4OC00OGZjLWJiMTctMmM5NTM1ZDVhMDQ3IiwidCI6IjRjMGZmZmQ0LTFhYTUtNGQ0OS04MTg5LTNmMjE3ODM1MDdkZSJ9"
  },
  {
    title: "Customer Analytics",
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
              <div className="aspect-video">
                <iframe
                  title={report.title}
                  src={report.embedUrl}
                  className="w-full h-full border-none"
                  allowFullScreen
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-semibold">{report.title}</h3>
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
