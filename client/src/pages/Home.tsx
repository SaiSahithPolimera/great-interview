import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section className="relative min-h-screen bg-slate-950"><div className="absolute flex flex-col bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      <Navbar />
      <Hero />
    </div></section>
  )
}

export default Home