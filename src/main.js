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

    if (data && data.length > 0) {
      if (document.getElementById("info")) {
        document.getElementById("info").innerText =
          `${data.length} Mahasiswa sudah mengumpulkan`;
      }

      data.forEach((d, index) => {
        const ukuranKB = (d.ukuran_file / 1024).toFixed(1);
        const formatWaktu = new Date(d.waktu).toLocaleString("id-ID", {
          weekday: "long", // Menampilkan nama hari secara lengkap (Senin, Selasa, dst.)
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
        isiTabel += `
          <tr>
            <th class="text-center">${index + 1}</th>
            <td>${d.nama}</td>
            <td class="text-center">${d.nim}</td>
            <td class="text-center">${d.kelas.kelas}</td>
            <td class="text-center">${d.dari_pertemuan} sampai ${d.sampai_pertemuan}</td>
            <td class="text-center">${ukuranKB} KB</td>
            <td class="text-center">${formatWaktu}</td>
          </tr>
        `;
      });
      document.getElementById("tabel").innerHTML = isiTabel;
    } else {
      if (document.getElementById("info")) {
        document.getElementById("info").innerText =
          `Belum ada yang mengumpulkan`;
      }
      document.getElementById("tabel").innerHTML = `
        <tr>
          <td colspan="7" class="text-center text-gray-500 py-4">Belum ada mahasiswa yang mengumpulkan tugas.</td>
        </tr>
      `;
    }
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    document.getElementById("tabel").innerHTML =
      `<tr><td colspan="7" style="text-align:center; color:red;">Gagal memuat data</td></tr>`;
  }
}

ambilData();
