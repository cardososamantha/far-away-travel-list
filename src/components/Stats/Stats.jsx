/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */

export default function Stats({ items }) {
	if (!items.length) {
		return (
			<footer className='stats'>
				Starting adding some itens to your packing list 🚀
			</footer>
		);
	}

	const numItems = items.length;
	const numOfPackedItems = items.filter((item) => item.packed).length;
	const percentOfPackedItems = Math.round((numOfPackedItems / numItems) * 100);

	return (
		<footer className='stats'>
			{percentOfPackedItems === 100
				? 'You got evething! Ready to go! ✈️'
				: `You have ${numItems} itens on your list and you already packed ${numOfPackedItems} (${
						percentOfPackedItems ? percentOfPackedItems : 0
				  }%) of them.`}
		</footer>
	);
}
