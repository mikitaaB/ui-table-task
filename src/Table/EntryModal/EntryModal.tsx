import {
	Modal,
	Form,
	Input,
	DatePicker,
	InputNumber
} from 'antd';

interface DataType {
	key: string;
	name: string;
	date: string;
	value: number;
}

interface EntryModalProps {
	isVisible: boolean;
	editingRecord: DataType | null;
	form: any;
	onOk: () => void;
	onCancel: () => void;
}

const EntryModal = ({
	isVisible,
	editingRecord,
	form,
	onOk,
	onCancel
}: EntryModalProps) => {
	return (
		<Modal
			title={editingRecord ? 'Edit Record' : 'Add Record'}
			open={isVisible}
			onOk={onOk}
			onCancel={onCancel}
			okText="Save"
			cancelText="Cancel"
		>
			<Form
				form={form}
				layout="vertical"
				name="recordForm"
			>
				<Form.Item
					name="name"
					label="Name"
					rules={[
						{ required: true, message: 'Please enter a name!' },
						{ min: 2, message: 'Name must contain at least 2 characters!' }
					]}
				>
					<Input placeholder="Enter name" />
				</Form.Item>

				<Form.Item
					name="date"
					label="Date"
					rules={[
						{ required: true, message: 'Please select a date!' }
					]}
				>
					<DatePicker
						style={{ width: '100%' }}
						placeholder="Select date"
						format="YYYY-MM-DD"
					/>
				</Form.Item>

				<Form.Item
					name="value"
					label="Numeric Value"
					rules={[
						{ required: true, message: 'Please enter a numeric value!' },
						{ type: 'number', min: 0, message: 'Value must be positive!' }
					]}
				>
					<InputNumber
						style={{ width: '100%' }}
						placeholder="Enter numeric value"
						min={0}
					/>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default EntryModal;