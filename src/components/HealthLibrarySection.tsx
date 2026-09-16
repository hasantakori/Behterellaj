import React from 'react';
import { HEALTH_ARTICLES } from '../data/healthcareData';
import { HealthArticle, Language } from '../types';
import { translations } from './UrduTranslations';
import { BookOpen, ShieldCheck, Clock, Calendar, ArrowRight } from 'lucide-react';

interface HealthLibrarySectionProps {
  onReadArticle: (article: HealthArticle) => void;
  onViewAllArticles: () => void;
  currentLang: Language;
}

export const HealthLibrarySection: React.FC<HealthLibrarySectionProps> = ({
  onReadArticle,
  onViewAllArticles,
  currentLang,
}) => {
  const t = translations[currentLang];

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80" id="health-library-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-bold text-[#1E60D5] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full">
              Medically Reviewed Guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2648]">
              {t.libraryTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6B7A]">
              {t.librarySubtitle}
            </p>
          </div>

          <button
            onClick={onViewAllArticles}
            className="text-xs sm:text-sm font-bold text-[#1E60D5] hover:text-blue-800 flex items-center gap-1.5 self-start md:self-auto group"
          >
            <span>Explore All Health Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HEALTH_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              {/* Article Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#0F2648]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {article.category}
                </span>
              </div>

              {/* Article Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3
                    onClick={() => onReadArticle(article)}
                    className="font-bold text-sm sm:text-base text-[#0F2648] hover:text-[#1E60D5] cursor-pointer transition-colors leading-snug line-clamp-2"
                  >
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-3">
                  {/* Medical Reviewer Badge */}
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">
                      Reviewed by <strong>{article.medicalReviewer}</strong>
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    <button
                      onClick={() => onReadArticle(article)}
                      className="font-bold text-xs text-[#1E60D5] hover:text-blue-800 flex items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
