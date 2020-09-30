<template>
	<div class="table__ledger">
		<table>
			<tbody>
				<tr>
					<td colspan="2" style="text-align: center; background-color: var(--bg)"><b>Perlengkapan Kantor</b> <span style="float: right;">157</span></td>
				</tr>
				<tr width="600" class="table__ledger__tr">
					<td>Sept. 1, <span style="float:right;">50.000</span></td>
					<td>&nbsp;</td>
				</tr>
			</tbody>
		</table>
		<table>
			<tbody>
				<tr>
					<td colspan="2" style="text-align: center; background-color: var(--bg)"><b>Wesel Bayar</b> <span style="float: right;">200</span></td>
				</tr>
				<tr width="600" class="table__ledger__tr">
					<td>&nbsp;</td>
					<td>Sept. 1, <span style="float:right;">50.000</span></td>
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