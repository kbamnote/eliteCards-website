import React from "react";
import { Github, X, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-400 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Elite Digital Cards</p>

        <div className="flex items-center gap-4">
          {/* X (Twitter) */}
          <a
            className="hover:text-white transition"
            href="https://x.com/Elitedigit70454"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <X className="w-5 h-5" />
          </a>

          {/* Email */}
          <a
            className="hover:text-white transition"
            href="mailto:info@eliteassociate.in"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}