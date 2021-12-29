export const downloadFile = (content, filename) => {
  const a = document.createElement("a");
  a.download = filename;
  a.style.display = "none";
  const url = URL.createObjectURL(content);
  a.href = url;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
};
