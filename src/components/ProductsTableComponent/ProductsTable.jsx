import React from 'react';
import MaterialTable from 'material-table';
import tableIcons from 'components/MaterialTableIcons/MaterialTableIcons';
import {
    SEARCH_PLACEHOLDER,
    TABLE_TITLES,
    TABLE_FIELDS,
    TABLE_TYPES,
    CURRENCY,
    HEADER_STYLE,
    CLASS_NAMES,
    PAGINATION,
    EMPTY_DATA_MESSAGE,
    EDITABLE
} from './ProductsTableConstants';

const ProductsTable = (props) => {
    return (
        <div className={CLASS_NAMES.CARD_CART}>
            <div className={CLASS_NAMES.CARD_CART_COL}>
                <MaterialTable
                    columns={[
                        {
                            title: TABLE_TITLES.NAME,
                            field: TABLE_FIELDS.NAME,
                            type: TABLE_TYPES.NUMERIC,
                            cellStyle: {
                                textAlign: HEADER_STYLE.TEXT_ALIGN,
                            },
                            editable: EDITABLE
                        },
                        {
                            title: TABLE_TITLES.PRECO,
                            field: TABLE_FIELDS.PRECO,
                            render: (rowData) => `${CURRENCY} ${parseFloat(rowData.amount).toFixed(2)}`,
                            type: TABLE_TYPES.NUMERIC,
                            cellStyle: {
                                textAlign: HEADER_STYLE.TEXT_ALIGN,
                            },
                            editable: EDITABLE
                        },
                        {
                            title: TABLE_TITLES.DESCRIPTION,
                            field: TABLE_FIELDS.DESCRIPTION,
                            cellStyle: {
                                textAlign: HEADER_STYLE.TEXT_ALIGN,
                            },
                            editable: EDITABLE
                        }
                    ]}
                    data={props.ordersArray}
                    title={TABLE_TITLES.TITULO_TABELA}
                    options={{
                        pageSize: 10,
                        headerStyle: HEADER_STYLE
                      }}
                    localization={{
                        toolbar: {
                            searchPlaceholder: SEARCH_PLACEHOLDER
                    },
                    pagination: {
                        firstTooltip: PAGINATION.FIRST_TOOL_TIP,
                        previousTooltip: PAGINATION.PREVIOUS_TOOL_TIP,
                        nextTooltip: PAGINATION.NEXT_TOOL_TIP,
                        lastTooltip: PAGINATION.LAST_TOOL_TIP,
                        labelRowsSelect: PAGINATION.LABEL_ROWS_SECRET,
                    },
                    body: {
                        emptyDataSourceMessage: EMPTY_DATA_MESSAGE
                    }
                    }}
                    icons={tableIcons}
                />
            </div>
        </div>
    );
};

export default ProductsTable;