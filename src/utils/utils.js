export const includes = function (arr1, arr2) {
  return arr2.every((val) => arr1.includes(val));
};


const units = ["B", "KB", "MB", "GB", "TB", "PB"];
export function formatStorageSize(size) {
  if (size || size == '0') {
    let bytes = typeof size === "number" ? size : Number(size);
    let u = 0;
    while (Number.parseInt(String(bytes), 10) >= 1024 && u < units.length - 1) {
      bytes /= 1024;
      ++u;
    }
    return `${bytes.toFixed(1)}${units[u]}`;
  } else {
    return ''
  }
}
