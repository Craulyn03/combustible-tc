import React from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  Stack,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import "../style/registro.css";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onsubmit = async (data) => {
    await supabase.from("combustible").insert([data]);
    navigate("/");
  };

  return (
    <div className="container-principal">
      <h2 className="title">Registro de combustible</h2>

      <form onSubmit={handleSubmit(onsubmit)}>
        <label htmlFor="chofer">Seleccione el Chofer Correspondiente</label>
        <Select
          {...register("chofer", {
            required: true,
          })}
          placeholder="CHOFERES"
        >
          <option value="Mayobanex">Mayobanex</option>
          <option value="Crucito">Crucito</option>
          <option value="Kendris">Kendris</option>
          <option value="Wilson">Wilson</option>
          <option value="Adriano">Adriano</option>
          <option value="Emiliano">Emiliano</option>
          <option value="Kero">Kero</option>
          <option value="Adon">Adon</option>
          <option value="Peguero">Jose Peguero</option>
          <option value="Jesus Gonzalez">Jesus Gonzalez</option>
          <option value="Jesus Morillo">Jesus Morillo</option>
          <option value="Marcos Morillo">Marcos Morillo</option>
          <option value="Marcos Morillo">Marcos Garcia</option>
        </Select>
        <div className="error-container">
          {errors.chofer?.type === "required" && (
            <p className="error">Campo Requerido</p>
          )}
        </div>

        <label htmlFor="choferes">Seleccione la ficha Correspondiente</label>
        <Select
          {...register("ficha", {
            required: true,
          })}
          placeholder="FICHAS DE COMBUSTIBLE"
        >
          <option value="F-14">F-14</option>
          <option value="F-15">F-15</option>
          <option value="F-16">F-16</option>
          <option value="F-17">F-17</option>
          <option value="F-18">F-18</option>
          <option value="F-19">F-19</option>
          <option value="F-20">F-20</option>
          <option value="F-21">F-21</option>
          <option value="F-22">F-22</option>
          <option value="F-23">F-23</option>
          <option value="F-24">F-24</option>
          <option value="F-25">F-25</option>
          <option value="F-26">F-26</option>
          <option value="F-33">F-33</option>
          <option value="F-34">F-34</option>
        </Select>
        <div className="error-container">
          {errors.ficha?.type === "required" && (
            <p className="error">Campo Requerido</p>
          )}
        </div>

        <label htmlFor="fecha">Fecha</label>
        <div>
          <input
            {...register("fecha", {
              required: true,
            })}
            type="date"
            className="fecha"
          />
        </div>
        <div className="error-container">
          {errors.fecha?.type === "required" && (
            <p className="error">Campo Requerido</p>
          )}
        </div>

        <label htmlFor="monto">Monto</label>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="$"
            />

            <Input
              {...register("monto", {
                required: true,
                minLength: 3,
              })}
              placeholder="Monto"
              type="number"
            />
            <InputRightElement children={<CheckIcon color="green.500" />} />
          </InputGroup>
        </Stack>

        <div className="error-container">
          {errors.monto?.type === "required" && (
            <p className="error">Campo Requerido</p>
          )}
        </div>

        <div className="error-container">
          {errors.monto?.type === "minLength" && (
            <p className="error">El minimo es $100</p>
          )}
        </div>
        <Button colorScheme="blue" type="submit" className="btn">
          Guardar Cambios
        </Button>
      </form>
    </div>
  );
};

export default Registro;
