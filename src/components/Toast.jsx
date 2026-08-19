import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export const Toast = ({ toast, onClose }) => {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.9 }}
        className="fixed top-24 right-4 md:right-8 z-50 max-w-md w-full"
      >
        <div
          className={`flex items-start gap-3 p-4 rounded-xl shadow-2xl border ${
            isSuccess
              ? 'bg-haven-navy text-white border-haven-gold/40 shadow-haven-gold/10'
              : 'bg-red-950 text-white border-red-500/40 shadow-red-900/20'
          }`}
        >
          {isSuccess ? (
            <CheckCircle2 className="w-6 h-6 text-haven-gold shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
          )}

          <div className="flex-1 text-sm">
            <h4 className="font-semibold text-base font-heading mb-0.5 text-haven-gold">
              {isSuccess ? 'Enquiry Submitted' : 'Validation Alert'}
            </h4>
            <p className="text-slate-200 leading-snug">{toast.message}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
