<template>
	<div class="table__ledger">
		<table>
			<tbody>
				<tr>
					<td colspan="2" style="text-align: center; background-color: var(--bg)"><b>Kas</b> <span style="float: right;">101</span></td>
				</tr>
				<tr width="600" class="table__ledger__tr">
					<td>Sept. 1, <span style="float:right;">100.000</span> <br>Sept. 2, <span style="float:right;">12.000</span></td>
					<td>&nbsp;</td>
				</tr>
				</tr>
			</tbody>
		</table>
		<table>
			<tbody>
				<tr>
					<td colspan="2" style="text-align: center; background-color: var(--bg)"><b>Pendapatan diterima di muka</b> <span style="float: right;">209</span></td>
				</tr>
				<tr width="600" class="table__ledger__tr">
					<td>&nbsp;</td>
					<td>Sept. 1, <span style="float:right;">12.000</span></td>
				</tr>
			</tbody>
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
.table__ledger {
	width: 100%;
	display: grid;
	grid-gap: 1rem;
	overflow-x: auto;
	margin-bottom: 2.5rem;
	box-sizing: border-box;
	grid-template-columns: 1fr 1fr;
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}

	table {
		width: 100%;
		overflow-x: auto;
		box-sizing: border-box;

		tbody > .table__ledger__tr {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
}
</style>