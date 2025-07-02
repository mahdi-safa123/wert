
const { createClient } = supabase;
const supabaseUrl = "https://xxxx.supabase.co"; // <-- غيّره بالرابط الخاص بك
const supabaseKey = "public-anon-key";          // <-- غيّره بالمفتاح الخاص بك
const supabase = createClient(supabaseUrl, supabaseKey);

// تسجيل الدخول
async function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert("❌ " + error.message);
    return;
  }

  alert("✅ تم تسجيل الدخول");
  window.location.href = "panel.html";
}

// إنشاء حساب جديد
async function signup() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    alert("❌ " + error.message);
    return;
  }

  alert("✅ تم إنشاء الحساب بنجاح");
  window.location.href = "login.html";
}

// تسجيل الخروج
async function logout() {
  await supabase.auth.signOut();
  window.location.href = "login.html";
}

// التحقق من الجلسة
async function checkSession() {
  const { data, error } = await supabase.auth.getSession();
  if (!data.session) {
    window.location.href = "login.html"; // ممنوع الدخول بدون تسجيل
  }
}
