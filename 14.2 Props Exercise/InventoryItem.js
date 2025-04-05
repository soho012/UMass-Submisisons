function InventoryItem ({name, type, quantity=0, price=0})
{
	const lowQuantity =  5;
	const highTotalValue = 1000;
	const totalValue = price * quantity;
	
	return (
		<div>
			<h2>
				{name} ({type})
			</h2>
			{
				quantity < lowQuantity
				&&
				<Message>
					<p><span>⚠️</span> Low Stock! {quantity} remained.</p>
				</Message>
			}

			{
				totalValue > highTotalValue
				&&
				<Message>
					<p><span>💰</span> High value - consider extra protection!</p>
				</Message>
			}
		</div>
	);
}
