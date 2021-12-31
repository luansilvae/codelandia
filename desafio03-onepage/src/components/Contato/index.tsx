import React from "react";

import style from "./contato.module.scss";

const Contato: React.FC = () => {
  return (
    <div className={style.Container}>
      <h2>Entre em contato</h2>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Telefone" />
        <textarea placeholder="Mensagem..." rows={4}></textarea>
        <button>Enviar mensagem</button>
      </form>
    </div>
  );
};

export default Contato;
