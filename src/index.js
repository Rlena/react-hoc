import React from 'react'
import ReactDOM from 'react-dom'

const starWarsChars = [
  { name: 'Дарт Вэйдер', side: 'dark' },
  { name: 'Люк Скайвокер', side: 'light' },
  { name: 'Палпатин', side: 'dark' },
  { name: 'Обиван Кеноби', side: 'light' }
]

/** компонент, отвечающий только за отрисовку **/
const App = ({ list }) => (
  <ul>
    {list.map((char, index) => {
      return (
        <li key={char.name + index}>
          <strong>{char.name}</strong> - &nbsp;
          {char.side}
        </li>
      )
    })}
  </ul>
)

/** логика приложения **/
// функция высшего порядка
// на вход принимает некоторый компонент
// Component - функция, кот. в свою очередь должна вернуть функцию
// получаем некоторый набор параметров (list, side) и возвращаем функцию
const withFilteredProps = Component => ({ list, side }) => {
  // у каждого char проверяем, если side совпадает с side, который мы передаем в компонент
  // то данный персонаж попадает в результирующий массив filteredList
  // в filteredList получаем отсортированный список
  const filteredList = list.filter(char => char.side === side)
  // withFilteredProps должен вернуть Component, который получаем как параметр
  // логику сделали уже в функции filteredList,
  // поэтому передаем в Component параметр list, в кот. передаем отсортированный массив
  return <Component list={filteredList} />
}

/** использование компонента высшего порядка **/
// в FilteredList положим результат работы функции withFilteredProps
// в withFilteredProps вызываем с App
// получается, что мы оборачиваем в withFilteredProps компонент App, который выводит jsx
// на выходе получаем новый компонент FilteredList, кот. можем использовать
const FilteredList = withFilteredProps(App)


// в компонент FilteredList передаем параметры list и side, потому что должны их получить в withFilteredProps
ReactDOM
  .render(
    <FilteredList list={starWarsChars} side='light' />,
    document.getElementById('root')
  );
