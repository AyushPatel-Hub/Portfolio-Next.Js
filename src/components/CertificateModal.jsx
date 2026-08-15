"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function CertificateModal({ certificate, onClose }) {
  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-black shadow-lg"
        >
          ×
        </button>

        {/* Certificate */}
        <Image
          src={certificate.certificateUrl}
          alt={certificate.title}
          width={1200}
          height={800}
          className="max-h-[90vh] w-auto rounded-lg object-contain"
        />
      </div>
    </div>
  );
}