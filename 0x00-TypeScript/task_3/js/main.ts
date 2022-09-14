/// <reference path="./crud.d.ts"/>

import { RowId, RowElement } from '../interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

const newRowID: RowId = CRUD.insertRow(row);

row['age'] = 23;
const updatedRow: RowElement = row;

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
