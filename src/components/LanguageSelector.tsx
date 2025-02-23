
import { useState, createContext, useContext } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from '../lib/translations';

export const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => {}
});

export const useLanguage = () => useContext(LanguageContext);

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'ar', name: 'العربية' },
  { code: 'sw', name: 'Kiswahili' },
  { code: 'fr', name: 'Français' }
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-muted transition-colors flex items-center gap-2"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm hidden md:inline">{languages.find(l => l.code === language)?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-2 text-left hover:bg-muted transition-colors ${
                language === lang.code ? 'text-secondary font-medium' : ''
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
