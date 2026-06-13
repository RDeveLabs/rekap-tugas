import axios from "axios";

const arrayKelas = ["I251A", "I251B"];

let kelas = document.getElementById("kelas").value;
document.getElementById("info-kelas").innerHTML = arrayKelas[kelas - 1];

document.getElementById("kelas").addEventListener("change", (e) => {
  kelas = document.getElementById("kelas").value;
  document.getElementById("info-kelas").innerHTML = arrayKelas[kelas - 1];
  ambilData(kelas);
});

document.getElementById("refresh").addEventListener("click", () => {
  ambilData(kelas);
});

async function ambilData(kelasDipilih) {
  try {
    const response = await axios.get("https://api.rdevelabs.biz.id/data", {
      headers: {
        "x-rdl": "ramdeveloper",
      },
      params: {
        id_kelas: kelasDipilih,
      },
    });
    const data = response.data.file;

    let isiTabel = "";

    if (data && data.length > 0) {
      if (document.getElementById("info")) {
        document.getElementById("info").innerText =
          `${data.length} Mahasiswa sudah mengumpulkan`;
      }

      data.forEach((d, index) => {
        const ukuranKB = (d.ukuran_file / 1024).toFixed(1);
        const formatWaktu = new Date(d.waktu).toLocaleString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
        const nama = d.nama.replace(/\b[a-z]/g, (match) => match.toUpperCase());
        isiTabel += `
          <div class="flex justify-between gap-2 p-2 pl-3 pr-4 bg-amber-50 w-full rounded-md">
            <div>
              <h1 class="font-bold text-xl">
                ${nama}
              </h1>
              <h1 class="font-semibold text-md">
                ${d.nim}
              </h1>
              <p>Pertemuan ${d.pertemuan}</p>
              <p>${formatWaktu}</p>
            </div>
            <h2>#${index + 1}</h2>
          </div>
        `;
      });

      document.getElementById("card").innerHTML = isiTabel;
    } else {
      if (document.getElementById("info")) {
        document.getElementById("info").innerText =
          `Belum ada yang mengumpulkan`;
      }
      document.getElementById("card").innerHTML = `
        <tr>
          <td colspan="7" class="text-center text-gray-500 py-4">Belum ada mahasiswa yang mengumpulkan tugas.</td>
        </tr>
      `;
    }
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    document.getElementById("tabel").innerHTML =
      `<tr><td colspan="7" style="text-align:center;">Gagal memuat data</td></tr>`;
  }
}

ambilData(kelas);
