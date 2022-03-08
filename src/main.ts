import lines from "./data/lines"
import charactersAndPuns from "./data/charactersAndPuns"
import { newline, title, paragraph } from "./utils/console"
import { getRandomItemI } from "./utils/randomizer"

function main() {
  const randomLine = getRandomItemI(lines)
  const randomCharacterAndPun = getRandomItemI(charactersAndPuns)

  newline()
  title("Here's your random line:")
  paragraph(
    randomLine
      .replace(/{{character}}/g, randomCharacterAndPun.character)
      .replace(/{{pun}}/, randomCharacterAndPun.pun)
  )
  newline()
}

main()
