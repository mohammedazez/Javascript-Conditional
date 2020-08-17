let gameSederhana = prompt(
  "Masukkan arah gerakan untuk menjalankan karakter anda"
);

switch (gameSederhana) {
  case "UP": {
    alert("Karakter berjalan keatas");
    break;
  }
  case "RIGHT": {
    alert("Karakter berjalan kekanan");
    break;
  }
  case "BOTTOM": {
    alert("Karakter berjalan kebawah");
    break;
  }
  case "LEFT": {
    alert("Karakter berjalan kekiri");
    break;
  }
  default: {
    alert("Perintah salah!");
  }
}
