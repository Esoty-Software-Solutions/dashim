import { z } from "zod";

import { IDCardScalarFieldEnumSchema } from "@schemas/enums/IDCardScalarFieldEnum.schema";
import { IDCardCreateManyInputObjectSchema } from "@schemas/objects/IDCardCreateManyInput.schema";
import { IDCardUncheckedCreateInputObjectSchema } from "@schemas/objects/IDCardUncheckedCreateInput.schema";
import { IDCardWhereInputObjectSchema } from "@schemas/objects/IDCardWhereInput.schema";
import { IDCardOrderByWithRelationInputObjectSchema } from "@schemas/objects/IDCardOrderByWithRelationInput.schema";
import { IDCardWhereUniqueInputObjectSchema } from "@schemas/objects/IDCardWhereUniqueInput.schema";
import { IDCardUncheckedUpdateInputObjectSchema } from "@schemas/objects/IDCardUncheckedUpdateInput.schema";
// import { IDCardOrderByWithAggregationInputObjectSchema } from "@schemas/objects/IDCardOrderByWithAggregationInput.schema"; //
// import { IDCardScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/IDCardScalarWhereWithAggregatesInput.schema"; //
import { IDCardUpdateManyMutationInputObjectSchema } from "@schemas/objects/IDCardUpdateManyMutationInput.schema"; //
// import { IDCardCountAggregateInputObjectSchema } from "@schemas/objects/IDCardCountAggregateInput.schema"; //
// import { IDCardMinAggregateInputObjectSchema } from "@schemas/objects/IDCardMinAggregateInput.schema"; //
// import { IDCardMaxAggregateInputObjectSchema } from "@schemas/objects/IDCardMaxAggregateInput.schema"; //

// export const IDCardAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       IDCardOrderByWithRelationInputObjectSchema,
//       IDCardOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: IDCardWhereInputObjectSchema.optional(),
//   cursor: IDCardWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), IDCardCountAggregateInputObjectSchema])
//     .optional(),
//   _min: IDCardMinAggregateInputObjectSchema.optional(),
//   _max: IDCardMaxAggregateInputObjectSchema.optional(),
// });

export const IDCardCreateManySchema = z.object({
  data: z.union([
    IDCardCreateManyInputObjectSchema,
    z.array(IDCardCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const IDCardCreateOneSchema = z.object({
  data: IDCardUncheckedCreateInputObjectSchema,
});

export const IDCardDeleteManySchema = z.object({
  where: IDCardWhereInputObjectSchema.optional(),
});

export const IDCardDeleteOneSchema = z.object({
  where: IDCardWhereUniqueInputObjectSchema,
});

export const IDCardFindFirstSchema = z.object({
  orderBy: z
    .union([
      IDCardOrderByWithRelationInputObjectSchema,
      IDCardOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: IDCardWhereInputObjectSchema.optional(),
  cursor: IDCardWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(IDCardScalarFieldEnumSchema).optional(),
});

export const IDCardFindManySchema = z
  .object({
    orderBy: z
      .union([
        IDCardOrderByWithRelationInputObjectSchema,
        IDCardOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: IDCardWhereInputObjectSchema.optional(),
    cursor: IDCardWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(IDCardScalarFieldEnumSchema).optional(),
  })
  .optional();

export const IDCardFindUniqueSchema = z.object({
  where: IDCardWhereUniqueInputObjectSchema,
});

// export const IDCardGroupBySchema = z.object({
//   where: IDCardWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       IDCardOrderByWithAggregationInputObjectSchema,
//       IDCardOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: IDCardScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(IDCardScalarFieldEnumSchema),
// });

export const IDCardUpdateManySchema = z.object({
  data: IDCardUpdateManyMutationInputObjectSchema,
  where: IDCardWhereInputObjectSchema.optional(),
});

export const IDCardUpdateOneSchema = z.object({
  data: IDCardUncheckedUpdateInputObjectSchema,
  where: IDCardWhereUniqueInputObjectSchema,
});

// export const IDCardUpsertSchema = z.object({
//   where: IDCardWhereUniqueInputObjectSchema,
//   create: IDCardUncheckedCreateInputObjectSchema,
//   update: IDCardUncheckedCreateInputObjectSchema,
// });

export const IDCardCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     IDCardOrderByWithRelationInputObjectSchema,
    //     IDCardOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: IDCardWhereInputObjectSchema.optional(),
    // cursor: IDCardWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
