import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  // Jeito padrão de fazer(antigo), aonde o objeto é informado e o parâmetro obtido
  // const images = props.images.map(image => {
  //     return <img key={image.id} src={image.urls.regular} alt={image.description} />
  // });

  // Jeito "novo" de fazer, desestruturando o objeto e obtendo as propriedades dele como se fossem parametros da função
  //const images = props.images.map(({ description, id, urls }) => {
  //No map vai vir o objeto que está dentro do array, com o ({ propriedades do objeto }) se obtém as propriedades do objeto
  //return <img key={id} src={urls.regular} alt={description} />;
  //});

  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
