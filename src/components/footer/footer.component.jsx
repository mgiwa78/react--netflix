import {
  FooterBigLink,
  FooterColumn,
  FooterContainer,
  FooterLink,
  FooterRow,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterRow>
        <FooterBigLink>Questions? Contact Us</FooterBigLink>
      </FooterRow>
      <FooterRow>
        <FooterColumn>
          <FooterLink>FAQ</FooterLink>
          <FooterLink>Inveestor Relations</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Speed Test</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Help Center</FooterLink>
          <FooterLink>Jobs</FooterLink>
          <FooterLink>Cookie Prefrences</FooterLink>
          <FooterLink>Legal Notices</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Account</FooterLink>
          <FooterLink>Ways to watch</FooterLink>
          <FooterLink>Corporate Information</FooterLink>
          <FooterLink>Only on Netflix</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Media Center</FooterLink>
          <FooterLink>Terms of Use</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </FooterColumn>
      </FooterRow>
      <FooterRow>
        <FooterLink>Netflix Nigeria</FooterLink>
      </FooterRow>
    </FooterContainer>
  );
};

export default Footer;
