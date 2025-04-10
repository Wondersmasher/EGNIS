"use client";
import Image from "next/image";
import {
  amazon,
  arrowRightGreen,
  arrowRightWhite,
  BasketBall,
  BasketBallFilled,
  checkmark,
  dribble,
  egnisLogoBig,
  egnisLogoIcon2,
  emailIcon,
  EProcureMentIcon,
  EProcureMentWhiteIcon,
  Facebook,
  FacebookFilled,
  google,
  HumanResourceIcon,
  HumanResourceWhiteIcon,
  Instagram,
  InstagramFilled,
  interoperability,
  lenovo,
  LinkedIn,
  LinkedInFilled,
  microsoft,
  mobileApproach,
  netflix,
  offlineAcess,
  scalability,
  secure,
  security,
  slack,
  standard,
  StateBusinessIcon,
  StateBusinessWhiteIcon,
  StateCentralIcon,
  StateCentralWhiteIcon,
  StateLandIcon,
  StateLandWhiteIcon,
  StateTaxIcon,
  StateTaxWhiteIcon,
  Twitter,
  TwitterFilled,
  userCentric,
  youtube,
} from "../../public/svgs";
import {
  eHealth,
  nigeriaFlag,
  transforming,
  whyEgnis,
} from "../../public/images";
import Link from "next/link";

export default function Home() {
  return (
    <div className='min-h-screen w-screen overflow-hidden font-[family-name:var(--font-inter)] text-black bg-white'>
      <div className='flex border-[3px] border-main bg-white px-[5vw] md:px-[10vw] gap-6 py-3 justify-between'>
        <Image
          src={egnisLogoIcon2}
          alt='Logo'
          width={200}
          height={50}
          className=''
        />
        <div className=' gap-[1.5vw] items-center justify-center hidden md:flex'>
          {navTitles.map((title) => {
            return (
              <p
                key={title}
                className='text-sm md:text-base font-medium hover:font-semibold  hover:text-main duration-500 cursor-pointer text-text'
              >
                {title}
              </p>
            );
          })}
          <button className='bg-main text-sm md:text-base px-6 py-3 rounded-sm text-accent-white cursor-pointer'>
            Register/Sign In
          </button>
        </div>
      </div>

      <div
        className='flex  gap-20 px-[5vw] md:px-[10vw] pb-8 pt-32 justify-center items-center flex-wrap md:h-[90vh]'
        style={{
          backgroundImage: "url('/images/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // height: "100vh",
          width: "100%",
        }}
      >
        <div className='flex flex-col gap-8 w-full md:w-1/2'>
          <p className='font-bold text-3xl md:text-5xl text-text-gray900 md:leading-16'>
            Empowering Digital Transformation Across Nigeria{" "}
          </p>
          <p className='text-text-gray700 text-sm md:text-base'>
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
      <div className='flex flex-col gap-24 bg-linear-to-tr from-white to-accent-light px-[5vw] md:px-[10vw] pt-8 pb-32 justify-center items-center'>
        <p className='italic text-main text-base md:text-lg font-medium w-fit'>
          ABOUT EGNIS
        </p>
        <div className='flex gap-20 flex-wrap'>
          <Image src={transforming} alt='Logo' className='' />
          <div className='flex flex-col gap-8 w-full md:w-1/2'>
            <p className='font-bold text-3xl md:text-5xl text-text-gray900 md:leading-16'>
              Transforming Governance Through Digital Infrastructure
            </p>
            <p className='text-text-gray700 text-sm md:text-base'>
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
      <div className='flex flex-col gap-16  bg-accent-light px-[5vw] md:px-[10vw] pt-8 pb-32  justify-center items-center'>
        <p className='italic text-main text-base md:text-lg font-medium w-fit'>
          EGNis Features{" "}
        </p>
        <div className='flex flex-col gap-3 text-text-gray900 items-center'>
          <p className='text-3xl md:text-5xl font-semibold '>EGNiS Core</p>
          <p className='text-base md:text-lg w-full md:max-w-2/3 leading-7 text-center'>
            The foundational infrastructure of EGNiS, providing the standard
            framework and solutions required for effective digital
            transformation across all government levels.
          </p>
        </div>
        <div className='flex flex-wrap gap-x-8 gap-y-6 w-full justify-center-safe'>
          {feats.map((feat) => {
            return (
              <div
                key={feat.title}
                className='bg-white p-6 rounded-2xl flex flex-col justify-between gap-5 hover:shadow-lg duration-500 cursor-pointer w-full md:w-[15.67vw] group'
              >
                <div className='flex flex-col gap-5'>
                  <div className='bg-icon-bg size-16 rounded-lg flex justify-center items-center group-hover:bg-main'>
                    {feat.iconFilled}
                    {feat.iconUnfilled}
                  </div>
                  <p className='text-text-gray900 text-sm md:text-base font-medium'>
                    {feat.title}
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
      <div className='flex flex-col gap-16  bg-accent-light px-[5vw] md:px-[10vw] py-8  justify-center items-center'>
        <div className='flex flex-col gap-3 text-text-gray900 items-center'>
          <p className='text-3xl md:text-5xl font-semibold '>
            Integrated Products and Solutions
          </p>
          <p className='text-base md:text-lg w-full md:max-w-2/3 leading-7 text-center'>
            Additional services designed to address specialized government
            operations and ensure comprehensive digital transformation.
          </p>
        </div>
        <div className='flex flex-wrap gap-x-8 gap-y-6 w-full justify-center-safe'>
          {prodAndSols.map((sol) => {
            return (
              <div
                key={sol.title}
                className='bg-white p-6 rounded-2xl flex flex-col justify-between items-center gap-5 shadow-lg cursor-pointer w-full md:w-[21.67vw] group'
              >
                <div className='flex flex-col gap-5 items-center'>
                  <div className='bg-icon-bg size-16 rounded-lg flex justify-center items-center group-hover:bg-main'>
                    {sol.iconFilled}
                    {sol.iconUnfilled}
                  </div>
                  <p className='text-text-gray900 text-sm md:text-base font-medium text-center'>
                    {sol.title}
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
      <div className='flex gap-x-20 gap-y-6 bg-linear-to-r from-white to-accent-light px-[5vw] md:px-[10vw] pt-8 pb-32 justify-center items-center flex-wrap'>
        <div className='flex flex-col gap-8 w-full md:w-1/2'>
          <p className='font-bold text-3xl md:text-5xl text-text-gray900 leading-16'>
            Why EGNiS?
          </p>
          <p className='text-text-gray700 text-base md:text-lg font-medium'>
            EGNiS is the most comprehensive and scalable digital governance
            platform for Nigeria, designed to enhance efficiency, transparency,
            and accessibility across all government levels.
          </p>
          <div className='flex flex-col gap-3'>
            <p className='text-text-gray700 font-semibold text-base md:text-lg'>
              What Makes EGNiS Stand Out:
            </p>
            <div className='flex flex-col gap-2'>
              {why.map((why) => {
                return (
                  <div key={why} className='gap-4 flex items-center'>
                    <Image src={checkmark} alt='Logo' className='' />

                    <p className='text-[#39404B] text-sm md:text-base'>{why}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Image src={whyEgnis} alt='Logo' className='' />
      </div>
      <div className='flex flex-col gap-16  bg-white px-[5vw] md:px-[10vw] pt-8 pb-20  justify-center items-center'>
        <p className='italic text-main text-base md:text-lg font-medium w-fit'>
          Architecture and Key Characteristics
        </p>
        <div className='flex flex-col gap-3 text-text-gray900 items-center'>
          <p className='text-3xl md:text-5xl font-semibold text-text-gray900'>
            Built for Performance, Security, and Scalability
          </p>
          <p className='text-base md:text-lg w-full md:max-w-2/3 leading-7 text-center text-text-gray700'>
            EGNiS is designed with a secure, scalable, and user-centric
            architecture to ensure seamless interoperability and efficient
            service delivery across all levels of government.
          </p>
        </div>
        <div className='flex flex-wrap gap-x-8 gap-y-8 w-full justify-center-safe'>
          {architectures.map((architecture) => {
            return (
              <div
                key={architecture.title}
                className='flex gap-8 items-center w-full md:w-[45%]'
              >
                <div className='flex justify-center items-center min-w-[79px] max-w-[79px] aspect-square rounded-full bg-main'>
                  <Image src={architecture.icon} alt='Logo' className='' />
                </div>
                <div className='flex flex-col gap-'>
                  <p className='font-medium text-base md:text-lg'>
                    {architecture.title}
                  </p>
                  <p className='text-sm md:text-base'>{architecture.text}</p>
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
      <div className='flex flex-col gap-16  bg-[#F9FFF2] px-[5vw] md:px-[10vw] pt-8 pb-32  justify-center items-center'>
        <p className='italic text-main text-base md:text-lg font-medium w-fit'>
          Product in Focus
        </p>
        <div className='flex gap-20 justify-center items-center flex-wrap'>
          <div className='flex flex-col gap-8 w-full md:w-1/2'>
            <p className='font-bold text-3xl md:text-5xl text-text-gray900 md:leading-16'>
              eHealth Nigeria <br /> System
            </p>

            <div className='flex flex-col gap-3'>
              <p className='text-[#39404B] text-base md:text-lg font-medium'>
                Improving the quality and accessibility of healthcare for
                everyone, everywhere in Nigeria
              </p>
              <p className='text-[#39404B] text-sm md:text-base mt-3'>
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

      <div className='flex gap-20 py-32 px-[5vw] md:px-[10vw] bg-main flex-wrap'>
        <div className='flex flex-col gap-6 w-full md:w-1/2 text-white'>
          <p className='text-white text-3xl md:text-[40px] font-bold'>
            Request For a Demo
          </p>
          <p>
            Aenean vestibulum felis nec egestas fringilla. Duis non felis
            consequat, varius sapien convallis, tincidunt nisl.{" "}
          </p>
          <div className='flex gap-3 text-white'>
            <Image src={emailIcon} alt='Logo' className='' />
            <div className='flex flex-col gap- '>
              <p className='uppercase text-sm md:text-base font-medium'>
                Email us
              </p>
              <p className='text-lg md:text-2xl font-medium'>info@golio.com</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-lg md:rounded-2xl p-4 md:p-12 flex flex-col gap-6 w-full md:w-[648px]'>
          <p className='text-text-gray900 font-bold text-2xl'>
            Request A Demo — let’s work together.
          </p>
          <p className='text-sm md:text-base text-text-gray700'>
            Got a project? Drop us a line if you want to work together on
            something exciting. Or do you need our help? Feel free to contact
            us.
          </p>
          <div className='flex gap-x-4 gap-y-6 flex-wrap'>
            <div className='flex flex-col gap-2 flex-1'>
              <p className='text-text-gray900 text-sm'>Name</p>
              <input
                className='border border-[#E6E8EC] rounded-sm p-3'
                placeholder='Full Name'
              />
            </div>
            <div className='flex flex-col gap-2 flex-1'>
              <p className='text-text-gray900 text-sm'>Email</p>
              <input
                className='border border-[#E6E8EC] rounded-sm p-3'
                placeholder='Email address'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-text-gray900 text-sm'>Subject</p>
            <input
              className='border border-[#E6E8EC] rounded-sm p-3'
              placeholder='Subject'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-text-gray900 text-sm'>Message</p>
            <textarea
              className='border border-[#E6E8EC] rounded-sm p-3 h-28 resize-none'
              placeholder='Tell us about your project...'
            />
          </div>
          <button className='bg-main font-bold px-6 py-3 rounded-sm text-accent-white w-fit cursor-pointer flex gap-3 items-center'>
            Request A Demo
            <Image src={arrowRightWhite} alt='Logo' className='' />
          </button>
        </div>
      </div>

      <div className='flex gap-20 py-32 px-[5vw] md:px-[10vw] bg-[#F5F6F7] flex-wrap'>
        <p className='text-[42px] font-bold text-text-gray900 md:whitespace-nowrap'>
          EGNiS is Trusted By
        </p>
        <div className='flex gap-6 flex-wrap justify-center'>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[45%] md-w-[182px] h-[107px]'>
            <Image src={youtube} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[45%] md-w-[182px] h-[107px]'>
            <Image src={slack} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[45%] md-w-[182px] h-[107px]'>
            <Image src={amazon} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[45%] md-w-[182px] h-[107px]'>
            <Image src={microsoft} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[45%] md-w-[182px] h-[107px]'>
            <Image src={lenovo} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[45%] md-w-[182px] h-[107px]'>
            <Image src={netflix} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[45%] md-w-[182px] h-[107px]'>
            <Image src={google} alt='Logo' className='' />
          </div>
          <div className='flex justify-center items-center bg-white rounded-lg cursor-pointer w-[45%] md-w-[182px] h-[107px]'>
            <Image src={dribble} alt='Logo' className='' />
          </div>
        </div>
      </div>
      <div className='flex gap-20 justify-between px-[5vw] md:px-[10vw] pb-20 pt-[193px] relative flex-wrap'>
        <Image
          src={nigeriaFlag}
          alt='Logo'
          className='absolute z-10 top-1/3 left-4 md:top-14 md:left-[550px] left-'
        />
        <Image src={egnisLogoBig} alt='Logo' className='' />
        <div className='flex flex-col gap-5'>
          <div className='flex z-10 flex-wrap  gap-10 md:gap-20'>
            <div className='flex flex-col gap-2 flex-1'>
              <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 uppercase'>
                Quick Links
              </p>
              <div className='flex flex-col gap-'>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 cursor-pointer hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  Portfolio
                </p>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 cursor-pointer hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  About
                </p>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 cursor-pointer hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  Services
                </p>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 cursor-pointer hover:text-main duration-500 hover:font-bold whitespace-nowrap'>
                  Pricing Plans
                </p>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 cursor-pointer hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  Contact
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-2 flex-1'>
              <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 uppercase'>
                Services
              </p>
              <div className='flex flex-col gap-'>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 cursor-pointer hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  UI/UX Design
                </p>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 cursor-pointer hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  Branding
                </p>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 cursor-pointer hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  Illustration
                </p>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 cursor-pointer hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  Design Concept{" "}
                </p>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 cursor-pointer hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  App Design
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-2 flex-1'>
              <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 uppercase'>
                Product
              </p>
              <div className='flex flex-col gap-'>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  Figma
                </p>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  Adobe
                </p>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  Dribbble
                </p>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  Behance{" "}
                </p>
                <p className='font-medium text-sm md:text-base text-[#061C3D] h-9 hover:text-main duration-500 hover:font-bold  whitespace-nowrap'>
                  Themeforest
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2.5'>
            <p className='text-sm md:text-base font-medium'>Connect with us:</p>
            <div className='flex items-center gap-3'>
              <Link
                href={"/"}
                className='flex hover:bg-[#B8F8C6] duration-500 rounded-lg p-2 justify-center items-center group'
              >
                <Facebook className='group-hover:hidden' />
                <FacebookFilled className='group-hover:block hidden' />
              </Link>
              <Link
                href={"/"}
                className='flex hover:bg-[#B8F8C6] duration-500 rounded-lg p-2 justify-center items-center group'
              >
                <Twitter className='group-hover:hidden' />
                <TwitterFilled className='group-hover:block hidden' />{" "}
              </Link>
              <Link
                href={"/"}
                className='flex hover:bg-[#B8F8C6] duration-500 rounded-lg p-2 justify-center items-center group'
              >
                <LinkedIn className='group-hover:hidden' />
                <LinkedInFilled className='group-hover:block hidden' />{" "}
              </Link>
              <Link
                href={"/"}
                className='flex hover:bg-[#B8F8C6] duration-500 rounded-lg p-2 justify-center items-center group'
              >
                <Instagram className='group-hover:hidden' />
                <InstagramFilled className='group-hover:block hidden' />{" "}
              </Link>
              <Link
                href={"/"}
                className='flex hover:bg-[#B8F8C6] duration-500 rounded-lg p-2 justify-center items-center group'
              >
                <BasketBall className='group-hover:hidden' />
                <BasketBallFilled className='group-hover:block hidden' />{" "}
                {/* #094FB7 */}
              </Link>
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
  {
    title: "E-Government Website with CMS.",
    iconUnfilled: <StateLandIcon className='group-hover:hidden' />,
    iconFilled: <StateLandWhiteIcon className='group-hover:block hidden ' />,
  },
  {
    title: "Communication and Document Management",
    iconUnfilled: <StateBusinessIcon className='group-hover:hidden' />,
    iconFilled: (
      <StateBusinessWhiteIcon className='group-hover:block hidden ' />
    ),
  },
  {
    title: "MDA Management System.",
    iconUnfilled: <StateBusinessIcon className='group-hover:hidden' />,
    iconFilled: (
      <StateBusinessWhiteIcon className='group-hover:block hidden ' />
    ),
  },
  {
    title: "Citizen Portal",
    iconUnfilled: <StateBusinessIcon className='group-hover:hidden' />,
    iconFilled: (
      <StateBusinessWhiteIcon className='group-hover:block hidden ' />
    ),
  },
  {
    title: "Data Analytics",
    iconUnfilled: <EProcureMentIcon className='group-hover:hidden' />,
    iconFilled: <EProcureMentWhiteIcon className='group-hover:block hidden ' />,
  },
  {
    title: "Mobile Access",
    iconUnfilled: <HumanResourceIcon className='group-hover:hidden' />,
    iconFilled: (
      <HumanResourceWhiteIcon className='group-hover:block hidden ' />
    ),
  },
  {
    title: "Task & Workflow Automation",
    iconUnfilled: <HumanResourceIcon className='group-hover:hidden' />,
    iconFilled: (
      <HumanResourceWhiteIcon className='group-hover:block hidden ' />
    ),
  },
  {
    title: "Training & Support",
    iconUnfilled: <HumanResourceIcon className='group-hover:hidden' />,
    iconFilled: (
      <HumanResourceWhiteIcon className='group-hover:block hidden ' />
    ),
  },
];
const prodAndSols = [
  {
    title: "State Central Billing and Payment Management System",
    iconUnfilled: <StateCentralIcon className='group-hover:hidden' />,
    iconFilled: <StateCentralWhiteIcon className='group-hover:block hidden ' />,
  },
  {
    title: "State Tax Management System",
    iconUnfilled: <StateTaxIcon className='group-hover:hidden' />,
    iconFilled: <StateTaxWhiteIcon className='group-hover:block hidden ' />,
  },
  {
    title: "State Land and Property Management with GIS",
    iconUnfilled: <StateLandIcon className='group-hover:hidden' />,
    iconFilled: <StateLandWhiteIcon className='group-hover:block hidden ' />,
  },
  {
    title: "State Business Registration and Certification",
    iconUnfilled: <StateBusinessIcon className='group-hover:hidden' />,
    iconFilled: (
      <StateBusinessWhiteIcon className='group-hover:block hidden ' />
    ),
  },
  {
    title: "E-Procurement Management System",
    iconUnfilled: <EProcureMentIcon className='group-hover:hidden' />,
    iconFilled: <EProcureMentWhiteIcon className='group-hover:block hidden ' />,
  },
  {
    title: "Human Resource Management System (HRMS)",
    iconUnfilled: <HumanResourceIcon className='group-hover:hidden' />,
    iconFilled: (
      <HumanResourceWhiteIcon className='group-hover:block hidden ' />
    ),
  },
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
    icon: standard,
  },
  {
    title: "Scalability",
    text: "Built to grow and adapt to evolving government needs",
    icon: scalability,
  },
  {
    title: "Security",
    text: "Robust protocols to safeguard government data and citizen information",
    icon: security,
  },
  {
    title: "Mobile-First Approach",
    text: "Optimized for mobile use, enhancing accessibility.",
    icon: mobileApproach,
  },
  {
    title: "User-Centric Design",
    text: "Enhanced user experience for citizens and government staff.",
    icon: userCentric,
  },
  {
    title: "Secure Authentication",
    text: "Uses biometrics, OTPs, and other methods for data protection.",
    icon: secure,
  },
  {
    title: "Interoperability",
    text: "Seamless communication and data sharing across systems.",
    icon: interoperability,
  },
  {
    title: "Offline Accessibility",
    text: "Ensures service delivery even without internet connectivity",
    icon: offlineAcess,
  },
];
