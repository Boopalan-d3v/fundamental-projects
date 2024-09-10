import React from 'react'
import Person from './person'

const List = ({item}) => {
  return (
    <section>
        {item.map((person) => {
            return <Person key={person.id} {...person}/>}
        )}
    </section>
  )
}

export default List