export const canPreviewList = [
    // "txt",
    // "nc",
    // "json",
    "jpg",
    "jpeg",
    "png",
    "svg",
    "gif",
    "bmp",
    "pdf",
    "mpf",
    "spf",
    "eia",
    "stp",
    "prg",
    "tap",
    "",
  ];

  /**
 * blob转文字
 * @param {any} content
 * @param {string} encode
 * @returns {any}
 */
export const readAsText = (content, encode) => {
    let reader = new FileReader();
    reader.readAsText(content, encode);
    return new Promise((resolve) => {
        reader.onload = (e) => {
        resolve(reader.result);
        };
    });
};

  
// 支持的预览的三大模式
export const previewMode = {
    text: ["txt", "nc", "json", "mpf", "spf", "eia", "stp", "prg", "tap", ""],
    image: ["jpg", "jpeg", "png", "svg", "gif", "bmp"],
    pdf: ["pdf"],
  };

/**
 * blob转地址
 * @param {any} content
 * @returns {any}
 */
export const readAsDataURL = (content) => {
    let reader = new FileReader();
    reader.readAsDataURL(content);
    return new Promise((resolve) => {
      reader.onload = (e) => {
        resolve(reader.result);
      };
    });
  };