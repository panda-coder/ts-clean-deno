import { assertEquals } from "https://deno.land/std@0.105.0/testing/asserts.ts";

import { SumAction } from '@/use-case/calculations/sum-action.ts'

const makeSut = () => (new SumAction())

Deno.test("Test if SumAction sum 10+10 = 20", () => {
  const sut = makeSut()
  const data = {
    x: 10,
    y: 10
  }
  const result = sut.calculate(data)
  assertEquals(result, 20);
});

Deno.test("Test if SumAction sum 10+15 = 25", () => {
  const sut = makeSut()
  const data = {
    x: 10,
    y: 15
  }
  const result = sut.calculate(data)
  assertEquals(result, 25);
});
