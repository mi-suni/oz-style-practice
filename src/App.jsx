import { styled, createGlobalStyle } from 'styled-components'
import { flexMixin } from "./styled";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

const StyleSection = styled.section`
  ${flexMixin({
    justify: 'center',
    align: 'center',
    wrap: 'wrap',
    gap: '20px',  
  })}
  padding: 20px 40px;
`

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  }

  body {
    background-color: #121212;
  }
`

function App() {
  return (
    <main>
      <GlobalStyle />
      <Header />
      <StyleSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyleSection>
    </main>
  );
}

export default App;
