import { z } from "zod";

import { CurrencyEnumScalarFieldEnumSchema } from "@schemas/enums/CurrencyEnumScalarFieldEnum.schema";
import { CurrencyEnumCreateManyInputObjectSchema } from "@schemas/objects/CurrencyEnumCreateManyInput.schema";
import { CurrencyEnumUncheckedCreateInputObjectSchema } from "@schemas/objects/CurrencyEnumUncheckedCreateInput.schema";
import { CurrencyEnumWhereInputObjectSchema } from "@schemas/objects/CurrencyEnumWhereInput.schema";
import { CurrencyEnumOrderByWithRelationInputObjectSchema } from "@schemas/objects/CurrencyEnumOrderByWithRelationInput.schema";
import { CurrencyEnumWhereUniqueInputObjectSchema } from "@schemas/objects/CurrencyEnumWhereUniqueInput.schema";
import { CurrencyEnumUncheckedUpdateInputObjectSchema } from "@schemas/objects/CurrencyEnumUncheckedUpdateInput.schema";
// import { CurrencyEnumOrderByWithAggregationInputObjectSchema } from "@schemas/objects/CurrencyEnumOrderByWithAggregationInput.schema"; //
// import { CurrencyEnumScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/CurrencyEnumScalarWhereWithAggregatesInput.schema"; //
import { CurrencyEnumUpdateManyMutationInputObjectSchema } from "@schemas/objects/CurrencyEnumUpdateManyMutationInput.schema"; //
// import { CurrencyEnumCountAggregateInputObjectSchema } from "@schemas/objects/CurrencyEnumCountAggregateInput.schema"; //
// import { CurrencyEnumMinAggregateInputObjectSchema } from "@schemas/objects/CurrencyEnumMinAggregateInput.schema"; //
// import { CurrencyEnumMaxAggregateInputObjectSchema } from "@schemas/objects/CurrencyEnumMaxAggregateInput.schema"; //

// export const CurrencyEnumAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       CurrencyEnumOrderByWithRelationInputObjectSchema,
//       CurrencyEnumOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: CurrencyEnumWhereInputObjectSchema.optional(),
//   cursor: CurrencyEnumWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), CurrencyEnumCountAggregateInputObjectSchema])
//     .optional(),
//   _min: CurrencyEnumMinAggregateInputObjectSchema.optional(),
//   _max: CurrencyEnumMaxAggregateInputObjectSchema.optional(),
// });

export const CurrencyEnumCreateManySchema = z.object({
  data: z.union([
    CurrencyEnumCreateManyInputObjectSchema,
    z.array(CurrencyEnumCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const CurrencyEnumCreateOneSchema = z.object({
  data: CurrencyEnumUncheckedCreateInputObjectSchema,
});

export const CurrencyEnumDeleteManySchema = z.object({
  where: CurrencyEnumWhereInputObjectSchema.optional(),
});

export const CurrencyEnumDeleteOneSchema = z.object({
  where: CurrencyEnumWhereUniqueInputObjectSchema,
});

export const CurrencyEnumFindFirstSchema = z.object({
  orderBy: z
    .union([
      CurrencyEnumOrderByWithRelationInputObjectSchema,
      CurrencyEnumOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CurrencyEnumWhereInputObjectSchema.optional(),
  cursor: CurrencyEnumWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CurrencyEnumScalarFieldEnumSchema).optional(),
});

export const CurrencyEnumFindManySchema = z
  .object({
    orderBy: z
      .union([
        CurrencyEnumOrderByWithRelationInputObjectSchema,
        CurrencyEnumOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: CurrencyEnumWhereInputObjectSchema.optional(),
    cursor: CurrencyEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(CurrencyEnumScalarFieldEnumSchema).optional(),
  })
  .optional();

export const CurrencyEnumFindUniqueSchema = z.object({
  where: CurrencyEnumWhereUniqueInputObjectSchema,
});

// export const CurrencyEnumGroupBySchema = z.object({
//   where: CurrencyEnumWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       CurrencyEnumOrderByWithAggregationInputObjectSchema,
//       CurrencyEnumOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: CurrencyEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(CurrencyEnumScalarFieldEnumSchema),
// });

export const CurrencyEnumUpdateManySchema = z.object({
  data: CurrencyEnumUpdateManyMutationInputObjectSchema,
  where: CurrencyEnumWhereInputObjectSchema.optional(),
});

export const CurrencyEnumUpdateOneSchema = z.object({
  data: CurrencyEnumUncheckedUpdateInputObjectSchema,
  where: CurrencyEnumWhereUniqueInputObjectSchema,
});

// export const CurrencyEnumUpsertSchema = z.object({
//   where: CurrencyEnumWhereUniqueInputObjectSchema,
//   create: CurrencyEnumUncheckedCreateInputObjectSchema,
//   update: CurrencyEnumUncheckedCreateInputObjectSchema,
// });

export const CurrencyEnumCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     CurrencyEnumOrderByWithRelationInputObjectSchema,
    //     CurrencyEnumOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: CurrencyEnumWhereInputObjectSchema.optional(),
    // cursor: CurrencyEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
