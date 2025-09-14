"use client";
import Wrapper from "@/components/Wrapper";

function page() {
  return (
    <Wrapper>
      <h2 className="text-teal-700 text-2xl font-bold">
        About Shobhit University Meerut
      </h2>
      <hr className="border-t border-teal-700 my-2" />
      <div className="flex flex-row gap-4">
        <div className="flex-1 text-justify">
          <div className="mb-4">
            <p>
              <span className="font-semibold">
                Shobhit Institute of Engineering and Technology
              </span>
              , notified by the Government of India as a Deemed-to-be
              University, under Section 3 of the University Grants Commission
              Act, 1956, was envisaged and inspired by Babu Vijendra Kumar ji,
              an eminent agriculturist and social worker from Gangoh
              (Saharanpur) of U.P. It is a NAAC-accredited with ‘A’ Grade
              (Deemed-to-be University) that seeks to attain high-quality
              teaching, applied research, and human values. The University seeks
              to go beyond the established standards for nurturing technocrats
              and prospective managers who have a global vision and insight in
              their chosen field.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              NICE School of Business Studies
            </h2>
            <p>
              NICE School of Business Studies at Shobhit University, Meerut, is
              committed to excellence in business education, research, and
              professional growth. With a strong focus on business
              administration, management studies, entrepreneurship, and ethical
              business practices, the school equips students with in-depth
              knowledge of management, marketing, accounting, finance, and other
              core disciplines. It fosters a culture of innovation and
              entrepreneurship by encouraging students to develop new business
              ideas and ventures, while its strong industry collaborations
              provide opportunities for internships, networking, and real-world
              projects. Alongside teaching and training, the school also
              emphasizes research, contributing to the advancement of business
              knowledge and practices. Through its comprehensive programs—MBA,
              BBA, B.Com, and Ph.D.—NICE SBS prepares students to become
              innovative, responsible, and future-ready leaders in the
              global business world.
            </p>
          </div>
        </div>
        <img src="/images/about-img.jpg" alt="university-image" width={300} />
      </div>
    </Wrapper>
  );
}

export default page;
