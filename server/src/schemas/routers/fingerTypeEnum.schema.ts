import { z } from "zod";

import { FingerTypeEnumScalarFieldEnumSchema } from "@schemas/enums/FingerTypeEnumScalarFieldEnum.schema";
import { FingerTypeEnumCreateManyInputObjectSchema } from "@schemas/objects/FingerTypeEnumCreateManyInput.schema";
import { FingerTypeEnumUncheckedCreateInputObjectSchema } from "@schemas/objects/FingerTypeEnumUncheckedCreateInput.schema";
import { FingerTypeEnumWhereInputObjectSchema } from "@schemas/objects/FingerTypeEnumWhereInput.schema";
import { FingerTypeEnumOrderByWithRelationInputObjectSchema } from "@schemas/objects/FingerTypeEnumOrderByWithRelationInput.schema";
import { FingerTypeEnumWhereUniqueInputObjectSchema } from "@schemas/objects/FingerTypeEnumWhereUniqueInput.schema";
import { FingerTypeEnumUncheckedUpdateInputObjectSchema } from "@schemas/objects/FingerTypeEnumUncheckedUpdateInput.schema";
// import { FingerTypeEnumOrderByWithAggregationInputObjectSchema } from "@schemas/objects/FingerTypeEnumOrderByWithAggregationInput.schema"; //
// import { FingerTypeEnumScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/FingerTypeEnumScalarWhereWithAggregatesInput.schema"; //
import { FingerTypeEnumUpdateManyMutationInputObjectSchema } from "@schemas/objects/FingerTypeEnumUpdateManyMutationInput.schema"; //
// import { FingerTypeEnumCountAggregateInputObjectSchema } from "@schemas/objects/FingerTypeEnumCountAggregateInput.schema"; //
// import { FingerTypeEnumMinAggregateInputObjectSchema } from "@schemas/objects/FingerTypeEnumMinAggregateInput.schema"; //
// import { FingerTypeEnumMaxAggregateInputObjectSchema } from "@schemas/objects/FingerTypeEnumMaxAggregateInput.schema"; //

// export const FingerTypeEnumAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       FingerTypeEnumOrderByWithRelationInputObjectSchema,
//       FingerTypeEnumOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: FingerTypeEnumWhereInputObjectSchema.optional(),
//   cursor: FingerTypeEnumWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), FingerTypeEnumCountAggregateInputObjectSchema])
//     .optional(),
//   _min: FingerTypeEnumMinAggregateInputObjectSchema.optional(),
//   _max: FingerTypeEnumMaxAggregateInputObjectSchema.optional(),
// });

export const FingerTypeEnumCreateManySchema = z.object({
  data: z.union([
    FingerTypeEnumCreateManyInputObjectSchema,
    z.array(FingerTypeEnumCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const FingerTypeEnumCreateOneSchema = z.object({
  data: FingerTypeEnumUncheckedCreateInputObjectSchema,
});

export const FingerTypeEnumDeleteManySchema = z.object({
  where: FingerTypeEnumWhereInputObjectSchema.optional(),
});

export const FingerTypeEnumDeleteOneSchema = z.object({
  where: FingerTypeEnumWhereUniqueInputObjectSchema,
});

export const FingerTypeEnumFindFirstSchema = z.object({
  orderBy: z
    .union([
      FingerTypeEnumOrderByWithRelationInputObjectSchema,
      FingerTypeEnumOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FingerTypeEnumWhereInputObjectSchema.optional(),
  cursor: FingerTypeEnumWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FingerTypeEnumScalarFieldEnumSchema).optional(),
});

export const FingerTypeEnumFindManySchema = z
  .object({
    orderBy: z
      .union([
        FingerTypeEnumOrderByWithRelationInputObjectSchema,
        FingerTypeEnumOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: FingerTypeEnumWhereInputObjectSchema.optional(),
    cursor: FingerTypeEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(FingerTypeEnumScalarFieldEnumSchema).optional(),
  })
  .optional();

export const FingerTypeEnumFindUniqueSchema = z.object({
  where: FingerTypeEnumWhereUniqueInputObjectSchema,
});

// export const FingerTypeEnumGroupBySchema = z.object({
//   where: FingerTypeEnumWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       FingerTypeEnumOrderByWithAggregationInputObjectSchema,
//       FingerTypeEnumOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: FingerTypeEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(FingerTypeEnumScalarFieldEnumSchema),
// });

export const FingerTypeEnumUpdateManySchema = z.object({
  data: FingerTypeEnumUpdateManyMutationInputObjectSchema,
  where: FingerTypeEnumWhereInputObjectSchema.optional(),
});

export const FingerTypeEnumUpdateOneSchema = z.object({
  data: FingerTypeEnumUncheckedUpdateInputObjectSchema,
  where: FingerTypeEnumWhereUniqueInputObjectSchema,
});

// export const FingerTypeEnumUpsertSchema = z.object({
//   where: FingerTypeEnumWhereUniqueInputObjectSchema,
//   create: FingerTypeEnumUncheckedCreateInputObjectSchema,
//   update: FingerTypeEnumUncheckedCreateInputObjectSchema,
// });

export const FingerTypeEnumCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     FingerTypeEnumOrderByWithRelationInputObjectSchema,
    //     FingerTypeEnumOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: FingerTypeEnumWhereInputObjectSchema.optional(),
    // cursor: FingerTypeEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
