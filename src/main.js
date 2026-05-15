import axios from "axios";

async function ambilData() {
  try {
    const response = await axios.get("https://api.rdevelabs.biz.id/data", {
      headers: {
        "x-rdl": "ramdeveloper",
      },
    });

    const data = response.data.file;
    console.log(data);

    let isiTabel = "";

    data.forEach((d, index) => {
      isiTabel += `
        <tr>
          <th>${index + 1}</th>
          <td>${d.nama}</td>
          <td>${d.nim}</td>
          <td>${d.kelas}</td>
          <td>${d.dari_pertemuan} sampai ${d.sampai_pertemuan}</td>
          <td>${d.ukuran} KB</td>
          <td>${d.waktu}</td>
        </tr>
      `;
    });

    document.getElementById("tabel").innerHTML = isiTabel;

  } catch (error) {
    console.error("Gagal mengambil data:", error);
    document.getElementById("tabel").innerHTML = `<tr><td colspan="7" style="text-align:center; color:red;">Gagal memuat data</td></tr>`;
  }
}

ambilData();