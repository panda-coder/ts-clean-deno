import { assertEquals } from "https://deno.land/std@0.105.0/testing/asserts.ts";

import { DivideAction } from '@/use-case/calculations/divide-action.ts'

const makeSut = () => (new DivideAction())

Deno.test("Test if DivideAction sum 10/10 = 1", () => {
  const sut = makeSut()
  const data = {
    x: 10,
    y: 10
  }
  const result = sut.calculate(data)
  assertEquals(result, 1);
});

Deno.test("Test if DivideAction sum 100/10 = 10", () => {
  const sut = makeSut()
  const data = {
    x: 100,
    y: 10
  }
  const result = sut.calculate(data)
  assertEquals(result, 10);
});
