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
            <th>id</th>
            <th>name</th>
            <th>categories</th>
            <th>buttons</th>
          </tr>
        </thead>
        <tbody>
          <AddWord />
          {words.map((word) => (
            <Word key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Words
