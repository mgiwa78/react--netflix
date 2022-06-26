import {
  JumboBody,
  JumboBox,
  JumboImage,
  JumboTitle,
  JumdoItemContainer,
} from "./jumbo-item.styles";

const JumboItem = ({ padding, image, title, body, id, direction }) => {
  console.log(image);
  return (
    <JumdoItemContainer direction={direction}>
      <JumboBox padding={padding}>
        <JumboTitle>{title}</JumboTitle>
        <JumboBody>{body}</JumboBody>
      </JumboBox>
      {image ? <JumboImage src={image}></JumboImage> : ""}
    </JumdoItemContainer>
  );
};

export default JumboItem;
