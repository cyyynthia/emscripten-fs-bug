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

#include <emscripten.h>
#include <sys/stat.h>

// In this repro case, we have
// .test pointing to a non-existent directory in memfs
// owo/.test points to a non-existent directory in nodefs

EMSCRIPTEN_KEEPALIVE
int test_memfs() {
  int ret;
  struct stat* out;
  return stat(".test/", out);
}

EMSCRIPTEN_KEEPALIVE
int test_nodefs() {
  int ret;
  struct stat* out;
  return stat("owo/.test/", out);
}
