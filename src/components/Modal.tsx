import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-x-4 top-[10%] z-50 mx-auto max-w-4xl bg-white dark:bg-[#1e2330] rounded-lg shadow-xl"
          >
            <div className="relative h-full max-h-[80vh] overflow-y-auto">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 hover:bg-gray-100 dark:hover:bg-[#2a2f3d] rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </button>
              <div className="p-6 pt-12">
                <div className="dark:text-gray-200">
                  {children}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}