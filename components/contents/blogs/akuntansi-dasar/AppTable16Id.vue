<template>
	<div class="table__ledger">
		<table>
			<tbody>
				<tr>
					<td colspan="2" style="text-align: center; background-color: var(--bg)"><b>Perlengkapan Iklan</b> <span style="float: right;">126</span></td>
				</tr>
				<tr width="600" class="table__ledger__tr">
					<td>Sept. 5, <span style="float:right;">25.000</span></td>
					<td>&nbsp;</td>
				</tr>
			</tbody>
		</table>
		<table>
			<tbody>
				<tr>
					<td colspan="2" style="text-align: center; background-color: var(--bg)"><b>Utang Usaha</b> <span style="float: right;">201</span></td>
				</tr>
				<tr width="600" class="table__ledger__tr">
					<td>&nbsp;</td>
					<td>Sept. 5, <span style="float:right;">25.000</span></td>
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
