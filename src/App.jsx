import { useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

function App() {
	const [items, setItems] = useState([]);

	function handleAddItem(item) {
		setItems((items) => [...items, item]);
	}

	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function handleClearList() {
		const isConfirmed = window.confirm(
			'Are you sure you want to delete the entire list?'
		);

		if (isConfirmed) setItems([]);
	}

	return (
		<>
			<Header />
			<Form onAddItems={handleAddItem} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</>
	);
}

export default App;
