import React from 'react'
import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-400 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Elite Digital Cards</p>
        <div className="flex items-center gap-4">
          <h1>hi</h1>
          <a className="hover:text-white" href="#" aria-label="Github">
            <Github className="w-5 h-5" />
          </a>
          <a className="hover:text-white" href="#" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a className="hover:text-white" href="mailto:info@eliteassociate.in" aria-label="Mail">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}