import { useState } from 'react';
import { message } from 'antd';

export interface DataType {
	key: string;
	name: string;
	date: string;
	value: number;
}

const initialData: DataType[] = [
	{
		key: '1',
		name: 'Иван Иванов',
		date: '2024-01-15',
		value: 1000
	},
	{
		key: '2',
		name: 'Петр Петров',
		date: '2024-02-20',
		value: 2500
	}
];

export const useTableData = () => {
	const [data, setData] = useState<DataType[]>(initialData);
	const [searchText, setSearchText] = useState('');

	const filteredData = data.filter(item =>
		Object.values(item).some(value =>
			value.toString().toLowerCase().includes(searchText.toLowerCase())
		)
	);

	const addRecord = (values: any) => {
		const newRecord: DataType = {
			key: Date.now().toString(),
			name: values.name,
			date: values.date.format('YYYY-MM-DD'),
			value: values.value
		};
		setData(prev => [...prev, newRecord]);
		message.success('Запись добавлена');
	};

	const updateRecord = (editingRecord: DataType, values: any) => {
		const updatedRecord: DataType = {
			key: editingRecord.key,
			name: values.name,
			date: values.date.format('YYYY-MM-DD'),
			value: values.value
		};
		setData(prev => prev.map(item =>
			item.key === editingRecord.key ? updatedRecord : item
		));
		message.success('Запись обновлена');
	};

	const deleteRecord = (key: string) => {
		setData(prev => prev.filter(item => item.key !== key));
		message.success('Запись удалена');
	};

	const handleSearch = (value: string) => {
		setSearchText(value);
	};

	return {
		data,
		filteredData,
		searchText,
		addRecord,
		updateRecord,
		deleteRecord,
		handleSearch
	};
};