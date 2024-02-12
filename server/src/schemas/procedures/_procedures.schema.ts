import { z } from "zod";

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const StringFilterObjectSchema = z.union([
  z.string(),
  z
    .object({
      equals: z.string().optional(),
      in: z.union([z.string().array(), z.string()]).optional(),
      notIn: z.union([z.string().array(), z.string()]).optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
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
      in: z.union([z.string().array(), z.string()]).optional().nullable(),
      notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
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
      in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
      notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
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
      in: z
        .union([z.coerce.date().array(), z.coerce.date()])
        .optional()
        .nullable(),
      notIn: z
        .union([z.coerce.date().array(), z.coerce.date()])
        .optional()
        .nullable(),
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
      in: z.union([z.number().array(), z.number()]).optional(),
      notIn: z.union([z.number().array(), z.number()]).optional(),
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
      in: z.union([z.number().array(), z.number()]).nullable().optional(),
      notIn: z.union([z.number().array(), z.number()]).nullable().optional(),
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
