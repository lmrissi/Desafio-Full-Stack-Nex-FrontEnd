import React from 'react';
import MaterialTable from 'material-table';
import tableIcons from 'components/MaterialTableIcons/MaterialTableIcons';
import {
    SEARCH_PLACEHOLDER,
    TABLE_TITLES,
    TABLE_FIELDS,
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
                            cellStyle: {
                                textAlign: 'center',
                            },
                            editable: EDITABLE
                        },
                        {
                            title: TABLE_TITLES.DESCRIPTION,
                            field: TABLE_FIELDS.DESCRIPTION,
                            cellStyle: {
                                textAlign: 'center',
                            },
                            editable: EDITABLE
                        },
                        {
                            title: TABLE_TITLES.PRECO,
                            field: TABLE_FIELDS.PRECO,
                            cellStyle: {
                                textAlign: 'center',
                            },
                            editable: EDITABLE
                        }
                    ]}
                    data={props.productsArray}
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