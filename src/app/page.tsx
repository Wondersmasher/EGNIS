"use client";
import Image from "next/image";
import { egnisLogoIcon } from "../../public/svgs";

export default function Home() {
  return (
    <div className='min-h-screen font-[family-name:var(--font-inter)] bg-accent-white text-black'>
      <div className='flex border-[3px] border-main px-[14.44vw] gap-6 py-3 justify-between'>
        <Image
          src={egnisLogoIcon}
          alt='Logo'
          width={20}
          height={20}
          className='size-4'
        />
        <div className='flex gap-8 items-center justify-center'>
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
      <div className='flex flex-col gap-24 bg-linear-to-tr from-white to-accent-light px-[14.44vw] pt-8 pb-32 justify-center items-center'>
        <p className='italic text-main text-xl font-medium w-fit'>
          ABOUT EGNIS
        </p>
        <div className='flex gap-20'>
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
            <button className='bg-main px-6 py-3 rounded-sm text-accent-white w-fit cursor-pointer'>
              Read more{" "}
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-16  bg-linear-to-r from-white to-accent-light px-[14.44vw] pt-8 pb-32  justify-center items-center'>
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
                className='bg-white p-6 rounded-2xl flex flex-col justify-between gap-5 hover:shadow-lg duration-500 cursor-pointer w-[15.67vw]'
              >
                <div className='flex flex-col gap-5'>
                  <div className='bg-black size-16 rounded-lg'></div>
                  <p className='text-text-gray900 text-base font-medium'>
                    {feat}
                  </p>
                </div>
                <p className='text-main font-medium text-sm'>Learn more</p>
              </div>
            );
          })}
        </div>
        <button className='bg-main px-6 py-3 rounded-sm text-accent-white w-fit cursor-pointer'>
          Learn More About EGNiS Core
        </button>
      </div>
      <div className='flex flex-col gap-16  bg-linear-to-r from-accent-light to-white px-[14.44vw] py-8  justify-center items-center'>
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
                className='bg-white p-6 rounded-2xl flex flex-col justify-between items-center gap-5 shadow-lg cursor-pointer w-[21.67vw]'
              >
                <div className='flex flex-col gap-5 items-center'>
                  <div className='bg-black size-16 rounded-lg'></div>
                  <p className='text-text-gray900 text-base font-medium text-center'>
                    {sol}
                  </p>
                </div>
                <p className='text-main font-medium text-sm'>Learn more</p>
              </div>
            );
          })}
        </div>
        <button className='bg-main px-6 py-3 rounded-sm text-accent-white w-fit cursor-pointer'>
          View all products and solutions
        </button>
      </div>
      <div className='flex gap-20 bg-linear-to-bl from-white to-accent-light px-[14.44vw] pt-8 pb-32 justify-center items-center'>
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
                    <p>{why}</p>
                  </div>
                );
              })}
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
