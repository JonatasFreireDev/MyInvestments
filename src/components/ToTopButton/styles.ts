import styled from 'styled-components';

interface IButton {
  isVisible: boolean;
}

export const ToTop = styled.a<IButton>`
  transition: all 0.5s;
  display: ${props =>
    props.isVisible ? 'block' : 'none'}; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: white; /* Set a background color */
  color: black; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 10px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 25px; /* Increase font size */
  box-shadow: 0px 0px 10px rgb(0 0 0 / 70%);

  &:hover {
    background-color: ${props =>
      props.theme.button
        .primaryColor}; /* Add a dark-grey background on hover */
  }
`;
