"use client";
import Link from "next/link";
import { footerContent } from "../constants";
import { Globe } from "lucide-react";

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
          <div className="w-full h-36">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892699.4636080405!2d76.5582275390625!3d29.072974690644934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6fb077e3ead9%3A0x47077e27598160!2sShobhit%20Deemed%20University!5e0!3m2!1sen!2sin!4v1757259686005!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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
        <p className="mb-2 text-lg flex items-center justify-center gap-1">
          Developed by{" "}
          <Link
            href={"https://linkedin.com/in/vanshchauhan0"}
            target="_blank"
            className="font-semibold hover:underline"
          >
            Vansh Chauhan
          </Link>
          <Link
            href={"https://vansh-chauhan.netlify.app"}
            target="_blank"
            className="hover:font-semibold"
          >
            <Globe size={16} />
          </Link>
          &
          <Link
            href={"https://www.linkedin.com/in/vipul-sharma-44665a235/"}
            target="_blank"
            className="font-semibold hover:underline"
          >
            Vipul Sharma
          </Link>
        </p>
        <p>
          Copyright © {new Date().getFullYear()} Shobhit University
          <br />
        </p>
      </div>
    </footer>
  );
}
