
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar } from 'lucide-react';

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
              <p>📱 +44 7563090365</p>
              <p>🌍 Nationality: British</p>
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

        {/* Experience Timeline */}
        <section className="py-12">
          <div className="container px-4">
            <h2 className="text-2xl font-semibold mb-8">Work Experience</h2>
            <div className="space-y-12">
              {[
                {
                  title: "Data Insight and Performance Analyst",
                  company: "Southwark Council",
                  period: "August 2023 - Present",
                  points: [
                    "Work in the parking sector, analysing APCOA and PayByPhone data for insights",
                    "Develop Power BI reports and dashboards using DAX expressions and query data using SQL",
                    "Perform ETL tasks on APCOA and PayByPhone data using dataflows and Power Query M",
                    "Design, build, and maintain data systems using Microsoft Fabric platform",
                    // ... Add all points from your CV
                  ]
                },
                {
                  title: "Data Analyst",
                  company: "Southwark Council",
                  period: "September 2021 - August 2023",
                  points: [
                    "Work in the parking sector, analysing APCOA and PayByPhone data for insights",
                    "Develop Power BI reports and dashboards using DAX expressions",
                    "Perform ETL tasks on APCOA and PayByPhone data using Python/Power Query M",
                    // ... Add all points
                  ]
                },
                // ... Add all other positions
              ].map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-secondary">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
                  <div className="card p-6">
                    <div className="flex items-center gap-2 text-secondary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{job.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-foreground/70 mb-4">{job.company}</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      {job.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-12 bg-muted">
          <div className="container px-4">
            <h2 className="text-2xl font-semibold mb-6">Qualifications & Certifications</h2>
            <div className="grid gap-6">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>MEng in Aerospace Engineering, Queen Mary University of London (1st Class Hons)</li>
                  <li>A-Level Mathematics (B)</li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4">Professional Certifications</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Microsoft Certified: Power Platform Fundamentals (PL-900)</li>
                  <li>Microsoft Certified: Azure Data Fundamentals (DP-900)</li>
                  <li>Microsoft Certified: Power BI Data Analyst Associate (PL-300/DA-100)</li>
                  <li>Microsoft Certified: Azure Enterprise Data Analyst Associate (DP-500)</li>
                  {/* Add all certifications */}
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4">Community & Professional Memberships</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Community Badges</h4>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      <li>Super User Alumni in the Power BI community</li>
                      <li>Super User in the Power Apps community</li>
                      <li>Super User in the Power Automate community</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Memberships</h4>
                    <p className="text-foreground/80">Royal Statistical Society - GradStat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Checks */}
        <section className="py-12">
          <div className="container px-4">
            <h2 className="text-2xl font-semibold mb-4">Security Checks</h2>
            <div className="card p-6">
              <p className="text-foreground/80">DBS: Enhanced Certificate</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CV;
