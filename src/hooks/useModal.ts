import { useState } from 'react';
import { Form } from 'antd';
import dayjs from 'dayjs';
import type { DataType } from './useTableData';

export const useModal = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [editingRecord, setEditingRecord] = useState<DataType | null>(null);
	const [form] = Form.useForm();

	const openAddModal = () => {
		setEditingRecord(null);
		form.resetFields();
		setIsModalVisible(true);
	};

	const openEditModal = (record: DataType) => {
		setEditingRecord(record);
		form.setFieldsValue({
			name: record.name,
			date: dayjs(record.date),
			value: record.value
		});
		setIsModalVisible(true);
	};

	const closeModal = () => {
		setIsModalVisible(false);
		form.resetFields();
	};

	const handleModalOk = async (
		onAdd: (values: any) => void,
		onUpdate: (record: DataType, values: any) => void
	) => {
		try {
			const values = await form.validateFields();

			if (editingRecord) {
				onUpdate(editingRecord, values);
			} else {
				onAdd(values);
			}

			closeModal();
		} catch (error) {
			console.error('Validation failed:', error);
		}
	};

	return {
		isModalVisible,
		editingRecord,
		form,
		openAddModal,
		openEditModal,
		closeModal,
		handleModalOk
	};
};