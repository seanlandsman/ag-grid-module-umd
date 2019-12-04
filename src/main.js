export * from "@ag-grid-community/core";
export * from '@ag-grid-enterprise/core';
export * from '@ag-grid-community/client-side-row-model';
export * from '@ag-grid-community/csv-export';
export * from '@ag-grid-community/infinite-row-model';
export * from '@ag-grid-enterprise/clipboard';
export * from '@ag-grid-enterprise/excel-export';
export * from '@ag-grid-enterprise/menu';
export * from '@ag-grid-enterprise/row-grouping';
export * from '@ag-grid-enterprise/set-filter';
export * from '@ag-grid-enterprise/viewport-row-model';

import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-balham.css";

// start of optional block
// if you don't "self-register" the modules then you need to supply them to the grid
// at instantiation time. See https://www.ag-grid.com/javascript-grid-modules/ for more information
import {ModuleRegistry} from "@ag-grid-community/core";
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {CsvExportModule} from '@ag-grid-community/csv-export';
import {InfiniteRowModelModule} from '@ag-grid-community/infinite-row-model';
import {ClipboardModule} from '@ag-grid-enterprise/clipboard';
import {ExcelExportModule} from '@ag-grid-enterprise/excel-export';
import {MenuModule} from '@ag-grid-enterprise/menu';
import {RowGroupingModule} from '@ag-grid-enterprise/row-grouping';
import {SetFilterModule} from '@ag-grid-enterprise/set-filter';
import {ViewportRowModelModule} from '@ag-grid-enterprise/viewport-row-model';

ModuleRegistry.register(ClientSideRowModelModule);
ModuleRegistry.register(CsvExportModule);
ModuleRegistry.register(InfiniteRowModelModule);
ModuleRegistry.register(ClipboardModule);
ModuleRegistry.register(ExcelExportModule);
ModuleRegistry.register(MenuModule);
ModuleRegistry.register(RowGroupingModule);
ModuleRegistry.register(SetFilterModule);
ModuleRegistry.register(ViewportRowModelModule);
// end of optional block
