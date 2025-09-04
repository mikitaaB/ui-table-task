import type { ColumnsType } from 'antd/es/table';
import { ActionButtons } from './ActionButtons';
import type { DataType } from '../hooks/useTableData';

interface TableColumnsProps {
	onEdit: (record: DataType) => void;
	onDelete: (key: string) => void;
}

export const createTableColumns = (
	{ onEdit, onDelete }: TableColumnsProps
): ColumnsType<DataType> => [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			width: '40%',
			sorter: (a, b) => a.name.localeCompare(b.name),
			sortDirections: ['ascend', 'descend']
		},
		{
			title: 'Date',
			dataIndex: 'date',
			key: 'date',
			width: '40%',
			sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
			sortDirections: ['ascend', 'descend']
		},
		{
			title: 'Numeric Value',
			dataIndex: 'value',
			key: 'value',
			width: '20%',
			sorter: (a, b) => a.value - b.value,
			sortDirections: ['ascend', 'descend']
		},
		{
			title: 'Actions',
			key: 'actions',
			width: '10%',
			render: (_, record) => (
				<ActionButtons
					record={record}
					onEdit={onEdit}
					onDelete={onDelete}
				/>
			)
		}
	];