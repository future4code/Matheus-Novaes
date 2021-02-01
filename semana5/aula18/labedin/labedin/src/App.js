import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoMinha from '../src/imagem/pp.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno'
import IconeDoEmail from '../src/imagem/icone-do-email.png'
import IconeDaLocal from '../src/imagem/icone-da-localizacao.png'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoMinha} 
          nome="Matheus" 
          descricao="Olá, sou estudante da Labenu e adoro fazer as atividades, que os professores pedem, todas elas, sao otimos desafios."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
                     imagem={IconeDoEmail}
                     TipoDeInfo="Email: "         
                     DescricaoDaInfo="matheus.novaes998@gmail.com"  
        />
      
      <CardPequeno    
                      imagem={IconeDaLocal}
                      TipoDeInfo="Endereço: "        
                      DescricaoDaInfo="Rua Amazonas"
        />
            
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
