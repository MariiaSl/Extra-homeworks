1. Создать ф-цию uniqueCount
2. Создать в ней пустой массив uniqueNumbers, куда будем добавлять уникальные числа
3. Пройтись циклом по исходному массиву
4. На каждой итерации проверять, входит число в uniqueNumbers или нет
5. Если входит, то ничего не делаем и идем на следующую итерацию
6. Если не входит, то добавляем его в uniqueNumbers
7. После прохождения всего цикла вернуть длину uniqueNumbers из ф-ции uniqueCount

Notes:
1. Код для проверки вхождения числа в uniqueNumbers можно вынести в отдельную ф-цию с именем includes
2. includes(arr, num) должна проверить, входит num в arr или нет