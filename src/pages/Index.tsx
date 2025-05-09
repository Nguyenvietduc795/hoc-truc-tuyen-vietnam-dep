
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CourseCategories from '@/components/CourseCategories';
import HowItWorks from '@/components/HowItWorks';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <CourseCategories />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
