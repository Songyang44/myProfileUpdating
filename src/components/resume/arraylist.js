// 从数组中移除指定项
export function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  
  // 获取数组中最接近的项
  export function closestItem(arr, item) {
    const index = arr.indexOf(item);
    if (index === -1) {
      return arr[0]; // 如果没有找到，返回第一个项
    } else if (index === arr.length - 1) {
      return arr[arr.length - 2]; // 如果是最后一个项，返回倒数第二个项
    } else {
      return arr[index + 1]; // 否则，返回下一个项
    }
  }
  