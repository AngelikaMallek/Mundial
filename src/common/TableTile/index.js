import { Container } from "../Container";
import { Table, TableTr, TableTd } from "./styled";


const TableTile = ({ test }) => {

    return(
        <Container >
            <Table>
            <TableTr>
                <TableTd>{test}</TableTd>
            </TableTr>
            </Table>
        </Container>
    )
};

export default TableTile;