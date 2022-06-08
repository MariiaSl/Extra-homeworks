{
  /* <p>Напишите две функции, которые будут сортировать массив чисел в порядке возрастания и убывания соответственно. Возвращаемое значение - отсортированный массив. Нельзя использовать стандартные методы массивов</p>

Основные требования:
<ol>
    <li>Функции должна называться <code>sortAsc(array)</code>, <code>sortDesc(array)</code></li>
    <li>Функция должна вернуть <code>null</code>, если в качестве аргумента передан не массив</li>
    <li>Если аргумент - массив, то функции должны сортировать массив чисел в порядке возрастания и убывания соответственно. Возвращаемое значение - отсортированный массив</li>
</ol>

<p>P.S. Сортировку массива на практике с нуля пишут крайне мало, почти никогда. Написать ее с нуля для новичка тоже не простая задача. Поэтому в задании приемлемо если вы найдете решение в интернете, предварительно разберетесь в нем и проверите на сайте</p> */
}

// перебрать массив
//определить значение элемента под первым индексом больше или меньше элемента под вторым индексом
//если больше - в начало
//если меньше - в конец

const array = [1, 23, 4, 121, 2, 56, 22];
// const sortAbc = (arr) => {
//   const newArr = [];
//   arr.forEach((el, index) => {
//     console.log(index);
//     if (arr[index] <= arr[index + 1]) {
//       newArr.unshift(el);
//     }
//     if (arr[index] >= arr[index + 1]) {
//       newArr.push(el);
//     }
//     index++;
//     console.log(newArr);
//   });
//   return newArr;
// };
// console.log(sortAbc(array));

const sortAbc = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return (sorted = arr.sort((a, b) => a - b));
};
console.log(sortAbc(array));

const sortCba = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return (sorted = arr.sort((a, b) => b - a));
};
console.log(sortCba(array));