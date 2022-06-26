import JumboItem from "../jumbo-item/jumdo-item.component";
import { JumboSectionContainer } from "./jumbo-section.styles";
import jumbodata from "./data/jumbo.data.json";

const JumboSection = () => {
  return (
    <JumboSectionContainer>
      {jumbodata.map((item) => (
        <JumboItem key={item.id} {...item} />
      ))}
    </JumboSectionContainer>
  );
};

export default JumboSection;
