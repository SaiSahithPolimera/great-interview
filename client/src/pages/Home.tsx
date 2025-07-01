import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section className="relative min-h-screen bg-slate-950 bg-repeat overflow-scroll">
      <div className="fixed inset-0 flex flex-col bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] bg-repeat z-0" />
      <div className="relative flex flex-col min-h-screen z-10">
        <Navbar />
        <Hero />
      </div></section>
  )
}

export default Home