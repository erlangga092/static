<template>
	<div class="table__rumus" style="margin-bottom: 1.75rem; box-sizing: border-box; overflow-x: auto;">
		<table>
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

<style lang="postcss">
.table__rumus {
	table {
		width: 100%;
		table-layout: fixed;
		overflow-x: auto;
		@media screen and (max-width: 768px) {
			width: 190%;
		}
	}
}
</style>