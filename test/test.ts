import { expect, tap } from 'tapbundle'
import * as multicloud from '../ts/index'

tap.test('first test', async () => {
  console.log(multicloud.standardExport)
})

tap.start()
