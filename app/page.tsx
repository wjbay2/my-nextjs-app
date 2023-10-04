import Head from 'next/head';
import Image from 'next/image';
import mainBanner from '@/images/main_banner.png';
import mainBannerMobile from '@/images/main_banner_mobile.png';

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section>
        <Image src={mainBanner} alt="Digimon" className="hidden sm:block" />
        <Image
          src={mainBannerMobile}
          alt="Digimon"
          className="block sm:hidden"
        />
      </section>

      <section className="bg-white py-0 sm:py-8" id="about">
        <div className="bay-container mx-auto px-4 py-5 text-sm sm:px-6 sm:py-8 sm:text-base">
          <a
            className="text-main mb-8 text-xl font-bold uppercase tracking-wide no-underline hover:no-underline"
            href="#"
          >
            About
          </a>

          <p className="text-main mb-4 mt-3">
            Hello visitor, this is a side project builded using NextJS 13.4.
            <br />
          </p>

          <p className="text-main">
            Welcome to My Digimon Portal, your ultimate destination for
            everything Digimon! We are passionate about bringing the Digital
            World to fans and enthusiasts alike. Our mission is to provide a
            comprehensive and informative platform that offers a complete
            listing and in-depth details of every Digimon imaginable.
          </p>
        </div>
      </section>
      <footer className="bay-container mx-auto border-t border-gray-400 bg-white py-2 text-xs sm:text-sm">
        <div className="py-1 text-center sm:py-3">
          <p>© {new Date().getFullYear()} TechBay. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
