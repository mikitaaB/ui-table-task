import { Table } from 'antd';
import { useTableData } from '../hooks/useTableData';
import { useModal } from '../hooks/useModal';
import { createTableColumns } from './tableColumns';
import { TableControls } from './TableControls';
import EntryModal from './EntryModal/EntryModal';
import styles from './Table.module.css';

const DataTable = () => {
    const {
        filteredData,
        searchText,
        addRecord,
        updateRecord,
        deleteRecord,
        handleSearch
    } = useTableData();

    const {
        isModalVisible,
        editingRecord,
        form,
        openAddModal,
        openEditModal,
        closeModal,
        handleModalOk
    } = useModal();

    const columns = createTableColumns({
        onEdit: openEditModal,
        onDelete: deleteRecord
    });

    const handleModalSubmit = () => {
        handleModalOk(addRecord, updateRecord);
    };

    return (
        <div className={styles["tableBox"]}>
            <div className={styles["tableControls"]}>
                <TableControls
                    onAdd={openAddModal}
                    onSearch={handleSearch}
                    searchValue={searchText}
                />
            </div>

            <Table
                columns={columns}
                dataSource={filteredData}
                size="large"
                pagination={{
                    pageSize: 10,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} records`
                }}
            />

            <EntryModal
                isVisible={isModalVisible}
                editingRecord={editingRecord}
                form={form}
                onOk={handleModalSubmit}
                onCancel={closeModal}
            />
        </div>
    );
};

export default DataTable;