import { useWordsStore } from '../../stores/wordsStore'
import AddWord from './AddWord/AddWord'
import Word from './Word/Word'

function Words() {
  const [{ words }] = useWordsStore()

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>index</th>
            <th>id</th>
            <th>name</th>
            <th>categories</th>
            <th>buttons</th>
          </tr>
        </thead>
        <tbody>
          <AddWord />
          {words.map((word, index) => (
            <Word key={word.id} word={word} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Words
