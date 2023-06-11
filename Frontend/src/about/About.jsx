import Footer from "../home/components/Footer";

const About = () => {
  document.documentElement.style.height = "100%";
  document.body.style.height = "100%";

  return (
    <div className="text-center py-8 h-screen align-middle text-textblue center">
      <div className="flex w-96 mt-64 mb-64 mx-auto my-auto">
        CarGo is a car buying platform that makes it simple for you to buy
        cars. We have a myriad of cars and other vehicles to choose from. All of
        our cars are in good condition and are all available at affordable
        prices.

        This is a project made by Group W23 that used Tailwind CSS.
      </div>
      <Footer />
    </div>
  );
};

export default About;