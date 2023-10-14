/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Form({ onAddItems }) {
	const [quantity, setQuantity] = useState(1);
	const [description, setDescription] = useState('');

	const submitToPackingList = (event) => {
		event.preventDefault();

		if (!description) return;

		const item = {
			description,
			quantity,
			packed: false,
			id: Math.floor(Math.random() * 100),
		};

		onAddItems(item);
		setQuantity(1);
		setDescription('');
	};

	return (
		<form className='add-form' onSubmit={submitToPackingList}>
			<h3>What do you need for your trip?</h3>
			<select
				name='quantity'
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((index) => (
					<option key={index} value={index}>
						{index}
					</option>
				))}
			</select>
			<input
				type='text'
				placeholder='Toothpaste'
				name='item'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button type='submit'>ADD</button>
		</form>
	);
}
