import {  useState } from "react";
import {
  FaqAnswer,
  FaqItemConstiner,
  FaqQuestion,
  FaqTitle,
  PlusIcon,
} from "./faq-item.styles";

const FaqItem = ({ id, answer, question }) => {
  const [toggle, toggleState] = useState(false);

  const handleToggle = () => {
    // if (toggle === true) {
    //   toggleState("changeState");
    //   console.log(toggle);
    // } else {
    //   toggleState(true);
    // }
    toggleState(!toggle);
  };

  return (
    <FaqItemConstiner>
      <FaqQuestion>
        <FaqTitle>{question}</FaqTitle>
        <PlusIcon onClick={handleToggle} />
      </FaqQuestion>
      <FaqAnswer showToggle={toggle}>{answer}</FaqAnswer>
    </FaqItemConstiner>
  );
};
export default FaqItem;
