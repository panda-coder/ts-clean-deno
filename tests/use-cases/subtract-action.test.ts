import { assertEquals } from "https://deno.land/std@0.105.0/testing/asserts.ts";

import { SubtractAction } from '@/use-case/calculations/subtract-action.ts'

const makeSut = () => (new SubtractAction())

Deno.test("Test if SubtractAction subtract 10-10 = 0", () => {
  const sut = makeSut()
  const data = {
    x: 10,
    y: 10
  }
  const result = sut.calculate(data)
  assertEquals(result, 0);
});

Deno.test("Test if SubtractAction subtract 10-15 = -5", () => {
  const sut = makeSut()
  const data = {
    x: 10,
    y: 15
  }
  const result = sut.calculate(data)
  assertEquals(result, -5);
});
