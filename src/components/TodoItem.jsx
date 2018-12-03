import React from 'react';
import { Table, Checkbox, Button } from 'semantic-ui-react';

const styles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  letterSpacing: "1px",
  marginBottom: "10px"
}
const TodoItem = ({ children }) => {
  return (
    <Table.Row>
      <Table.Cell>
        <Checkbox />
      </Table.Cell>
      <Table.Cell>
        {children}
        <Button color="red" icon="trash" floated="right" compact size="small" />
      </Table.Cell>
    </Table.Row>
  );
}

export default TodoItem;