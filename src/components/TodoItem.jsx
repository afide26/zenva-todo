import React from 'react';
import { Table, Checkbox, Button } from 'semantic-ui-react';

const TodoItem = ({ children, completed, onChange }) => {
  return (
    <Table.Row positive={completed}>
      <Table.Cell>
        <Checkbox onChange={onChange} />
      </Table.Cell>
      <Table.Cell>
        {children}
        <Button color="red" icon="trash" floated="right" compact size="small" positive={completed} />
      </Table.Cell>
    </Table.Row>
  );
}

export default TodoItem;