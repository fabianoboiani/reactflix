import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from '../src/data/dados_iniciais.json';
import BannerMain from './components/BannerMain';


function App() {
  return (
    <div>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na Area"}
      />
    </div>
  );
}

export default App;
