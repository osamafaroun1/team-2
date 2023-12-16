import 'bootstrap/dist/css/bootstrap.min.css'
import Section1 from '../../components/Section1/Section1';
import Section2 from '../../components/Section2/section2';
import Section3 from '../../components/Section3/section3'
import Footer from '../../components/Footer/Footer';
import AllNav from '../../components/NavBarAll/AllNav';

function Home() {
  return (
    <>
    <AllNav />
     <Section1/>
     <Section2/>
     <Section3 />
     <Footer />
    </>
  );
}

export default Home;