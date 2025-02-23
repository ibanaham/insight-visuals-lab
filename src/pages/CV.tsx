
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

        {/* Skills Section */}
        <section className="py-12">
          <div className="container px-4">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Proficient in leveraging advanced data tools including Python, Power BI, Excel and SQL for business optimization and actionable insights.</li>
              <li>Experienced in managing and analysing large, complex datasets, aligning with performance management frameworks.</li>
              <li>Developed Power BI reports and dashboards for strategic analysis and performance reporting.</li>
              <li>Demonstrated leadership in coordinating resources and managing projects from inception to completion.</li>
              <li>Skilled in stakeholder engagement, understanding data requirements, and delivering insights for decision-making.</li>
              <li>Committed to continuous learning, evidenced by multiple certifications in Microsoft and data analytics.</li>
              <li>Strong analytical skills, capable of translating complex data into clear, actionable insights for senior leadership.</li>
            </ul>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-12 bg-muted">
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
                    "Transform data into reusable analytics assets using Microsoft Fabric components",
                    "Perform ETL tasks and build data models using Python",
                    "Work with large volumes of data and design systems for efficient data processing",
                    "Use Power Automate to automate data processes",
                    "Use Data Engineering principles to build efficient data models in Power BI",
                    "Evaluate and implement tools for data validation and cleansing",
                    "Produce and track key performance indicators",
                    "Use QGIS to create Power BI Shapefiles",
                    "Work with cloud and on-premises data sources",
                    "Document detailed business requirements",
                    "Create interactive dashboards and visualizations",
                    "Use SharePoint for report sharing",
                    "Experience with RLS in Power BI"
                  ]
                },
                {
                  title: "Data Analyst",
                  company: "Southwark Council",
                  period: "September 2021 - August 2023",
                  points: [
                    "Work in the parking sector, analysing APCOA and PayByPhone data for insights",
                    "Develop Power BI reports and dashboards using DAX expressions",
                    "Perform ETL tasks using Python/Power Query M",
                    "Maintain automated data processes",
                    "Evaluate and implement data validation tools",
                    "Create Power BI Shapefiles with QGIS",
                    "Query SQL Server database",
                    "Liaise with clients for requirements",
                    "Create interactive dashboards",
                    "Mine/analyse large datasets"
                  ]
                },
                {
                  title: "Work Coach",
                  company: "Department for Work and Pensions",
                  period: "October 2020 - September 2021",
                  points: [
                    "Provided support for Universal Credit, ESA, and JSA claims",
                    "Offered quality job search advice",
                    "Built positive relationships with customers",
                    "Assisted with the Kickstart Scheme",
                    "Acted as liaison between employers and candidates",
                    "Made timely decisions based on customer needs"
                  ]
                },
                {
                  title: "Cover Teacher",
                  company: "Various Agencies",
                  period: "October 2018 - October 2020",
                  points: [
                    "Adapted to diverse classroom environments",
                    "Employed various instructional techniques",
                    "Managed classroom behavior effectively",
                    "Collaborated with school staff",
                    "Built positive student relationships",
                    "Participated in professional development"
                  ]
                },
                {
                  title: "Creative Design & Innovation Teacher",
                  company: "Ministry of Education",
                  period: "August 2016 - October 2018",
                  points: [
                    "Taught Computer Design Information and technology concepts",
                    "Covered web design and Python programming",
                    "Developed comprehensive lesson plans",
                    "Provided individualized support",
                    "Fostered positive learning environment"
                  ]
                },
                {
                  title: "School Direct Trainee",
                  company: "Sir John Cass's Foundation School",
                  period: "September 2015 - July 2016",
                  points: [
                    "Gained practical teaching experience in Physics",
                    "Developed and delivered lesson plans",
                    "Facilitated interactive activities",
                    "Adapted teaching methods for diverse needs",
                    "Created supportive learning environment"
                  ]
                },
                {
                  title: "Teacher Assistant",
                  company: "Sir John Cass's Foundation School",
                  period: "April 2015 - July 2015",
                  points: [
                    "Supported Science department across Key Stages 3-5",
                    "Assisted with lesson preparation",
                    "Provided one-on-one student support",
                    "Fostered critical thinking skills",
                    "Mentored sixth form students"
                  ]
                },
                {
                  title: "English Language Teacher",
                  company: "King Saud University",
                  period: "September 2013 - July 2014",
                  points: [
                    "Enhanced students' English language proficiency",
                    "Created dynamic lesson plans",
                    "Tailored teaching approaches",
                    "Developed reading, writing, speaking, and listening skills",
                    "Provided individualized feedback and support"
                  ]
                }
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
        <section className="py-12">
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
                  <li>Microsoft Certified: Power Platform App Maker Associate (PL-100)</li>
                  <li>Microsoft Certified: Azure Data Engineer Associate (DP-203)</li>
                  <li>Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)</li>
                  <li>Microsoft Office Specialist: Excel Associate (Microsoft 365 Apps)</li>
                  <li>Microsoft Office Specialist: Excel Expert (Microsoft 365 Apps)</li>
                  <li>Fundamentals of the Databricks Lakehouse Platform Accreditation</li>
                  <li>Data Analyst Level 4 Apprenticeship</li>
                  <li>BCS Level 4 Certificate in Data Analysis Tools</li>
                  <li>BCS Level 4 Diploma in Data Analysis Concepts</li>
                  <li>Qualified Teacher Status</li>
                  <li>Certificate in English Language Teaching to Adults</li>
                  <li>Google: Agile Project Management</li>
                  <li>Data Science Professional, Alliance for Data Science Professionals</li>
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
        <section className="py-12 bg-muted">
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
