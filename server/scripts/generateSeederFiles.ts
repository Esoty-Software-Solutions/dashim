import { faker } from '@faker-js/faker'
import cuid2 from '@paralleldrive/cuid2'
import fs from 'fs'
import readline from 'readline'
import { locales } from '../../browser/src/lang/i18n-config'
import { locales } from '@/lang/i18n-config'

const dbmlFIlePath = '../prisma/dbml/schema.dbml'

async function extractRefs(filePath: string) {
  const fileStream = fs.createReadStream(filePath)

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  const refs: { [key: string]: any } = {}

  for await (const line of rl) {
    const match = line.match(/Ref: (\w+)\.(\w+) > (\w+)\.(\w+)/)
    if (match) {
      const sourceTable = match[1]
      const sourceField = match[2]
      const targetTable = match[3]

      if (!refs[sourceTable]) {
        refs[sourceTable] = {}
      }

      refs[sourceTable][sourceField] = targetTable
    }
  }

  return refs
}

const tableRefs = await extractRefs(dbmlFIlePath)

console.info('tableRefs extracted...')
// console.log(tableRefs)

const tableDep: { [key: string]: string[] } = {}

for (const [table, relations] of Object.entries(tableRefs)) {
  tableDep[table] = Object.values(relations)
}
console.info('tableDep generated...')
// console.log(tableDep)

const visited: { [key: string]: boolean } = {}
const stack: string[] = []

interface Refs {
  [key: string]: string[]
}

function topologicalSort(
  table: string,
  visited: { [key: string]: boolean },
  stack: string[],
  refs: Refs
) {
  visited[table] = true
  const edges: string[] = refs[table] || []

  edges.forEach((node: string) => {
    if (!visited[node]) {
      topologicalSort(node, visited, stack, refs)
    }
  })

  stack.push(table) // Use push instead of unshift
}

Object.keys(tableDep).forEach((table: string) => {
  if (!visited[table]) {
    topologicalSort(table, visited, stack, tableDep)
  }
})

console.info('stack generated...')
// console.log(stack) // This will print the stack array to the console

interface Object {
  [key: string]: any
}
async function fieldOverride(object: Object) {
  const randomness = 0.5
  for (const [key, value] of Object.entries(object)) {
    if (key === 'id') {
      object[key] = cuid2.createId()
    }
    if (key === 'createdAt') {
      object[key] = faker.date.past({ years: 2, refDate: new Date() })
      if (Math.random() < randomness) {
        object['updatedAt'] = faker.date.between({
          from: object[key],
          to: new Date(),
        })
      } else {
        object['updatedAt'] = undefined
      }
    }
    if (key === 'email') {
      object[key] = faker.internet.email()
    }
    if (key === 'username') {
      object[key] = faker.internet.userName()
    }
    if (key === 'passwordHash') {
      object[key] = faker.internet.password()
    }
    if (key === 'phone') {
      object[key] = faker.phone.number()
    }
    if (key === 'birthDate') {
      object[key] = faker.date.past({ years: 50, refDate: new Date() })
    }
    if (key === 'secondName') {
      object[key] = faker.person.firstName()
    }
    if (Math.random() < randomness) {
      if (key === 'thirdName') {
        object[key] = faker.person.firstName()
      }
      if (key === 'fourthName') {
        object[key] = faker.person.firstName()
      }
    }
    if (key === 'searchName') {
      object[key] =
        object['firstName'] +
        object['secondName'] +
        object['thirdName'] +
        object['fourthName'] +
        object['lastName']
    }

    if (key === 'address' && Math.random() < randomness) {
      object[key] = faker.location.streetAddress()
    }

    if (key === 'english') {
      if (Math.random() < randomness) {
        object[key] = faker.string.alpha({ length: { min: 5, max: 15 } })
        if (object['name']) {
          //replace name with english
          object['name'] = object[key]
        }
        object['arabic'] = faker.string.alpha({ length: { min: 5, max: 15 } })
      }
    }
    if (typeof value === 'object') {
      //if value is object
      //if value is array
      if (Array.isArray(value)) {
        //iterate over array
        for (const [index, item] of value.entries()) {
          //if item is object
          if (typeof item === 'object') {
            //if item has id
            if (item.id) {
              //replace item with id
              object[key][index] = item.id
            }
          }
        }
      } else {
        //if value is object
        //if value has id
        if (value.id) {
          //replace value with id
          object[key] = value.id
        }
      }
    }
  }
}
