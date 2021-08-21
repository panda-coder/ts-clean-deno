import { assertEquals } from "https://deno.land/std@0.105.0/testing/asserts.ts";

import { MultiplyAction } from '@/use-case/calculations/multiply-action.ts'

const makeSut = () => (new MultiplyAction())

Deno.test("Test if MultiplyAction sum 10*10 = 100", () => {
  const sut = makeSut()
  const data = {
    x: 10,
    y: 10
  }
  const result = sut.calculate(data)
  assertEquals(result, 100);
});

Deno.test("Test if MultiplyAction sum 10*15 = 150", () => {
  const sut = makeSut()
  const data = {
    x: 10,
    y: 15
  }
  const result = sut.calculate(data)
  assertEquals(result, 150);
});
