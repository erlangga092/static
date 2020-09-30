<template>
	<div class="table__ledger">
		<table>
			<tbody>
				<tr>
					<td colspan="2" style="text-align: center; background-color: var(--bg)"><b>Kas</b> <span style="float: right;">101</span></td>
				</tr>
				<tr width="600" class="table__ledger__tr">
					<td>Sept. 1, <span style="float:right;">100.000</span> <br>Sept. 2, <span style="float:right;">12.000</span> <br>Sept. 30, <span style="float: right;">28.000</span></td>
					<td>Sept. 3, <span style="float:right;">9.000</span> <br>Sept. 4, <span style="float: right;">6.000</span> <br>Sept. 20, <span style="float: right;">5.000</span> <br>Sept. 26, <span style="float:right;">40.000</span> <br>&nbsp;</td>
				</tr>
			</tbody>
		</table>
		<table>
			<tbody>
				<tr>
					<td colspan="2" style="text-align: center; background-color: var(--bg)"><b>Piutang Usaha</b> <span style="float: right;">112</span></td>
				</tr>
				<tr width="600" class="table__ledger__tr">
					<td>Sept. 30, <span style="float:right;">72.000</span></td>
					<td>&nbsp;</td>
				</tr>
			</tbody>
		</table>
		<table>
			<tbody>
				<tr>
					<td colspan="2" style="text-align: center; background-color: var(--bg)"><b>Pendapatan Jasa</b> <span style="float: right;">400</span></td>
				</tr>
				<tr width="600" class="table__ledger__tr">
					<td>&nbsp;</td>
					<td>Sept. 30, <span style="float:right;">100.000</span></td>
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
