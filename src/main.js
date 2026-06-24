import "./style.css";
import van from "vanjs-core";

const fecthData = async () => {
  const url = "https://api.myquran.com/v3/sholat/kabkota/find/samarinda";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

const { h1 } = van.tags;

const PageHeader = () => {
  const title = van.state("Nama Kota ...");

  fecthData().then((res) => {
    if (res.status && res.data.length > 0) {
      title.val = res.data[0].lokasi;
    } else {
      title.val = "Gagal narik data nih bro";
    }
  });

  return h1(
    {
      class: "font-bold",
    },
    () => title.val,
  );
};

van.add(document.getElementById("app"), PageHeader());
