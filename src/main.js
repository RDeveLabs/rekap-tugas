import axios from "axios";

document.getElementById("tombol").addEventListener("click", async () => {
  await axios.get("https://api.rdevelabs.biz.id/data", {
    headers:{
      'x-rdl' : "ramdeveloper"
    }
  }).then((response) => {console.log(response.data);})
  .catch((e) => {console.log("error", e)})
  .finally(() => {console.log("berhasil");})
})