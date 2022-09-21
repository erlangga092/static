<template>
  <div class="table__jurnal__1">
    <table>
      <tbody>
        <tr>
          <td rowspan="2" width="100" style="background-color: var(--bg)">
            1 Sept.
          </td>
          <td>
            Pemegang saham menginvestasikan kas sebesar Rp500.000 dalam
            perusahaan yang ditukar dengan lembar saham
          </td>
        </tr>
        <tr>
          <td>Membeli peralatan kantor seharga Rp100.000 secara tunai</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AppTableBase from "./AppTableBase";

export default {
  extends: AppTableBase,
};
</script>

<style lang="postcss">
.table__jurnal__1 {
  width: 100%;
  overflow-x: auto;
  margin-bottom: 1.75rem;
  box-sizing: border-box;
  table {
    table-layout: fixed;
    overflow-x: auto;
  }
}
</style>
