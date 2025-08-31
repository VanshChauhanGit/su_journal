"use client";
import Link from "next/link";
import { footerContent } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-600 to-blue-700 text-white pt-10 ">
      <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/20 pb-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">
            {footerContent.quickLinks.title}
          </h3>
          <div className="flex space-x-3 mb-4">
            {footerContent.quickLinks.social.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                className="p-2 bg-white/20 rounded-full hover:bg-white/40"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <ul className="space-y-2 text-sm">
            {footerContent.quickLinks.links.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Journal Contents */}
        <div>
          <h3 className="font-semibold text-lg mb-3">
            {footerContent.journal.title}
          </h3>
          <ul className="space-y-2 text-sm">
            {footerContent.journal.links.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Downloads */}
        <div>
          <h3 className="font-semibold text-lg mb-3">
            {footerContent.downloads.title}
          </h3>
          <ul className="space-y-2 text-sm">
            {footerContent.downloads.links.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <h4 className="font-semibold text-lg mt-4 mb-2">
            {footerContent.downloads.extra.title}
          </h4>
          <Link
            href={footerContent.downloads.extra.link.href}
            className="text-sm block"
          >
            {footerContent.downloads.extra.link.label}
          </Link>
        </div>

        {/* For Authors & Reviewers */}
        <div>
          <h3 className="font-semibold text-lg mb-3">
            {footerContent.authors.title}
          </h3>
          <ul className="space-y-2 text-sm">
            {footerContent.authors.links.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center py-4 text-sm">
        <p>
          Copyright © {new Date().getFullYear()} - Present All Rights Reserved
          <br />
        </p>
      </div>
    </footer>
  );
}
