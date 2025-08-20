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
			title={editingRecord ? 'Редактировать запись' : 'Добавить запись'}
			open={isVisible}
			onOk={onOk}
			onCancel={onCancel}
			okText="Сохранить"
			cancelText="Отмена"
		>
			<Form
				form={form}
				layout="vertical"
				name="recordForm"
			>
				<Form.Item
					name="name"
					label="Имя"
					rules={[
						{ required: true, message: 'Пожалуйста, введите имя!' },
						{ min: 2, message: 'Имя должно содержать минимум 2 символа!' }
					]}
				>
					<Input placeholder="Введите имя" />
				</Form.Item>

				<Form.Item
					name="date"
					label="Дата"
					rules={[
						{ required: true, message: 'Пожалуйста, выберите дату!' }
					]}
				>
					<DatePicker
						style={{ width: '100%' }}
						placeholder="Выберите дату"
						format="YYYY-MM-DD"
					/>
				</Form.Item>

				<Form.Item
					name="value"
					label="Числовое значение"
					rules={[
						{ required: true, message: 'Пожалуйста, введите числовое значение!' },
						{ type: 'number', min: 0, message: 'Значение должно быть положительным!' }
					]}
				>
					<InputNumber
						style={{ width: '100%' }}
						placeholder="Введите числовое значение"
						min={0}
					/>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default EntryModal;