import Content from "./ContentSlider";
import VisionAbout from "./VisionSlider";
import WhoWeAreHeroSlider from "./WhoWeAreHeroSection";

export default function WhoWeAre() {
  return (
    <div style={{ marginTop: "80px" }}>
      <WhoWeAreHeroSlider />
      <Content />
      <VisionAbout />
    </div>
  );
}
