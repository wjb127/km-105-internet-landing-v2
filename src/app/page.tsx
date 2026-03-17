import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import ConsultForm from "@/components/sections/ConsultForm";
import Promises from "@/components/sections/Promises";
import RecentList from "@/components/sections/RecentList";
import TrustStrip from "@/components/sections/TrustStrip";
import Footer from "@/components/sections/Footer";
import FloatingCTA from "@/components/sections/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <ConsultForm />
        <Promises />
        <RecentList />
        <TrustStrip />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
