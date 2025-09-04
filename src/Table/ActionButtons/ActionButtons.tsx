import { Button, Space, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface DataType {
	key: string;
	name: string;
	date: string;
	value: number;
}

interface ActionButtonsProps {
	record: DataType;
	onEdit: (record: DataType) => void;
	onDelete: (key: string) => void;
}

const ActionButtons = ({ record, onEdit, onDelete }: ActionButtonsProps) => {
	return (
		<Space size="middle">
			<Button
				type="primary"
				icon={<EditOutlined />}
				size="small"
				onClick={() => onEdit(record)}
			/>
			<Popconfirm
				title="Delete record?"
				description="Are you sure you want to delete this record?"
				onConfirm={() => onDelete(record.key)}
				okText="Yes"
				cancelText="No"
			>
				<Button
					type="primary"
					danger
					icon={<DeleteOutlined />}
					size="small"
				/>
			</Popconfirm>
		</Space>
	);
};

export default ActionButtons;
