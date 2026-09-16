import React from 'react';
import { X, Calendar, Clock, UserCheck, ShieldCheck, AlertTriangle, ArrowRight, Share2, BookOpen } from 'lucide-react';
import { HealthArticle } from '../types';

interface ArticleDetailModalProps {
  article: HealthArticle | null;
  isOpen: boolean;
  onClose: () => void;
  onFindSpecialist: (specialtyId: string) => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  isOpen,
  onClose,
  onFindSpecialist,
}) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A1628]/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0F2648] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-300" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Behter Ellaj Health Library • {article.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6 flex-1 text-slate-800">
          
          {/* Article Title & Metadata */}
          <div className="space-y-3 pb-4 border-b border-slate-200">
            <span className="inline-block px-3 py-1 bg-blue-50 text-[#1E60D5] text-xs font-semibold rounded-full">
              {article.category}
            </span>
            <h1 className="text-xl sm:text-3xl font-extrabold text-[#0F2648] leading-tight">
              {article.title}
            </h1>

            {/* Author and Reviewer Strip (E-E-A-T) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="space-y-0.5">
                <span className="text-slate-500 block text-[11px]">Written by:</span>
                <strong className="text-slate-800 font-semibold">{article.author}</strong>
                <p className="text-[11px] text-slate-500">{article.authorRole}</p>
              </div>
              <div className="space-y-0.5 border-t sm:border-t-0 sm:border-l sm:pl-3 border-slate-200 pt-2 sm:pt-0">
                <span className="text-emerald-700 font-bold flex items-center gap-1 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Medically Reviewed By:
                </span>
                <strong className="text-slate-900 font-semibold">{article.medicalReviewer}</strong>
                <p className="text-[11px] text-slate-500">{article.reviewerCredentials}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Published: {article.publishedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>
            </div>
          </div>

          {/* Article Banner Image */}
          <div className="h-56 sm:h-72 w-full rounded-xl overflow-hidden shadow-xs border border-slate-200">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Table of Contents */}
          <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl space-y-2">
            <strong className="text-xs font-bold text-[#0F2648] uppercase tracking-wider block">
              Article Contents & Key Takeaways
            </strong>
            <ul className="text-xs space-y-1.5 text-slate-700">
              {article.contentSections.map((sec, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E60D5]" />
                  <span>{sec.heading}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 text-sm leading-relaxed text-slate-700">
            <p className="text-base font-medium text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-200">
              {article.summary}
            </p>

            {article.contentSections.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-lg font-bold text-[#0F2648]">{sec.heading}</h3>
                <p className="text-slate-700 leading-relaxed text-sm">{sec.body}</p>
              </div>
            ))}
          </div>

          {/* Medical Disclaimer Callout */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-xs text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="font-bold block">Medical Editorial Disclaimer</strong>
              <p className="text-amber-800 leading-normal">
                This content is curated exclusively for educational and health awareness purposes. It should not be used as a substitute for clinical diagnosis, personalized medical advice, or professional treatment. Always consult a PMDC-certified physician for individual health conditions.
              </p>
            </div>
          </div>

        </div>

        {/* Persistent Footer CTA */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 px-6 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-600 hidden sm:block">
            Need consultation for this condition?
          </div>
          <div className="flex gap-2 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onFindSpecialist(article.relatedSpecialty);
              }}
              className="px-5 py-2 bg-[#1E60D5] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
            >
              Find a Specialist
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
