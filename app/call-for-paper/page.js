import JournalCard from "@/components/JournalCard";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <Wrapper>
      <JournalCard />
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-teal-700">Call for Papers</h1>
        <hr className="border-t border-teal-700 my-2" />

        <div>
          <p className="text-gray-700">
            IJCSE solicits original or unpublished research papers/articles,
            review articles, and survey papers to our upcoming Edition issue.
          </p>
          <p className="text-gray-700 mb-2">
            Authors are cordially invited to submit their original or
            unpublished, experimental, theoretical research paper through the
            Online Submission procedure available at our website. It is a step
            easy and fast process of submission which will give rapid processing
            to your submitted articles. To submit the manuscript through the
            online procedure, please register yourself by filling a simple
            registration form and enjoy the benefits of our services.
          </p>

          <Link
            href="/login"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-1 py-0.5 rounded-full"
          >
            Online Submission
          </Link>

          <p className="text-gray-700 mt-2">
            All the submitted papers are first reviewed at the editorial board
            level and assessed on the basis of their technical suitability for
            the journal, scope of work, and plagiarism. If selected by the
            editorial board, the paper shall be subjected to a fair and unbiased
            double-blind peer review by at least two referees on the basis of
            their originality, novelty, clarity, completeness, relevance,
            significance and research contribution. The review process may take
            02 to 04 weeks depending upon the cycles of review required before
            the paper is finally accepted. Please refer to Authors Guidelines
            for details of the reviewing process and to submit your papers
            please refer to the Online Submission System.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-teal-700 my-1">
              Article/Paper Acceptance Requirements
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                The article is presented in an intelligible fashion and is
                written in IJCSE Template.
              </li>
              <li>
                The article should be original writing that enhances the
                existing body of knowledge in the given subject area.
              </li>
              <li>
                Original review articles and surveys are acceptable, even if new
                data/concepts are not presented.
              </li>
              <li>
                Results reported have not been submitted or published elsewhere
                (although expanded versions of conference publications are
                eligible for submission).
              </li>
              <li>
                Experiments, statistics, and other analyses are performed to a
                high standard and are described in sufficient detail.
              </li>
              <li>
                Conclusions are presented in an appropriate fashion and are
                supported by the data.
              </li>
              <li>
                Figure/Image should be showing clearly and clearly mention
                figure name and numbers in increasing order.
              </li>
              <li>
                Equation/Formula should be in Math&apos;s equation Software or
                word Equation.
              </li>
              <li>
                Please do not give a scanned copy of the equation/formula.
              </li>
              <li>
                The tables should be in MS Word. Please do not give a scanned
                copy of the tables.
              </li>
              <li>
                Appropriate references to related prior published work must be
                included in IJCSE Standard.
              </li>
              <li>
                All the references should be mentioned inside the paragraph in
                IJCSE/IEEE format. References must be serially numbered and
                should be arranged in increasing order of number quoted in the
                text. References must be quoted in the text as numerals at the
                end of the sentence, before full stop, with bracket e.g.
                ....solution [1]. It is an international journal
                [2],[3],[4],[5],[6], ........, [N] that is increasing order. You
                have started references form [9],
                [1],[2],[3],[4],[7],[4],[5],[6] this is not correct.
              </li>
              <li>
                Website URL and invalid/incomplete references/citations replaced
                by the references of the Journal or remove from the References
                section.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default page;
