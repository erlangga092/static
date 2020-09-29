<template>
	<div class="table__account" style="width: 100%; box-sizing: border-box; overflow-x: scroll;">
		<div class="table-1" style="width: 100%; box-sizing: border-box; overflow-x: scroll;">
			<table style="table-layout: fixed;">
				<thead>
					<tr>
						<th colspan="2" style="background-color: var(--bg)">Saldo Normal - Debet <br>Akun Aktiva</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Debet <br>+ (Peningkatan)</td>
						<td>Kredit <br>+ (Penurunan)</td>
					</tr>
				</tbody>
				<thead>
					<tr>
						<th colspan="2" style="background-color: var(--bg)">Akun Beban</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Debet <br>+ (Peningkatan)</td>
						<td>Kredit <br>+ (Penurunan)</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="table-2" style="width: 100%; box-sizing: border-box; overflow-x: scroll;">
			<table>
				<thead>
					<tr>
						<th colspan="2" style="background-color: var(--bg)">Saldo Normal - Kredit <br>Akun Kewajiban</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Debet <br>+ (Penurunan)</td>
						<td>Kredit <br>+ (Peningkatan)</td>
					</tr>
				</tbody>
				<thead>
					<tr>
						<th colspan="2" style="background-color: var(--bg)">Akun Ekuitas</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Debet <br>+ (Penurunan)</td>
						<td>Kredit <br>+ (Peningkatan)</td>
					</tr>
				</tbody>
				<thead>
					<tr>
						<th colspan="2" style="background-color: var(--bg)">Akun Pendapatan</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Debet <br>+ (Penurunan)</td>
						<td>Kredit <br>+ (Peningkatan)</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import AppTableBase from './AppTableBase';

export default {
	extends: AppTableBase
}
</script>

<style lang="postcss">
.table__account {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem;
	@media screen and (max-width: 978px) {
		grid-template-columns: 1fr;
		grid-gap: 2rem;
	}
	.table-1,
	.table-2 {
		width: 100%;
		display: flex;
		justify-content: center;
		table {
			width: 100%;
		}
	}
}
</style>