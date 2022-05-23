import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import "../style/balancetotal.css";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useStore } from "../store";

const Main = () => {
  const [tarjetas, setTarjetas] = useState([]);

  const usuarios = useStore((store) => store.usuarios);
  const setUsuarios = useStore((store) => store.setUsuarios);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("tarjetas").select();
      setTarjetas(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("combustible").select();
      setUsuarios(data);
    };
    getData();
  }, [setUsuarios]);

  let balance = 0;

  for (let el of tarjetas) {
    balance = balance + el.balance;
  }

  let consumo = 0;

  for (let el of usuarios) {
    consumo = consumo + el.monto;
  }

  return (
    <div className="balancetotal-container">
      <h2 className="balance-title">MONTO TOTAL DE COMBUSTIBLE</h2>
      <Stat className="balance-container">
        <StatLabel className="balance-label">Monto Disponible</StatLabel>
        <StatNumber> $ {balance - consumo} </StatNumber>
        <StatHelpText>15 Febrero - 30 Febrero</StatHelpText>
      </Stat>
      <ButtonGroup className="btn-container">
        <Link to="/registro-combustible">
          <Button colorScheme="blue">REGISTRAR CONSUMOS</Button>
        </Link>
        <Link to="/balance-detallado">
          <Button colorScheme="blue" className="main-btn">
            BALANCE DETALLADO
          </Button>
        </Link>

        <Link to="/detalle-combustible">
          <Button colorScheme="blue" className="main-btn">
            CONSUMOS DETALLADOS
          </Button>
        </Link>
      </ButtonGroup>
    </div>
  );
};

export default Main;
