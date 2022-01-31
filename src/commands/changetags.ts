import {Command, Flags} from '@oclif/core'
import * as fs from 'node:fs'
import * as shelljs from 'shelljs'

export default class Changetags extends Command {
  static description = 'Change tags'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    list: Flags.string({char: 'l', description: 'json file with containers list', required: true}),
    from: Flags.string({char: 'f', description: 'from tag', required: true}),
    to: Flags.string({char: 't', description: 'to tag', required: true}),
  }

  static args = []

  public async run(): Promise<void> {
    const {flags} = await this.parse(Changetags)

    const fileName = flags.list
    const list = Changetags.readList(fileName)

    const from = flags.from
    const to = flags.to

    Changetags.tag(list, from, to)
  }

  private static readList(fileName: string): string[] {
    const content = fs.readFileSync(fileName, {encoding: 'utf8'})
    return JSON.parse(content) as string[]
  }

  private static tag(list: string[], from: string, to: string): void {
    let i: number
    for (i = 0; i < list.length; i++) {
      const imageName = list[i]
      shelljs.exec(`docker tag ${imageName}:${from} ${imageName}:${to}`)
    }
  }
}
