import React from "react";
import "./styles/PaginaDeLogin.css";
import "./styles/styles.css";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import PaginaDeLogin from "./components/PaginaDeLogin";
import CampoDeDigitacao from "./components/CampoDeDigitacao";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import ContainerLinks from "./components/containerLinks";


function App() {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');




  return (
    <>  
      <PaginaDeLogin email={ email} senha={senha}>
        <Title />
        <SubTitle />
        <CampoDeDigitacao
          label="Email ou Usuário"
          tipo="email"
          placeholder="Email ou Usuário"
          value={email}
          setValue={setEmail}
          />
        <CampoDeDigitacao
          label="Senha"
          tipo="password"
          placeholder="Informe sua Senha"
          value={senha}
          setValue={setSenha}
        />
        <fieldset className="form__opcoes">
          <Checkbox />
          <p>
            <a href="#">Esqueci minha senha</a>
          </p>
        </fieldset>
        <Button />
       <ContainerLinks/>
      </PaginaDeLogin>
    </>
  );
}

export default App;
