import React, { useState } from "react";
import "./Form.css";
import { TextInput } from "./components/TextInput";
import { ListSelect } from "./components/ListSelect/ListSelect";
import { Button } from "./components/Button";

export const Form = (props) => {
  const timeList = [
    "",
    "Programação",
    "Frontend",
    "Data Science",
    "DevOps",
    "Mobile",
    "Inovação e Gestão",
  ];
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [image, setImage] = useState();
  const [team, setTeam] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.isRegistered({
      name,
      role,
      image,
      team,
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextInput
          isRequired
          fieldValue={name}
          isChange={(value) => setName(value)}
          label="Nome"
        />
        <TextInput
          isRequired
          fieldValue={role}
          isChange={(value) => setRole(value)}
          label="Cargo"
        />
        <TextInput
          fieldValue={image}
          isChange={(value) => setImage(value)}
          label="Imagem"
        />
        <ListSelect
          isRequired
          fieldValue={team}
          isChange={(value) => setTeam(value)}
          label="Time"
          itens={timeList}
        />
        <Button> Criar card </Button>
      </form>
    </section>
  );
};
