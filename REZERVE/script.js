// Kullanıcı Giriş Kontrolü
// Doğru kullanıcı adı ve şifreyi belirle
const correctUsername = "emircan03";
const correctPassword = "123456";

// Form gönderme olayını dinle
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    // Kullanıcı adı ve şifre kontrolü
    if (username === correctUsername && password === correctPassword) {
        messageElement.style.color = "green";
        messageElement.textContent = "Giriş başarılı!";
    } else {
        messageElement.style.color = "red";
        messageElement.textContent = "Kullanıcı adı veya şifre yanlış!";
    }
});


// Metin Gir Kontrolü
function handleSearch(event) {
    event.preventDefault(); // Formun varsayılan davranışını engelle

    const allowedKeywords = ["otel", "berber", "kuaför", "restorant"];
    const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
    const searchResult = document.getElementById("searchResult");

    if (allowedKeywords.includes(searchInput)) {
      searchResult.textContent = "İçerik bulundu.";
      searchResult.style.color = "green";
    } else {
      searchResult.textContent = "İçerik bulunamadı.";
      searchResult.style.color = "red";
    }
}
