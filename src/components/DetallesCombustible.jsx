import React, { useEffect } from "react";
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
import { supabase } from "../supabaseClient";
import { useStore } from "../store";

const DetallesCombustible = () => {
  // const [usuarios, setUsuarios] = useState([]);
  const usuarios = useStore((store) => store.usuarios);
  const setUsuarios = useStore((store) => store.setUsuarios);

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("combustible").select();
      setUsuarios(data);
    };
    getData();
  }, [setUsuarios]);

  let consumo = 0;

  for (let el of usuarios) {
    consumo = consumo + el.monto;
  }

  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>CONSUMO DE COMBUSTIBLE</TableCaption>
          <Thead>
            <Tr>
              <Th>chofer</Th>
              <Th>ficha</Th>
              <Th>fecha</Th>
              <Th>consumo</Th>
            </Tr>
          </Thead>
          <Tbody>
            {usuarios.map((el) => (
              <Tr key={el.id}>
                <Td>{el.chofer}</Td>
                <Td>{el.ficha} </Td>
                <Td>{el.fecha} </Td>
                <Td>{el.monto} </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>total de choferes {usuarios.length} </Th>
              <Th>total de fichas {usuarios.length} </Th>
              <Th> N/A </Th>
              <Th>Consumo Total {consumo}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};
export default DetallesCombustible;
