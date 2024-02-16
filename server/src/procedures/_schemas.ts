import { z } from "zod";
import { Prisma } from "@prisma/client";

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const StringFilterObjectSchema = z.union([
  z.string(),
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.enum(["default", "insensitive"]).optional(),
      not: z.string().optional(),
      // not: z
      //   .union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)])
      //   .optional(),
    })
    .strict(),
]);
export const StringNullableFilterObjectSchema = z.union([
  z.string().nullable(),
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.enum(["default", "insensitive"]).optional(),
      not: z.string().nullable().optional(),
      // not: z
      //   .union([
      //     z.string(),
      //     z.lazy(() => NestedStringNullableFilterObjectSchema),
      //   ])
      //   .optional()
      //   .nullable(),
    })
    .strict(),
]);

export const DateTimeFilterObjectSchema = z.union([
  z.coerce.date(),
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z.string().optional(),
      // not: z
      //   .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)])
      //   .optional(),
    })
    .strict(),
]);

export const DateTimeNullableFilterObjectSchema = z.union([
  z.coerce.date().nullable(),
  z
    .object({
      equals: z.coerce.date().nullable().optional(),
      in: z.coerce.date().array().optional().nullable(),
      notIn: z.coerce.date().array().optional().nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z.string().nullable().optional(),
      // not: z
      //   .union([
      //     z.coerce.date(),
      //     z.lazy(() => NestedDateTimeNullableFilterObjectSchema),
      //   ])
      //   .optional()
      //   .nullable(),
    })
    .strict(),
]);

export const NumberFilterObjectSchema = z.union([
  z.number(),
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z.number().optional(),
      // not: z
      //   .union([z.number(), z.lazy(() => NestedFloatFilterObjectSchema)])
      //   .optional(),
    })
    .strict(),
]);

export const NumberNullableFilterObjectSchema = z.union([
  z.number().nullable(),
  z
    .object({
      equals: z.number().nullable().optional(),
      in: z.number().array().nullable().optional(),
      notIn: z.number().array().nullable().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z.number().nullable().optional(),
      // not: z
      //   .union([z.number(), z.lazy(() => NestedFloatFilterObjectSchema)])
      //   .optional(),
    })
    .strict(),
]);
