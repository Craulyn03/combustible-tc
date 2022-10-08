import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import "../style/montotarjetas.css";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const BalanceTarjetas = () => {
  const [tarjetas, setTarjetas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("tarjetas").select();
      setTarjetas(data);
    };

    fetchData();
  }, []);

  let balance = 0;

  for (let el of tarjetas) {
    balance = balance + el.balance;
  }

  // let consumo = 0;

  // for (let el of usuarios) {
  //   consumo = consumo + el.monto;
  // }

  return (
    <div>
      <h2 className="tarjetas-title">BALANCE DE TARJETAS</h2>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            BALANCE GENERAL DE TARJETAS DE COMBUSTIBLE
          </TableCaption>
          <Thead>
            <Tr>
              <Th>tarjetas</Th>
              <Th>balance consumido</Th>
              <Th isNumeric>monto disponible</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tarjetas.map((el) => (
              <Tr key={el.id}>
                <Td>{el.tarjeta}</Td>
                <Td> {el.consumo} </Td>
                <Td isNumeric> {el.balance} </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>total de tarjetas {tarjetas.length} </Th>
              <Th>total de balance consumido ${""}</Th>
              <Th isNumeric>balance totales disponible ${balance} </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BalanceTarjetas;
