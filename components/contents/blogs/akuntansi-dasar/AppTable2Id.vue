<template>
	<div class="table__rumus" style="width: 100%; display: flex; justify-content: center; margin-bottom: 1.75rem; box-sizing: border-box; overflow-x: scroll;">
		<table style="width: 100%;">
			<thead>
				<tr>
					<th>Aktiva <br>(Assets)</th>
					<th>=</th>
					<th>Kewajiban <br>(Liabilitas)</th>
					<th>+</th>
					<th>Ekuitas Pemegang Saham <br>(Stockholders Equity)</th>
				</tr>
			</thead>
		</table>
	</div>
</template>

<script>
import AppTableBase from './AppTableBase';

export default {
	extends: AppTableBase
}
</script>