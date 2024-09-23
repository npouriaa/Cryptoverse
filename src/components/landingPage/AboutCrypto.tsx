import { useInView } from "framer-motion";
import { useRef } from "react";
import what_is_crypto from "../../assets/landingPage/what_is_crypto.png";
import how_crypto_works from "../../assets/landingPage/how_crypto_works.png";

const AboutCrypto = () => {
  const sec1 = useRef<HTMLDivElement>(null);
  const sec2 = useRef<HTMLDivElement>(null);
  const isInView1 = useInView(sec1, { once: true });
  const isInView2 = useInView(sec2, { once: true });

  return (
    <section className="w-full flex flex-col items-center gap-10 justify-center p-6 mt-4">
      <div
        style={{
          transform: isInView1 ? "none" : "translateY(50px)",
          opacity: isInView1 ? 1 : 0,
          transitionDelay: ".3s",
          transitionDuration: "0.75s",
        }}
        ref={sec1}
        className="max-sm:w-full xl:w-3/4 3xl:w-1/2 flex max-sm:flex-col md:flex-row xl:flex-row justify-center items-center gap-10"
      >
        <div className="max-sm:w-full md: md3:w-1/2 flex flex-col gap-2">
          <h3 className="text-2xl font-bold">What is Cryptocurrency?</h3>
          <p className="text-sm text-[#b7b7b7]">
            Cryptocurrency is a digital or virtual form of currency that relies
            on cryptography for security. Unlike traditional currencies issued
            by governments (like the US dollar or Euro), cryptocurrencies
            operate on decentralized networks based on blockchain technology.
            This means that transactions are recorded on a public ledger,
            providing transparency and security.
          </p>
        </div>
        <img
          className="max-sm:h-60 md:h-48 md3:h-60"
          src={what_is_crypto}
          alt="what-is-crypto-img"
        />
      </div>
      <div
        style={{
          transform: isInView2 ? "none" : "translateY(50px)",
          opacity: isInView2 ? 1 : 0,
          transitionDelay: ".3s",
          transitionDuration: "0.75s",
        }}
        ref={sec2}
        className="max-sm:w-full xl:w-3/4 3xl:w-1/2 flex max-sm:flex-col md:flex-row xl:flex-row justify-center items-center gap-10"
      >
        <div className="max-sm:w-full md: md3:w-1/2 flex flex-col gap-2 md:order-1">
          <h3 className="text-2xl font-bold">How Does Cryptocurrency Work?</h3>
          <p className="text-sm text-[#b7b7b7]">
            Cryptocurrencies operate on a technology called blockchain, a
            distributed ledger that records all transactions across a network of
            computers. This technology ensures that all copies of the blockchain
            are identical and that transactions are verified by a consensus
            among participants in the network.
          </p>
        </div>
        <img
          className="max-sm:h-60 md:h-48 md3:h-60"
          src={how_crypto_works}
          alt="what-is-crypto-img"
        />
      </div>
    </section>
  );
};

export default AboutCrypto;
