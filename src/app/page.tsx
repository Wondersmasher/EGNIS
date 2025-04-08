"use client";
import Image from "next/image";
import {
  amazon,
  arrowRightGreen,
  arrowRightWhite,
  dribble,
  egnisLogoBig,
  egnisLogoIcon2,
  google,
  lenovo,
  microsoft,
  netflix,
  security,
  slack,
  youtube,
} from "../../public/svgs";
import {
  eHealth,
  nigeriaFlag,
  transforming,
  whyEgnis,
} from "../../public/images";

export default function Home() {
  return (
    <div className='min-h-screen font-[family-name:var(--font-inter)] text-black bg-white'>
      <div className='flex border-[3px] border-main bg-white px-[10vw] gap-6 py-3 justify-between'>
        <Image
          src={egnisLogoIcon2}
          alt='Logo'
          width={200}
          height={50}
          className=''
        />
        <div className='flex gap-[1.5vw] items-center justify-center'>
          {navTitles.map((title) => {
            return (
              <p
                key={title}
                className='text-xl font-medium hover:font-semibold  hover:text-main duration-500 cursor-pointer text-text'
              >
                {title}
              </p>
            );
          })}
          <button className='bg-main px-6 py-3 rounded-sm text-accent-white cursor-pointer'>
            Register/Sign In
          </button>
        </div>
      </div>

      <div
        className='flex  gap-20 px-[10vw] pb-8 pt-32 justify-center items-center'
        style={{
          backgroundImage: "url('/images/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className='flex flex-col gap-8 w-1/2'>
          <p className='font-bold text-[56px] text-text-gray900 leading-16'>
            Empowering Digital Transformation Across Nigeria{" "}
          </p>
          <p className='text-text-gray700 text-base'>
            EGNiS provides robust, secured and scalable digital infrastructure
            for Nigerian governments to deliver seamless services to citizens
            and businesses.
          </p>
          <div className='flex gap-4'>
            <button className='bg-main font-bold px-6 py-3 rounded-sm text-accent-white w-fit cursor-pointer'>
              Request a Demo{" "}
            </button>
            <button className='bg-accent font-bold px-6 py-3 rounded-sm text-main w-fit cursor-pointer'>
              Know More{" "}
            </button>
          </div>
        </div>
        <div className='flex-1' />{" "}
      </div>
      <div className='flex flex-col gap-24 bg-linear-to-tr from-white to-accent-light px-[10vw] pt-8 pb-32 justify-center items-center'>
        <p className='italic text-main text-xl font-medium w-fit'>
          ABOUT EGNIS
        </p>
        <div className='flex gap-20'>
          <Image src={transforming} alt='Logo' className='' />
          <div className='flex flex-col gap-8 w-1/2'>
            <p className='font-bold text-[56px] text-text-gray900 leading-16'>
              Transforming Governance Through Digital Infrastructure
            </p>
            <p className='text-text-gray700 text-base'>
              The E-Government Nigeria System (EGNiS) is a robust and scalable
              digital platform designed to automate and digitize government
              processes and services across Nigeria at the federal, state, and
              Local Government Area (LGA) levels. EGNiS serves as anintegrated
              ERP system for government organizations, enabling efficient
              service delivery, streamlined communication, and enhanced
              transparency.
            </p>
            <button className='bg-main font-bold px-6 py-3 rounded-sm text-accent-white w-fit cursor-pointer'>
              Read more{" "}
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-16  bg-linear-to-r from-white to-accent-light px-[10vw] pt-8 pb-32  justify-center items-center'>
        <p className='italic text-main text-xl font-medium w-fit'>
          EGNis Features{" "}
        </p>
        <div className='flex flex-col gap-3 text-text-gray900 items-center'>
          <p className='text-[56px] font-semibold '>EGNiS Core</p>
          <p className='text-lg max-w-2/3 leading-7 text-center'>
            The foundational infrastructure of EGNiS, providing the standard
            framework and solutions required for effective digital
            transformation across all government levels.
          </p>
        </div>
        <div className='flex flex-wrap gap-x-8 gap-y-6 w-full justify-center-safe'>
          {feats.map((feat) => {
            return (
              <div
                key={feat}
                className='bg-white p-6 rounded-2xl flex flex-col justify-between gap-5 hover:shadow-lg duration-500 cursor-pointer w-[15.67vw] group'
              >
                <div className='flex flex-col gap-5'>
                  <div className='bg-icon-bg size-16 rounded-lg flex justify-center items-center group-hover:bg-main duration-500'>
                    <Image
                      src={arrowRightGreen}
                      alt='Logo'
                      className='group-hover:hidden'
                    />
                    <Image
                      src={arrowRightWhite}
                      alt='Logo'
                      className='group-hover:block hidden'
                    />
                  </div>{" "}
                  <p className='text-text-gray900 text-base font-medium'>
                    {feat}
                  </p>
                </div>
                <button className='text-main font-bold  text-sm flex gap-2 items-center'>
                  Learn more
                  <Image src={arrowRightGreen} alt='Logo' className='' />
                </button>{" "}
              </div>
            );
          })}
        </div>

        <button className='bg-main px-6 py-3 rounded-sm text-accent-white w-fit cursor-pointer flex gap-3 items-center'>
          Learn More About EGNiS Core
          <Image src={arrowRightWhite} alt='Logo' className='' />
        </button>
      </div>
      <div className='flex flex-col gap-16  bg-linear-to-r from-accent-light to-white px-[10vw] py-8  justify-center items-center'>
        <div className='flex flex-col gap-3 text-text-gray900 items-center'>
          <p className='text-[56px] font-semibold '>
            Integrated Products and Solutions
          </p>
          <p className='text-lg max-w-2/3 leading-7 text-center'>
            Additional services designed to address specialized government
            operations and ensure comprehensive digital transformation.
          </p>
        </div>
        <div className='flex flex-wrap gap-x-8 gap-y-6 w-full justify-center-safe'>
          {prodAndSols.map((sol) => {
            return (
              <div
                key={sol}
                className='bg-white p-6 rounded-2xl flex flex-col justify-between items-center gap-5 shadow-lg cursor-pointer w-[21.67vw] group'
              >
                <div className='flex flex-col gap-5 items-center'>
                  <div className='bg-icon-bg size-16 rounded-lg flex justify-center items-center group-hover:bg-main duration-500'>
                    <Image
                      src={arrowRightGreen}
                      alt='Logo'
                      className='group-hover:hidden'
                    />
                    <Image
                      src={arrowRightWhite}
                      alt='Logo'
                      className='group-hover:block hidden'
                    />
                  </div>
                  <p className='text-text-gray900 text-base font-medium text-center'>
                    {sol}
                  </p>
                </div>
                <button className='text-main font-bold text-sm flex gap-2 items-center'>
                  Learn more
                  <Image src={arrowRightGreen} alt='Logo' className='' />
                </button>
              </div>
            );
          })}
        </div>
        <button className='bg-main px-6 py-3 rounded-sm text-accent-white w-fit cursor-pointer flex gap-3 items-center'>
          View all products and solutions
          <Image src={arrowRightWhite} alt='Logo' className='' />
        </button>
      </div>
      <div className='flex gap-20 bg-linear-to-bl from-white to-accent-light px-[10vw] pt-8 pb-32 justify-center items-center'>
        <div className='flex flex-col gap-8 w-1/2'>
          <p className='font-bold text-[56px] text-text-gray900 leading-16'>
            Why EGNiS?
          </p>
          <p className='text-text-gray700 text-lg font-medium'>
            EGNiS is the most comprehensive and scalable digital governance
            platform for Nigeria, designed to enhance efficiency, transparency,
            and accessibility across all government levels.
          </p>
          <div className='flex flex-col gap-3'>
            <p className='text-text-gray700 font-semibold text-lg'>
              What Makes EGNiS Stand Out:
            </p>
            <div className='flex flex-col gap-2'>
              {why.map((why) => {
                return (
                  <div key={why} className='gap-4 flex items-center'>
                    <div className='size-2 bg-main rounded-full' />
                    <p className='text-[#39404B] text-base'>{why}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Image src={whyEgnis} alt='Logo' className='' />
      </div>
      <div className='flex flex-col gap-16  bg-white px-[10vw] pt-8 pb-20  justify-center items-center'>
        <p className='italic text-main text-xl font-medium w-fit'>
          Architecture and Key Characteristics
        </p>
        <div className='flex flex-col gap-3 text-text-gray900 items-center'>
          <p className='text-[56px] font-semibold text-text-gray900'>
            Built for Performance, Security, and Scalability
          </p>
          <p className='text-lg max-w-2/3 leading-7 text-center text-text-gray700'>
            EGNiS is designed with a secure, scalable, and user-centric
            architecture to ensure seamless interoperability and efficient
            service delivery across all levels of government.
          </p>
        </div>
        <div className='flex flex-wrap gap-x-8 gap-y-16 w-full justify-center-safe'>
          {architectures.map((architecture) => {
            return (
              <div
                key={architecture.title}
                className='flex gap-8 items-center w-[45%]'
              >
                <div className='flex justify-center items-center min-w-[79px] max-w-[79px] aspect-square rounded-full bg-main'>
                  <Image src={security} alt='Logo' className='' />
                </div>
                <div className='flex flex-col gap-'>
                  <p className='font-medium text-lg'>{architecture.title}</p>
                  <p className='text-base'>{architecture.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button className='bg-main font-bold px-6 py-3 rounded-sm text-accent-white w-fit cursor-pointer flex gap-3 items-center'>
          Explore More
          <Image src={arrowRightWhite} alt='Logo' className='' />
        </button>
      </div>
      <div className='flex flex-col gap-16  bg-[#F9FFF2] px-[10vw] pt-8 pb-32  justify-center items-center'>
        <p className='italic text-main text-xl font-medium w-fit'>
          Product in Focus
        </p>
        <div className='flex gap-20 justify-center items-center'>
          <div className='flex flex-col gap-8 w-1/2'>
            <p className='font-bold text-[56px] text-text-gray900 leading-16'>
              eHealth Nigeria <br /> System
            </p>

            <div className='flex flex-col gap-3'>
              <p className='text-[#39404B] text-lg font-medium'>
                Improving the quality and accessibility of healthcare for
                everyone, everywhere in Nigeria
              </p>
              <p className='text-[#39404B] text-base mt-3'>
                EHNS equips healthcare providers, government bodies, and
                citizens with digital tools and solutions for quality and
                accessible healthcare for all Nigerians
              </p>
            </div>
            <button className='bg-main font-bold px-6 py-3 rounded-sm text-accent-white w-fit cursor-pointer flex gap-3 items-center mt-10'>
              Discover More
              <Image src={arrowRightWhite} alt='Logo' className='' />
            </button>
          </div>
          <Image src={eHealth} alt='Logo' className='' />
        </div>
      </div>

      {/*  */}
      {/* <div className='bg-white'>
        <div className='skewer flex gap-20 px-[10vw] bg-main py-32 justify-baseline '>
          lorem10000
          <div className='relative w-1/2'>
            <div className='bg-red-500 size-56 absolute top-0 right-0'></div>
          </div>
        </div>
      </div> */}

      <div className='flex gap-20 py-32 px-[10vw] bg-[#F5F6F7]'>
        <p className='text-[42px] font-bold text-text-gray900 whitespace-nowrap'>
          EGNiS is Trusted By
        </p>
        <div className='flex gap-6 flex-wrap'>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[182px] h-[107px]'>
            <Image src={youtube} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[182px] h-[107px]'>
            <Image src={slack} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[182px] h-[107px]'>
            <Image src={amazon} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[182px] h-[107px]'>
            <Image src={microsoft} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[182px] h-[107px]'>
            <Image src={lenovo} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[182px] h-[107px]'>
            <Image src={netflix} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[182px] h-[107px]'>
            <Image src={google} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[182px] h-[107px]'>
            <Image src={dribble} alt='Logo' className='' />
          </div>
        </div>
      </div>
      <div className='flex gap-20 justify-between px-[10vw] pb-20 pt-[193px] relative'>
        <Image
          src={nigeriaFlag}
          alt='Logo'
          className='absolute z-10 top-14 left-[550px] left-'
        />
        <Image src={egnisLogoBig} alt='Logo' className='' />
        <div className='flex gap-'>
          <div className='flex flex-col gap-2'>
            <p className='font-medium text-base text-[#061C3D] h-9 uppercase w-[200px]'>
              Quick Links
            </p>
            <div className='flex flex-col gap-'>
              <p className='font-medium text-base text-[#061C3D] h-9'>
                Portfolio
              </p>
              <p className='font-medium text-base text-[#061C3D] h-9'>About</p>
              <p className='font-medium text-base text-[#061C3D] h-9'>
                Services
              </p>
              <p className='font-medium text-base text-[#061C3D] h-9'>
                Pricing Plans
              </p>
              <p className='font-medium text-base text-[#061C3D] h-9'>
                Contact
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-medium text-base text-[#061C3D] h-9 uppercase w-[200px]'>
              Services
            </p>
            <div className='flex flex-col gap-'>
              <p className='font-medium text-base text-[#061C3D] h-9'>
                UI/UX Design
              </p>
              <p className='font-medium text-base text-[#061C3D] h-9'>
                Branding
              </p>
              <p className='font-medium text-base text-[#061C3D] h-9'>
                Illustration
              </p>
              <p className='font-medium text-base text-[#061C3D] h-9'>
                Design Concept{" "}
              </p>
              <p className='font-medium text-base text-[#061C3D] h-9'>
                App Design
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-medium text-base text-[#061C3D] h-9 uppercase w-[200px]'>
              Product
            </p>
            <div className='flex flex-col gap-'>
              <p className='font-medium text-base text-[#061C3D] h-9'>Figma</p>
              <p className='font-medium text-base text-[#061C3D] h-9'>Adobe</p>
              <p className='font-medium text-base text-[#061C3D] h-9'>
                Dribbble
              </p>
              <p className='font-medium text-base text-[#061C3D] h-9'>
                Behance{" "}
              </p>
              <p className='font-medium text-base text-[#061C3D] h-9'>
                Themeforest
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const navTitles = [
  "Home",
  "About",
  "Ecosystem",
  "Platforms",
  "Community",
  "Resources",
  "Demo",
  "Contact us",
];

const feats = [
  "E-Government Website with CMS.",
  "Communication and Document Management",
  "MDA Management System.",
  "Citizen Portal",
  "Data Analytics",
  "Mobile Access",
  "Task & Workflow Automation",
  "Training & Support",
];

const prodAndSols = [
  "State Central Billing and Payment Management System",
  "State Tax Management System",
  "State Land and Property Management with GIS",
  "State Business Registration and Certification",
  "E-Procurement Management System",
  "Human Resource Management System (HRMS)",
];

const why = [
  "Standardization: Unified approach for seamless e-government services.",
  "Security: Robust protocols for data protection and privacy.",
  "Scalability: Built to evolve and expand with growing needs.",
  "User-Centric Design: Intuitive experience for governments and citizens.",
  "Interoperability: Smooth communication and data sharing across all levels.",
  "Mobile & Offline Access: Inclusive and reliable, even in remote areas.",
  "Data Analytics: Real-time insights for informed decision-making.",
];

const architectures = [
  {
    title: "Standardization",
    text: "Consistent framework for e-government applications across all levels.",
  },
  {
    title: "Scalability",
    text: "Built to grow and adapt to evolving government needs",
  },
  {
    title: "Security",
    text: "Robust protocols to safeguard government data and citizen information",
  },
  {
    title: "Mobile-First Approach",
    text: "Optimized for mobile use, enhancing accessibility.",
  },
  {
    title: "User-Centric Design",
    text: "Enhanced user experience for citizens and government staff.",
  },
  {
    title: "Secure Authentication",
    text: "Uses biometrics, OTPs, and other methods for data protection.",
  },
  {
    title: "Interoperability",
    text: "Seamless communication and data sharing across systems.",
  },
  {
    title: "Offline Accessibility",
    text: "Ensures service delivery even without internet connectivity",
  },
];
