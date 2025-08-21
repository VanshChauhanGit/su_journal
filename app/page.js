import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-2 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-teal-700 text-2xl font-bold mb-4">
              NICE Journal of Business
            </h2>
            <div className="flex flex-col md:flex-row gap-8 text-justify">
              <div>
                <p className="mb-4">
                  <span className="font-semibold">
                    NICE Journal of Business
                  </span>{" "}
                  is a half-yearly journal, earlier published by NICE Management
                  College, Meerut, and now brought out by the School of Business
                  Studies, Shobhit University, Meerut. It provides a platform to
                  research scholars, practising managers, and academicians in
                  business management, commerce, economics, and allied fields,
                  to present their research findings and share their views and
                  experiences.
                </p>
                <p className="mb-4">
                  The Journal aims at disseminating research output and
                  providing information about recent developments in the
                  relevant fields, by way of research articles, book reviews,
                  Ph.D. thesis abstracts, case studies, and bibliographies, on
                  topics related to business and allied areas. It is listed in{" "}
                  <span className="italic">
                    Cabell&rsquo;s Management Directory
                  </span>{" "}
                  (USA), and is included in{" "}
                  <span className="italic">EBSCO&rsquo;s Database</span> and in{" "}
                  <span className="italic">
                    Ulrich&rsquo;s Directory of Periodicals
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Original contributions received for publication in the Journal
                  are subjected to a blind review, by experts in the relevant
                  field.
                </p>
                <p className="mb-4">
                  Shobhit University holds the copyright of the articles and
                  other material published in the{" "}
                  <span className="font-semibold">
                    NICE Journal of Business
                  </span>
                  . No part of the journal may be reproduced or transmitted in
                  any form, by any means, electronic or mechanical, including
                  photocopying, recording, or by information storage or
                  retrieval system, without the prior permission of the
                  Editor/Publisher.
                </p>
              </div>

              <Image
                src="/images/home-img.jpg"
                alt="NICE Journal of Business Cover"
                width={400}
                height={310}
                className="object-contain rounded"
              />
            </div>

            <p className="mb-4 text-justify">
              There is no submission or processing fee from the
              authors/contributors.
            </p>
            <p className="mb-4 text-justify">
              <span className="font-semibold">Policy on Complaints</span> about
              its content: Any complaint regarding the violation of copyright,
              plagiarism, misinformation, error, or inaccuracy, in any article,
              or other contents will receive prompt attention of the Editor of
              the Journal. It will be our endeavour to resolve such a complaint
              expeditiously. Readers are welcome to send their comments on any
              article or other piece published in the Journal.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
