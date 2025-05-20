import "./styles/PaginaDeLogin.css";
import "./styles/styles.css";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import PaginaDeLogin from "./components/PaginaDeLogin";
import CampoDeDigitacao from "./components/CampoDeDigitacao";
import Button from "./components/Button";

function App() {
  return (
    <>
      <PaginaDeLogin>
        <Title />
        <SubTitle />
        <CampoDeDigitacao
          label="Email ou Usuário"
          tipo="email"
          placeholder="Email ou Usuário"
        />
        <CampoDeDigitacao
          label="Senha"
          tipo="password"
          placeholder="Informe sua Senha"
        />
        <Button />
      </PaginaDeLogin>
    </>
  );
}

export default App;
