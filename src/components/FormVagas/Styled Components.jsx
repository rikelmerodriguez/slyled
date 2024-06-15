import styled from 'styled-components';

// Variáveis de cores
const corPrincipal = '#your-primary-color';
const corSecundaria = '#your-secondary-color';

// Vagas
const Vagas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Vaga
const Vaga = styled.div`
  border: 1px solid ${corPrincipal};
  background-color: ${corSecundaria};
  color: ${corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${corPrincipal};
    color: ${corSecundaria};
  }

  &:hover a {
    border-color: ${corPrincipal};
    background-color: ${corSecundaria};
    color: ${corPrincipal};
  }
`;

// Vaga Titulo
const VagaTitulo = styled.div`
  font-weight: bold;
  margin-bottom: 16px;
`;

// Vaga Link
const VagaLink = styled.a`
  border-color: ${corSecundaria};
  background-color: ${corPrincipal};
  color: ${corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Form
const Form = styled.div`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${corPrincipal};
    content: '';
    opacity: 0.7;
  }

  div {
    position: relative;
    color: #eee;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`;

// Hero Title
const HeroTitle = styled.h1`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

// Cabecalho
const Cabecalho = styled.header`
  background-color: ${corSecundaria};
  color: ${corPrincipal};
  text-align: center;
  padding: 24px 0;
`;

// Formulario
const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`;

// Botão Pesquisar
const BtnPesquisar = styled.button`
  background-color: ${corPrincipal};
  border: 1px solid ${corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`;

// Campo
const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${corPrincipal};
`;

// Exemplo de uso dos componentes estilizados
const App = () => {
  return (
    <>
      <Cabecalho>Header Content</Cabecalho>
      <Form>
        <div>
          <HeroTitle>Hero Title</HeroTitle>
        </div>
      </Form>
      <Formulario>
        <Campo placeholder="Digite algo..." />
        <BtnPesquisar>Pesquisar</BtnPesquisar>
      </Formulario>
      <Vagas>
        <Vaga>
          <VagaTitulo>Título da Vaga</VagaTitulo>
          <p>Descrição da vaga.</p>
          <VagaLink href="#">Saiba mais</VagaLink>
        </Vaga>
        {/* Adicione mais componentes <Vaga> conforme necessário */}
      </Vagas>
    </>
  );
};

export default App;
