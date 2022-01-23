import React, { useState, useEffect } from "react";
import axiox from "axios";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  //Não pode usar async/await direto dentro desse método, mas pode usar em uma função temporária
  useEffect(() => {
    /* 1 -   Maluquisse que permite definir a função e já executar ela em seguida
    Muito comum em projetos profissionais
    (async () => {
      await axios.get("https://api.github.com/users/diego3g/repos");
    })();
    */

    // 2 - Forma muito utilizada profissionalmente, criação de uma Promisse
    // axios.get('').then((response) =>{
    //     console.log(response.data);
    // });

    // 3 - Forma mais simples, documetada pelos desenvolvedores
    const search = async () => {
      const { data } = await axios.get("http://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      if (term) setResults(data.query.search);
    };

    search();
  }, [term]);

  /*
    Segundo parametro do useEffect sempre será:
    1 - Vazio(Não informado):  Executa apenas uma vez, na primeira renderização
    2 - Array vazio: executa na primeira renderização e sempre que renderizar(rerender)
        -> Executado sempre depois que o componente for renderizado
    3 - Array com um elemento que é uma variavel do state: Executa a primeira renderização e toda também
    toda vez que o valor da variavel do state for alterado
  */

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          {/* Como transformar string em html no react - Abre portas para XSS */}
          <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
          
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
