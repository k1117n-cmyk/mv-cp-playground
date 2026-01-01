// 初期状態（ここが「最初の世界」）
const initialSourceFiles = ["file1.txt", "photo.jpg"];
const initialDestFiles = [];

// 現在の状態
let sourceFiles = [...initialSourceFiles];
let destFiles   = [...initialDestFiles];

function render() {
  document.getElementById("source").innerHTML =
    sourceFiles.map(f => `<div class="file">${f}</div>`).join("");

  document.getElementById("dest").innerHTML =
    destFiles.map(f => `<div class="file">${f}</div>`).join("");
}

function cp() {
  if (sourceFiles.length === 0) return;
  destFiles.push(sourceFiles[0]);
  document.getElementById("message").textContent =
    "cp：コピーしました。元の場所にも残っています。";
  render();
}

function mv() {
  if (sourceFiles.length === 0) return;
  destFiles.push(sourceFiles[0]);
  sourceFiles.shift();
  document.getElementById("message").textContent =
    "mv：移動しました。元の場所からは消えました。";
  render();
}

// ★ リセット機能
function resetPlayground() {
  sourceFiles = [...initialSourceFiles];
  destFiles   = [...initialDestFiles];
  document.getElementById("message").textContent =
    "ここは練習用のカフェです。本番のターミナルには、戻るボタンはありません。";
  render();
}

render();

