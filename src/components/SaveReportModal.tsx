import React, { useState } from 'react';
import { X, Save } from 'lucide-react';

interface SaveReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, description?: string) => void;
}

export function SaveReportModal({ isOpen, onClose, onSave }: SaveReportModalProps) {
  const [reportName, setReportName] = useState('');
  const [reportDescription, setReportDescription] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    if (reportName.trim()) {
      onSave(reportName.trim(), reportDescription.trim() || undefined);
      setReportName('');
      setReportDescription('');
      onClose();
    }
  };

  const handleClose = () => {
    setReportName('');
    setReportDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Save Report</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 p-1 rounded"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Report Name *
            </label>
            <input
              type="text"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
              placeholder="Enter report name..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              autoFocus
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description (Optional)
            </label>
            <textarea
              value={reportDescription}
              onChange={(e) => setReportDescription(e.target.value)}
              placeholder="Enter report description..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 p-6 border-t bg-gray-50">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!reportName.trim()}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Save size={16} />
            Save Report
          </button>
        </div>
      </div>
    </div>
  );
}