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

export const handleProp = function (defaultData, attr, props) {
  const handle = function (){
    let obj = {};
    if(defaultData instanceof Object) {
      Object.keys(defaultData).forEach(k=>{
        if(attr && attr[[props[k]]]) {
          const value = attr[[props[k]]]
          if(value instanceof Array) {
            let arr = [];
            for(let i =0; i<value.length; i ++) {
              if(value[i] instanceof Object) {
                const p = {
                  avatar: "avatar",
                  label: "label",
                  value: "value"
                }
                const data = handle(p, value[i], p);
                arr.push(data)
              } else {
                arr.push(value[i]);
              }
            }
            obj[k] = arr;
          } else {
            obj[k] = value;
          }
        }
      });
    }
    return {...defaultData, ...obj};
  }
  handle();
}

export function deepClone(item) {
  if (!item) { return item; } // null, undefined values check

  var types = [ Number, String, Boolean ],
    result;

  // normalizing primitives if someone did new String('aaa'), or new Number('444');
  types.forEach(function(type) {
    if (item instanceof type) {
      result = type( item );
    }
  });

  if (typeof result == "undefined") {
    if (Object.prototype.toString.call( item ) === "[object Array]") {
      result = [];
      item.forEach(function(child, index) {
        result[index] = deepClone( child );
      });
    } else if (typeof item == "object") {
      // testing that this is DOM
      if (item.nodeType && typeof item.cloneNode == "function") {
        result = item.cloneNode( true );
      } else if (!item.prototype) { // check that this is a literal
        if (item instanceof Date) {
          result = new Date(item);
        } else {
          // it is an object literal
          result = {};
          for (var i in item) {
            result[i] = deepClone( item[i] );
          }
        }
      } else {
        // depending what you would like here,
        // just keep the reference, or create new object
        if (item.constructor) {
          // would not advice to do that, reason? Read below
          result = new item.constructor();
        } else {
          result = item;
        }
      }
    } else {
      result = item;
    }
  }

  return result;
}
