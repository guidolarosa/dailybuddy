import styled from 'styled-components'
import Navbar from './Navbar';

const Header = (props : any) => {

  const {
    setFontSize,
    fontSize,
    setCurrentTheme,
    currentTheme,
    nextTheme,
  } = props;

  return (
    <StyledHeader>
      <Navbar {...props} />
    </StyledHeader>
  )
};

const StyledHeader = styled.header`
  border-bottom: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
  grid-area: header;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.backgroundExtraDark};
`;

export default Header;