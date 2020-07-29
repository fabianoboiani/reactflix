import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';


function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na Area"}
      />

      <Carousel 
        category={dadosIniciais.categorias[0]}
        ignoreFirstVideo
      />
      
        
      <Carousel 
        category={dadosIniciais.categorias[1]}
      />
      <Footer/>
    </div>
  );
}

export default Home;
