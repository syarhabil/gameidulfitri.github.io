document.addEventListener('DOMContentLoaded', () => {
    const clueElement = document.getElementById('clue').querySelector('span');
    const answerElement = document.getElementById('answer');
    const resultElement = document.getElementById('result');
    const checkButton = document.getElementById('check');
    const nextButton = document.getElementById('next');
  
    // Normalisasi jawaban untuk mengakomodasi variasi input
    function normalizeAnswer(input) {
      return input.toLowerCase().replace(/[-\s']/g, ''); // Mengganti tanda hubung, spasi, dan apostrof
    }
  
    let words = [
      { word: "sahur", clue: "Makan di waktu dini hari sebelum fajar", variations: ["sahur", "suhur"] },
      { word: "iftar", clue: "Makan saat matahari terbenam untuk berbuka", variations: ["iftar", "buka", "bukapuasa"] },
      { word: "tarawih", clue: "Shalat sunnah yang dilakukan setelah shalat Isya' di bulan Ramadan", variations: ["tarawih", "taraweh", "shalattarawih"] },
      { word: "zakat", clue: "Sedekah wajib di akhir Ramadan", variations: ["zakat", "zakatfitrah", "sedekah"] },
      { word: "idulfitri", clue: "Hari raya umat Islam setelah berakhirnya Ramadan", variations: ["idulfitri", "idulfitri", "lebaran", "hariraya"] },
      { word: "fitrah", clue: "Jenis zakat yang wajib dikeluarkan menjelang akhir Ramadan", variations: ["fitrah", "zakatfitrah", "fitra"] },
      { word: "takbir", clue: "Ucapan yang dilantunkan untuk memuliakan Allah menjelang Idul Fitri", variations: ["takbir", "takbeer"] },
      { word: "quran", clue: "Kitab suci yang turun di bulan Ramadan", variations: ["quran", "alquran", "qur'an", "al-quran", "koran"] },
      { word: "itikaf", clue: "Beribadah dengan tinggal di masjid pada 10 hari terakhir Ramadan", variations: ["itikaf", "i'tikaf", "etikaf"] },
      { word: "tadarus", clue: "Kegiatan membaca Al-Quran bersama selama bulan Ramadan", variations: ["tadarus", "tadarrus", "ngaji", "belajarquran"] },
      { word: "witir", clue: "Shalat malam yang setelah taraweh Ramadan", variations: ["witir", "witr", "shalatwitir"] },
      { word: "wajib", clue: "Hukum berpuasa di bulan Ramadan", variations: ["wajib", "fardhu", "obligatory"] },
      { word: "albaqarahayat183", clue: "Dalil tentang puasa Ramadhan tercantum dalam Quran surat ayat?", variations: ["albaqarahayat183", "albaqarah183", "al-baqarah183", "albaqarah183", "surahalbaqarah183"] },
      { word: "iftitah", clue: "Doa pembuka sebelum shalat tarawih dimulai", variations: ["iftitah", "doaiftitah", "iftitahdoa"] },
      { word: "eidmubarak", clue: "Ucapan selamat Hari Raya Idul Fitri dalam bahasa Arab", variations: ["eidmubarak", "idmubarak", "selamathariraya", "mubarak"] }
    ];
  
  
    function nextWord() {
      if (words.length === 0) {
        resultElement.textContent = "Selamat! Anda telah menyelesaikan semua soal.";
        resultElement.style.color = "green";
        clueElement.textContent = "";
        answerElement.style.display = "none";
        checkButton.style.display = "none";
        nextButton.style.display = "none";
        return;
      }
  
      let randomIndex = Math.floor(Math.random() * words.length);
      currentWord = words[randomIndex];
      words.splice(randomIndex, 1);
      clueElement.textContent = currentWord.clue;
      answerElement.value = "";
      answerElement.disabled = false;
      checkButton.disabled = false;
      nextButton.style.display = "none";
      resultElement.textContent = "";
    }
  
    let currentWord = {};
    nextWord();
  
    checkButton.addEventListener('click', () => {
      const answer = normalizeAnswer(answerElement.value);
      // Cek apakah jawaban ada di dalam array variations
      if (currentWord.variations.includes(answer)) {
        resultElement.textContent = "Kamu berhasil, yayy!";
        resultElement.style.color = "green";
        answerElement.disabled = true;
        checkButton.disabled = true;
        setTimeout(nextWord, 2000);
      } else {
        resultElement.textContent = "Salah, silakan coba lagi.";
        resultElement.style.color = "red";
        nextButton.style.display = "inline";
      }
    });
  
    nextButton.addEventListener('click', nextWord);
  });
  