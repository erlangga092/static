<template>
  <div class="table__account">
    <div class="table__account__1">
      <table>
        <thead>
          <tr>
            <th colspan="2" style="background-color: var(--bg)">
              Saldo Normal - Debet <br />Akun Aktiva
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Debet <br />+ (Peningkatan)</td>
            <td>Kredit <br />+ (Penurunan)</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th colspan="2" style="background-color: var(--bg)">Akun Beban</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Debet <br />+ (Peningkatan)</td>
            <td>Kredit <br />+ (Penurunan)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table__account__2">
      <table>
        <thead>
          <tr>
            <th colspan="2" style="background-color: var(--bg)">
              Saldo Normal - Kredit <br />Akun Kewajiban
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Debet <br />+ (Penurunan)</td>
            <td>Kredit <br />+ (Peningkatan)</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th colspan="2" style="background-color: var(--bg)">
              Akun Ekuitas
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Debet <br />+ (Penurunan)</td>
            <td>Kredit <br />+ (Peningkatan)</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th colspan="2" style="background-color: var(--bg)">
              Akun Pendapatan
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Debet <br />+ (Penurunan)</td>
            <td>Kredit <br />+ (Peningkatan)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AppTableBase from "./AppTableBase";

export default {
  extends: AppTableBase,
};
</script>

<style lang="postcss">
.table__account {
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  overflow-x: auto;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 978px) {
    grid-gap: 2rem;
    grid-template-columns: 1fr;
  }

  &__1,
  &__2 {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    table {
      width: 100%;
      table-layout: fixed;
    }
  }
}
</style>
