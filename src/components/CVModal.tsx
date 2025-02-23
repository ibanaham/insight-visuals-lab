
import { X } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in"
         onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-11/12 h-[90vh] max-w-4xl relative"
           onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-8 h-full overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">Hamid Banafunzi</h2>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-3">Professional Summary</h3>
              <p>Experienced Power BI consultant with expertise in data analytics and visualization.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Power BI Development</li>
                <li>Data Analysis</li>
                <li>SQL</li>
                <li>Data Modeling</li>
                <li>DAX</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Power BI Consultant | The Statistics Lab</h4>
                  <p className="text-sm text-muted-foreground">2020 - Present</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Developed custom Power BI solutions for clients</li>
                    <li>Provided training and support</li>
                    <li>Optimized data models and reports</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <div>
                <h4 className="font-semibold">BSc in Data Science</h4>
                <p className="text-sm text-muted-foreground">University Example, 2020</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
