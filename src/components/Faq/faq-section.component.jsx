import FaqItem from "../faq-item/faq-item.component";
import { FaqContainer, FaqHeader } from "./faq-section.styles";
import Faqs from "./faqs.json";

const FaqSecction = () => {
  return (
    <FaqContainer>
      <FaqHeader>Frequently Asked Questions</FaqHeader>
      {Faqs.map(({ id, question, answer }) => (
        <FaqItem key={id} question={question} answer={answer} />
      ))}
    </FaqContainer>
  );
};

export default FaqSecction;
