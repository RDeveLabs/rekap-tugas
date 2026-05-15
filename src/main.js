import axios from "axios";

// document.getElementById("tombol").addEventListener("click", async () => {
// await axios
//   .get("https://api.rdevelabs.biz.id/data", {
//     headers: {
//       "x-rdl": "ramdeveloper",
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//   });
//   .catch((e) => {console.log("error", e)})
//   .finally(() => {console.log("berhasil");})
// })
async function ambilData() {
  const response = await axios.get("https://api.rdevelabs.biz.id/data", {
    headers: {
      "x-rdl": "ramdeveloper",
    },
  });

  const data = response.data.file;
  console.log(data);
  data.map((d) => {
    document.getElementById("tabel").innerHTML = `<tr>`+=
      `<th>${d.id}</th>` +=
      `<td>${d.nama}</td>` +=
      `<td>${d.nim}</td>` +=
      `<td>${d.kelas}</td>` +=
      `<td>${d.dari_pertemuan} sampai ${d.sampai_pertemuan}</td>` +=
      `<td>${d.ukuran}</td>` +=
      `<td>${d.waktu}</td>` +=
    `</tr>`;
  });
}

ambilData();
