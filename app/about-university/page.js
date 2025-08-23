"use client";
import Wrapper from "@/components/Wrapper";

function page() {
  return (
    <Wrapper>
      <h2 className="text-teal-700 text-2xl font-bold">About Shobhit Meerut</h2>
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
              School of Business Studies
            </h2>
            <p>
              School of Business Studies (SBS) is an integral part of Shobhit
              Deemed University, Meerut. It has inherited the academic legacy of
              the NICE Management College (established in 1995), and together
              with autonomy in curriculum-designing and flexibility for foreign
              collaboration, through academic exchange, credit-transfer
              mechanism, and increased institution-industry interface. It offers
              MBA programme with several specialisations, including marketing,
              finance, human resource management, and production and operations
              management. It also offers M.Phil. and Ph.D. programmes in
              management.
            </p>
          </div>
        </div>
        <img src="/images/about-img.jpg" alt="university-image" width={300} />
      </div>
    </Wrapper>
  );
}

export default page;
