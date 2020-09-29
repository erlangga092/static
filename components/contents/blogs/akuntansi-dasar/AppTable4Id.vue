<template>
	<div class="table__jurnal__umum">
		<table>
			<thead>
				<tr>
					<th colspan="7" style="background-color: var(--bg);">Jurnal Umum</th>
				</tr>
				<tr>
					<th>Tanggal</th>
					<th colspan="3">Keterangan</th>
					<th>Ref</th>
					<th>Debet</th>
					<th>Kredit</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2020 Sept. <span style="float: right;">1</span></td>
					<td class="table__jurnal__umum__akun" colspan="3">Kas <br> &nbsp; Saham biasa <br>&nbsp; (Menerbitkan saham)</td>
					<td></td>
					<td>500.000</td>
					<td>&nbsp; <br>500.000</td>
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
.table__jurnal__umum {
	width: 100%;
	overflow: auto;
	box-sizing: bolder-box;

	table {
		width: 100%;
		overflow: auto;
		box-sizing: border-box;
		table-layout: fixed;
		@media screen and (max-width: 768px) {
			width: 200%;
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