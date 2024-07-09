import Ansari from "@/components/Ansari";
import Bottom from "@/components/Bottom";
import Build from "@/components/Build";
import Grahak from "@/components/Grahak";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pucho from "@/components/Pucho";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Terms from "@/components/Terms";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <Ansari />
      <Build />
      <Team />
      <Grahak />
      <Pucho />
      <Terms />
      <Bottom/>
    </div>
  );
}
