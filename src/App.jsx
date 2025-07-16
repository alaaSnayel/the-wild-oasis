import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
import Input from "./ui/Input";
import Button from "./ui/Button";

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button
                onClick={() => {
                  alert("Check in");
                }}
              >
                Check in
              </Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => {
                  alert("Check out");
                }}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h2">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
