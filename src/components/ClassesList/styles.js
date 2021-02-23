import styled from 'styled-components'

const ClassesListWrapper = styled.div`
  max-width: 1000px;
  display: table;
  border-collapse: collapse;
  margin-bottom: 20px;
`

export const Row = styled.div`
  display: table-row;
  border: 1px solid #ebebeb;
`

export const Column = styled.div`
  display: table-cell;
  padding: 5px 10px;
`

export default ClassesListWrapper
