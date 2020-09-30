<template>
	<div class="table__jurnal__ayat">
		<table>
			<tbody>
				<tr>
					<td style="background-color: var(--bg); vertical-align: middle;">Sept. <span style="float: right;">1</span></td>
					<td>Kas <br> &nbsp; Saham Biasa <br> &nbsp; (Menerbitkan saham)</td>
					<td>101 <br>311</td>
					<td>100.000 <br> &nbsp; </td>
					<td>&nbsp; <br> 100.000 </td>
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
.table__jurnal__ayat {
	width: 100%;
	overflow: auto;
	box-sizing: bolder-box;
	margin-bottom: 1.75rem;

	table {
		width: 100%;
		overflow: auto;
		box-sizing: border-box;
		@media screen and (max-width: 768px) {
			width: 190%;
		}

		> tbody > tr > td {
			vertical-align: top;
		}

		> .table__jurnal__umum__akun {
			box-sizing: border-box;
		}
	}
}
</style>