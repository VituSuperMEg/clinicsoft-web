import styled from "styled-components";

export const Table = styled.table`
  width: 100%;


  tbody {
   td {
    padding: 20px 0;
   }
    tr {
      &:nth-child(odd) {
        background-color: #f2f2f2;
      }

      &:nth-child(even) {
        background-color: #fff;
      }
    }
  }
`;
