import { useCallback, type ChangeEvent } from 'react';
import { Button, Input, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import debounce from "lodash/debounce";

interface TableControlsProps {
	onAdd: () => void;
	onSearch: (value: string) => void;
	searchValue: string;
}

const TableControls = ({ onAdd, onSearch, searchValue }: TableControlsProps) => {
	const debouncedSearch = useCallback(
		debounce((value: string) => {
			onSearch(value);
		}, 300),
		[onSearch]
	);

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		debouncedSearch(value);
	};

	return (
		<Space>
			<Button
				type="primary"
				icon={<PlusOutlined />}
				onClick={onAdd}
			>
				{"Add"}
			</Button>
			<Input.Search
				placeholder={"Search in all fields..."}
				defaultValue={searchValue}
				onChange={handleSearchChange}
				style={{ width: 300 }}
				allowClear
			/>
		</Space>
	);
};

export default TableControls;