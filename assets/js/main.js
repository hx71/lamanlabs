(function () {
  var site = window.SITE || {};

  // Isi teks dari config.js. Elemen dengan nilai kosong disembunyikan.
  document.querySelectorAll("[data-isi]").forEach(function (el) {
    var nilai = site[el.dataset.isi];
    if (nilai) {
      el.textContent = nilai;
    } else {
      (el.closest("[data-sembunyi-jika-kosong]") || el).hidden = true;
    }
  });

  document.querySelectorAll("[data-tautan]").forEach(function (el) {
    var nilai = site[el.dataset.tautan];
    if (!nilai) {
      (el.closest("[data-sembunyi-jika-kosong]") || el).hidden = true;
      return;
    }
    el.href = el.dataset.tautan === "email" ? "mailto:" + nilai : nilai;
  });

  // Format pesan standar: jalur, paket, nama pemesan.
  function pesanWa(data) {
    var baris = ["Halo " + (site.brand || "Admin") + ","];
    if (data.wa === "custom") {
      baris.push(
        "saya ingin minta website custom.",
        "",
        "Jalur: Custom",
        "Nama bisnis/personal: ",
        "Tujuan halaman: ",
        "Referensi desain: ",
        "Warna dan gaya: ",
        "Bagian yang dibutuhkan: ",
        "Anggaran: ",
        "Nama pemesan: "
      );
    } else if (data.wa === "pesan") {
      baris.push(
        "saya ingin memesan website.",
        "",
        "Jalur: Paket",
        "Paket: " + (data.paket || ""),
        "Nama pemesan: "
      );
    } else {
      baris.push("saya ingin bertanya tentang jasa pembuatan website.");
    }
    return baris.join("\n");
  }

  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.href =
      "https://wa.me/" + site.whatsapp + "?text=" + encodeURIComponent(pesanWa(el.dataset));
    el.target = "_blank";
    el.rel = "noopener";
  });

  // Menu mobile
  var tombol = document.getElementById("tombol-menu");
  var menu = document.getElementById("menu-mobile");
  if (tombol && menu) {
    tombol.addEventListener("click", function () {
      var buka = menu.hidden;
      menu.hidden = !buka;
      tombol.setAttribute("aria-expanded", String(buka));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        menu.hidden = true;
        tombol.setAttribute("aria-expanded", "false");
      }
    });
  }

  var tahun = document.getElementById("tahun");
  if (tahun) tahun.textContent = new Date().getFullYear();
})();
