
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

const CV = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container px-4">
            <h1 className="text-4xl font-bold mb-4">Hamid Banafunzi, GradStat</h1>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📍 London, UK</p>
              <p>📧 hamidbanafunzi@hotmail.co.uk</p>
              <p>📱 +44 7563090345</p>
            </div>
          </div>
        </section>

        {/* Background Section */}
        <section className="py-12 bg-muted">
          <div className="container px-4">
            <h2 className="text-2xl font-semibold mb-4">Background</h2>
            <p className="text-foreground/80">
              Data-driven Analyst with a significant track record in leveraging advanced data tools, including Power BI and Excel, for optimizing business performance. Exhibits proficiency in Power Query M and DAX, alongside intermediate Excel skills, adept in using pivot tables, building charts, and employing various formulas for effective data manipulation and analysis. Committed to translating complex data into actionable insights and dedicated to continuous learning. Demonstrates expertise in Power BI and experience building scripts using Python, with a strong ability to guide projects from inception to completion, facilitating data-driven decisions and operational efficiency.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12">
          <div className="container px-4">
            <h2 className="text-2xl font-semibold mb-6">Key Skills</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card p-4">
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Proficient in Python, Power BI, Excel and SQL</li>
                  <li>Large dataset management and analysis</li>
                  <li>Power BI report and dashboard development</li>
                </ul>
              </div>
              <div className="card p-4">
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Stakeholder engagement</li>
                  <li>Project management</li>
                  <li>Data visualization and insights</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-12 bg-muted">
          <div className="container px-4">
            <h2 className="text-2xl font-semibold mb-8">Work Experience</h2>
            <div className="space-y-12">
              {/* Timeline Item */}
              <div className="relative pl-8 border-l-2 border-secondary">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
                <div className="card p-6">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>August 2023 - Present</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Data Insight and Performance Analyst</h3>
                  <p className="text-foreground/70 mb-4">Southwark Council</p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>Analyse APCOA and PayByPhone data for insights</li>
                    <li>Develop Power BI reports using DAX and SQL</li>
                    <li>Design and maintain data systems using Microsoft Fabric</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-secondary">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
                <div className="card p-6">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>September 2021 - August 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Data Analyst</h3>
                  <p className="text-foreground/70 mb-4">Southwark Council</p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>Developed Power BI reports and dashboards</li>
                    <li>Performed ETL tasks using Python/Power Query M</li>
                    <li>Created geospatial analysis using QGIS</li>
                  </ul>
                </div>
              </div>

              {/* Add more timeline items for previous roles */}
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-12">
          <div className="container px-4">
            <h2 className="text-2xl font-semibold mb-6">Education & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">MEng in Aerospace Engineering</p>
                    <p className="text-sm text-foreground/70">Queen Mary University of London (1st Class Hons)</p>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-semibold">Certifications</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Microsoft Certified: Power BI Data Analyst Associate</li>
                  <li>Microsoft Certified: Azure Data Engineer Associate</li>
                  <li>Microsoft Certified: Fabric Analytics Engineer Associate</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CV;
