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

  const data = response.data;
  console.log(data);
}

ambilData();
{/* <tr>
  <th>1</th>
  <td>Raihan</td>
  <td>12355</td>
  <td>i251b</td>
  <td>1 sampe 10</td>
  <td>1000</td>
  <td>senen</td>
</tr>; */}
