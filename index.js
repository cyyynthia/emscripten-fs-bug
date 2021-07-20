/*
 * Copyright (c) 2021 Cynthia K. Rey
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

const libBuildFactory = require('./dist/wasm.build.js')
const libClosureFactory = require('./dist/wasm.closure.js')

async function run () {
  const libBuild = await libBuildFactory()
  const buildMemfs = libBuild._test_memfs()
  const buildNodefs = libBuild._test_nodefs()

  const libClosure = await libClosureFactory()
  const closureMemfs = libClosure._test_memfs()
  const closureNodefs = libClosure._test_nodefs()

  console.log('\t\t\tMEMFS\tNODEFS')
  console.log('Without Closure\t\t%d\t%d', buildMemfs, buildNodefs)
  console.log('With Closure\t\t%d\t%d', closureMemfs, closureNodefs)
  // We expect here all 4 to be -1, though closure nodefs returns 0
}

run()
