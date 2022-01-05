function createObject(data, fileName) {
  console.log(data);
  const url = window.URL.createObjectURL(data);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
export const downloadFile = (content, fileName, type = "blob") => {
  if (type === "link") {
    const xhr = new XMLHttpRequest();
    xhr.open("get", content);
    xhr.responseType = "blob";
    xhr.send();
    xhr.onload = function () {
      if (this.status === 200 || this.status === 304) {
        // 如果是IE10及以上，不支持download属性，采用msSaveOrOpenBlob方法，但是IE10以下也不支持msSaveOrOpenBlob
        if ("msSaveOrOpenBlob" in navigator) {
          navigator.msSaveOrOpenBlob(this.response, fileName);
          return;
        }
        createObject(this.response, fileName);
      }
    };
  } else {
    createObject(
      new Blob([content], {
        type: "application/vnd.ms-excel;charset=UTF-8",
      }),
      fileName
    );
  }
};
