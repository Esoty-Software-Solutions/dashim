import { z } from "zod";

import { CurrencyScalarFieldEnumSchema } from "@schemas/enums/CurrencyScalarFieldEnum.schema";
import { CurrencyCreateManyInputObjectSchema } from "@schemas/objects/CurrencyCreateManyInput.schema";
import { CurrencyUncheckedCreateInputObjectSchema } from "@schemas/objects/CurrencyUncheckedCreateInput.schema";
import { CurrencyWhereInputObjectSchema } from "@schemas/objects/CurrencyWhereInput.schema";
import { CurrencyOrderByWithRelationInputObjectSchema } from "@schemas/objects/CurrencyOrderByWithRelationInput.schema";
import { CurrencyWhereUniqueInputObjectSchema } from "@schemas/objects/CurrencyWhereUniqueInput.schema";
import { CurrencyUncheckedUpdateInputObjectSchema } from "@schemas/objects/CurrencyUncheckedUpdateInput.schema";
// import { CurrencyOrderByWithAggregationInputObjectSchema } from "@schemas/objects/CurrencyOrderByWithAggregationInput.schema"; //
// import { CurrencyScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/CurrencyScalarWhereWithAggregatesInput.schema"; //
// import { CurrencyUpdateManyMutationInputObjectSchema } from "@schemas/objects/CurrencyUpdateManyMutationInput.schema"; //
// import { CurrencyCountAggregateInputObjectSchema } from "@schemas/objects/CurrencyCountAggregateInput.schema"; //
// import { CurrencyMinAggregateInputObjectSchema } from "@schemas/objects/CurrencyMinAggregateInput.schema"; //
// import { CurrencyMaxAggregateInputObjectSchema } from "@schemas/objects/CurrencyMaxAggregateInput.schema"; //

// export const CurrencyAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       CurrencyOrderByWithRelationInputObjectSchema,
//       CurrencyOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: CurrencyWhereInputObjectSchema.optional(),
//   cursor: CurrencyWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), CurrencyCountAggregateInputObjectSchema])
//     .optional(),
//   _min: CurrencyMinAggregateInputObjectSchema.optional(),
//   _max: CurrencyMaxAggregateInputObjectSchema.optional(),
// });

export const CurrencyCreateManySchema = z.object({
  data: z.union([
    CurrencyCreateManyInputObjectSchema,
    z.array(CurrencyCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const CurrencyCreateOneSchema = z.object({
  data: CurrencyUncheckedCreateInputObjectSchema,
});

export const CurrencyDeleteManySchema = z.object({
  where: CurrencyWhereInputObjectSchema.optional(),
});

export const CurrencyDeleteOneSchema = z.object({
  where: CurrencyWhereUniqueInputObjectSchema.optional(),
});

// export const CurrencyFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       CurrencyOrderByWithRelationInputObjectSchema,
//       CurrencyOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: CurrencyWhereInputObjectSchema.optional(),
//   cursor: CurrencyWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(CurrencyScalarFieldEnumSchema).optional(),
// });

export const CurrencyFindManySchema = z
  .object({
    orderBy: z
      .union([
        CurrencyOrderByWithRelationInputObjectSchema,
        CurrencyOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: CurrencyWhereInputObjectSchema.optional(),
    cursor: CurrencyWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(CurrencyScalarFieldEnumSchema).optional(),
  })
  .optional();

export const CurrencyFindUniqueSchema = z.object({
  where: CurrencyWhereUniqueInputObjectSchema,
});

// export const CurrencyGroupBySchema = z.object({
//   where: CurrencyWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       CurrencyOrderByWithAggregationInputObjectSchema,
//       CurrencyOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: CurrencyScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(CurrencyScalarFieldEnumSchema),
// });

// export const CurrencyUpdateManySchema = z.object({
//   data: CurrencyUpdateManyMutationInputObjectSchema,
//   where: CurrencyWhereInputObjectSchema.optional(),
// });

export const CurrencyUpdateOneSchema = z.object({
  data: CurrencyUncheckedUpdateInputObjectSchema,
  where: CurrencyWhereUniqueInputObjectSchema,
});

// export const CurrencyUpsertSchema = z.object({
//   where: CurrencyWhereUniqueInputObjectSchema,
//   create: CurrencyUncheckedCreateInputObjectSchema,
//   update: CurrencyUncheckedCreateInputObjectSchema,
// });

export const CurrencyCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     CurrencyOrderByWithRelationInputObjectSchema,
    //     CurrencyOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: CurrencyWhereInputObjectSchema.optional(),
    // cursor: CurrencyWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
