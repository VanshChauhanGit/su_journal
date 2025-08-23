import Wrapper from "@/components/Wrapper";
import React from "react";

function page() {
  return (
    <Wrapper>
      <h1 className="text-2xl font-bold text-teal-700 mb-2">
        Menace of Plagiarism
      </h1>

      <p className="mb-4">
        Plagiarism has become a major problem in the path of research and
        publications, and is widespread and going unabated. We often receive
        articles for publication that are either partly or fully copied from
        others’ works, despite the fact the author’s declaration that the
        article is original and is an exclusive contribution to our journal, and
        has also submitted a certificate of cessation of copyright in our
        favour. The dare-devilry is shocking! This is outright deceit and
        cheating. Amusingly, the practice is not confined to Indian authors;
        foreign authors are no exception.
      </p>

      <p className="mb-4">
        We face another problem of a somewhat similar nature, involving
        professional ethics. We spend a lot of effort, time, and money in
        reviewing, short-listing, and editing the article which passes the
        preliminary scrutiny. When asked to make further revisions or supply the
        missing information, some of the authors stop responding to us and
        submit the paper, which has been improved through our efforts, to some
        other journal. They do so despite their having given a declaration that
        the paper is an exclusive contribution to our journal, and shall not be
        withdrawn at a subsequent stage unless rejected/ permitted by the
        Editor, and having ceded the copyright in our favour.
      </p>

      <p className="mb-4">
        It needs no emphasis that plagiarism is not only an unethical practice;
        particularly so for an academician, it is also a violation of the code
        of conduct governing the services of university teachers and research
        scholars. Moreover, it amounts to a criminal offence under the Copyright
        Act, 1957 (which certainly does not grant us a “right to copy”!). Any
        infringement of the copyright under the Act is an offence, punishable
        with imprisonment for a minimum period of six months, extendable up to
        three years, and a fine, ranging from Rs. 50,000 to Rs. 2 lakhs.
      </p>

      <p className="mb-4">
        It is worthwhile to caution such unscrupulous people. Many people have
        already faced disciplinary action, eventually leading to their dismissal
        from service. These include university teachers at all levels—lecturers,
        associate professors, professors (including one in a top Central
        university, one in a top IIM, and one in a State university of Uttar
        Pradesh), and one Vice-Chancellor of a State university. In one case,
        the Vice-Chancellor of a reputed Central University had to face
        imprisonment.
      </p>

      <p className="mb-4">
        Writing a research paper is a demanding as well as rewarding task. A
        person looking for an unearned reward is surely inviting trouble for
        himself and a bad name for the entire academic community.
      </p>

      <p className="mt-8 font-semibold text-right text-yellow-700 italic">
        Editor
      </p>

      <h2 className="text-2xl font-bold mb-6 text-teal-800">
        Subscription Rates
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-center shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-teal-700 text-white">
              <th className="border border-teal-800 px-4 py-3">Subscriber</th>
              <th className="border border-teal-800 px-4 py-3" colSpan={2}>
                1 Year
              </th>
              <th className="border border-teal-800 px-4 py-3" colSpan={2}>
                3 Years
              </th>
            </tr>
            <tr className="bg-teal-200 text-teal-900 font-semibold">
              <th className="border border-teal-800 px-4 py-2"></th>
              <th className="border border-teal-800 px-4 py-2">India</th>
              <th className="border border-teal-800 px-4 py-2">Abroad</th>
              <th className="border border-teal-800 px-4 py-2">India</th>
              <th className="border border-teal-800 px-4 py-2">Abroad</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-teal-50">
              <td className="border border-teal-800 px-4 py-3 font-medium text-teal-900">
                Individual
              </td>
              <td className="border border-teal-800 px-4 py-3">Rs. 800</td>
              <td className="border border-teal-800 px-4 py-3">US$ 80</td>
              <td className="border border-teal-800 px-4 py-3">Rs. 2000</td>
              <td className="border border-teal-800 px-4 py-3">US$ 200</td>
            </tr>
            <tr className="bg-teal-100">
              <td className="border border-teal-800 px-4 py-3 font-medium text-teal-900">
                Institutions*
              </td>
              <td className="border border-teal-800 px-4 py-3">Rs. 1000</td>
              <td className="border border-teal-800 px-4 py-3">US$ 100</td>
              <td className="border border-teal-800 px-4 py-3">Rs. 2500</td>
              <td className="border border-teal-800 px-4 py-3">US$ 250</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}

export default page;
