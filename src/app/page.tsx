import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import TrustBadgeBar from "@/components/sections/TrustBadgeBar";
import ConsultForm from "@/components/sections/ConsultForm";
import Promises from "@/components/sections/Promises";
import RecentList from "@/components/sections/RecentList";
import Footer from "@/components/sections/Footer";
import FloatingCTA from "@/components/sections/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <TrustBadgeBar />
        <ConsultForm />
        <Promises />
        <RecentList />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
