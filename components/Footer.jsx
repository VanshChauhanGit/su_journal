"use client";
import Link from "next/link";
import { Facebook, Twitter, Youtube, Link as LinkIcon, FacebookIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-600 to-blue-700 text-white pt-10 ">
      <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/20 pb-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <div className="flex space-x-3 mb-4">
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white/40"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white/40"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white/40"
            >
              <Youtube size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white/40"
            >
              <LinkIcon size={18} />
            </a>
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/faqs">FAQ&apos;s</Link>
            </li>
            <li>
              <Link href="/sitemap">Site-map</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Journal Contents */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Journal Contents</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/current-issue">Current Issue</Link>
            </li>
            <li>
              <Link href="/archive">Archive Issues</Link>
            </li>
            <li>
              <Link href="/special-issues">Special Issues</Link>
            </li>
            <li>
              <Link href="/awards">Best Paper Awards</Link>
            </li>
            <li>
              <Link href="/certificate/regular">
                Regular Publication e-Certificate
              </Link>
            </li>
            <li>
              <Link href="/certificate/special">
                Special Publication e-Certificate
              </Link>
            </li>
          </ul>
        </div>

        {/* Downloads */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Downloads</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/downloads/template">IJNJB Template</Link>
            </li>
            <li>
              <Link href="/downloads/copyright">Copyright Form</Link>
            </li>
            <li>
              <Link href="/downloads/originality">Originality Certificate</Link>
            </li>
          </ul>
          <h4 className="font-semibold text-lg mt-4 mb-2">Subscription Fee</h4>
          <Link href="/subscription" className="text-sm block">
            Subscription Fee
          </Link>
        </div>

        {/* For Authors & Reviewers */}
        <div>
          <h3 className="font-semibold text-lg mb-3">
            For Authors & Reviewers
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/guidelines/authors">Author Guidelines</Link>
            </li>
            <li>
              <Link href="/guidelines/reviewers">Reviewer Guidelines</Link>
            </li>
            <li>
              <Link href="/peer-review">Peer Review Process</Link>
            </li>
            <li>
              <Link href="/ethics">Ethics & Malpractice</Link>
            </li>
            <li>
              <Link href="/research-areas">Research Areas</Link>
            </li>
            <li>
              <Link href="/policies/correction">Correction Policy</Link>
            </li>
            <li>
              <Link href="/policies/plagiarism">Plagiarism Policy</Link>
            </li>
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
