import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { data } from './Data';

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'Name',
        header: 'Name',
      },
      {
        accessorKey: 'email',
        header: 'email',
      },
      {
        accessorKey: 'age',
        header: 'age',
      },
      {
        accessorKey: 'id',
        header: 'id',
      },
      {
        accessorKey: 'registrationDate',
        header: 'registrationDate',
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true,
    enableColumnResizing: true,
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
