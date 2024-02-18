import { z } from "zod";

import { CountryEnumScalarFieldEnumSchema } from "@schemas/enums/CountryEnumScalarFieldEnum.schema";
import { CountryEnumCreateManyInputObjectSchema } from "@schemas/objects/CountryEnumCreateManyInput.schema";
import { CountryEnumUncheckedCreateInputObjectSchema } from "@schemas/objects/CountryEnumUncheckedCreateInput.schema";
import { CountryEnumWhereInputObjectSchema } from "@schemas/objects/CountryEnumWhereInput.schema";
import { CountryEnumOrderByWithRelationInputObjectSchema } from "@schemas/objects/CountryEnumOrderByWithRelationInput.schema";
import { CountryEnumWhereUniqueInputObjectSchema } from "@schemas/objects/CountryEnumWhereUniqueInput.schema";
import { CountryEnumUncheckedUpdateInputObjectSchema } from "@schemas/objects/CountryEnumUncheckedUpdateInput.schema";
// import { CountryEnumOrderByWithAggregationInputObjectSchema } from "@schemas/objects/CountryEnumOrderByWithAggregationInput.schema"; //
// import { CountryEnumScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/CountryEnumScalarWhereWithAggregatesInput.schema"; //
import { CountryEnumUpdateManyMutationInputObjectSchema } from "@schemas/objects/CountryEnumUpdateManyMutationInput.schema"; //
// import { CountryEnumCountAggregateInputObjectSchema } from "@schemas/objects/CountryEnumCountAggregateInput.schema"; //
// import { CountryEnumMinAggregateInputObjectSchema } from "@schemas/objects/CountryEnumMinAggregateInput.schema"; //
// import { CountryEnumMaxAggregateInputObjectSchema } from "@schemas/objects/CountryEnumMaxAggregateInput.schema"; //

// export const CountryEnumAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       CountryEnumOrderByWithRelationInputObjectSchema,
//       CountryEnumOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: CountryEnumWhereInputObjectSchema.optional(),
//   cursor: CountryEnumWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), CountryEnumCountAggregateInputObjectSchema])
//     .optional(),
//   _min: CountryEnumMinAggregateInputObjectSchema.optional(),
//   _max: CountryEnumMaxAggregateInputObjectSchema.optional(),
// });

export const CountryEnumCreateManySchema = z.object({
  data: z.union([
    CountryEnumCreateManyInputObjectSchema,
    z.array(CountryEnumCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const CountryEnumCreateOneSchema = z.object({
  data: CountryEnumUncheckedCreateInputObjectSchema,
});

export const CountryEnumDeleteManySchema = z.object({
  where: CountryEnumWhereInputObjectSchema.optional(),
});

export const CountryEnumDeleteOneSchema = z.object({
  where: CountryEnumWhereUniqueInputObjectSchema,
});

export const CountryEnumFindFirstSchema = z.object({
  orderBy: z
    .union([
      CountryEnumOrderByWithRelationInputObjectSchema,
      CountryEnumOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CountryEnumWhereInputObjectSchema.optional(),
  cursor: CountryEnumWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CountryEnumScalarFieldEnumSchema).optional(),
});

export const CountryEnumFindManySchema = z
  .object({
    orderBy: z
      .union([
        CountryEnumOrderByWithRelationInputObjectSchema,
        CountryEnumOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: CountryEnumWhereInputObjectSchema.optional(),
    cursor: CountryEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(CountryEnumScalarFieldEnumSchema).optional(),
  })
  .optional();

export const CountryEnumFindUniqueSchema = z.object({
  where: CountryEnumWhereUniqueInputObjectSchema,
});

// export const CountryEnumGroupBySchema = z.object({
//   where: CountryEnumWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       CountryEnumOrderByWithAggregationInputObjectSchema,
//       CountryEnumOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: CountryEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(CountryEnumScalarFieldEnumSchema),
// });

export const CountryEnumUpdateManySchema = z.object({
  data: CountryEnumUpdateManyMutationInputObjectSchema,
  where: CountryEnumWhereInputObjectSchema.optional(),
});

export const CountryEnumUpdateOneSchema = z.object({
  data: CountryEnumUncheckedUpdateInputObjectSchema,
  where: CountryEnumWhereUniqueInputObjectSchema,
});

// export const CountryEnumUpsertSchema = z.object({
//   where: CountryEnumWhereUniqueInputObjectSchema,
//   create: CountryEnumUncheckedCreateInputObjectSchema,
//   update: CountryEnumUncheckedCreateInputObjectSchema,
// });

export const CountryEnumCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     CountryEnumOrderByWithRelationInputObjectSchema,
    //     CountryEnumOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: CountryEnumWhereInputObjectSchema.optional(),
    // cursor: CountryEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
