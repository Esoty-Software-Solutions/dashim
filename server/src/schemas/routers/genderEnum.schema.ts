import { z } from "zod";

import { GenderEnumScalarFieldEnumSchema } from "@schemas/enums/GenderEnumScalarFieldEnum.schema";
import { GenderEnumCreateManyInputObjectSchema } from "@schemas/objects/GenderEnumCreateManyInput.schema";
import { GenderEnumUncheckedCreateInputObjectSchema } from "@schemas/objects/GenderEnumUncheckedCreateInput.schema";
import { GenderEnumWhereInputObjectSchema } from "@schemas/objects/GenderEnumWhereInput.schema";
import { GenderEnumOrderByWithRelationInputObjectSchema } from "@schemas/objects/GenderEnumOrderByWithRelationInput.schema";
import { GenderEnumWhereUniqueInputObjectSchema } from "@schemas/objects/GenderEnumWhereUniqueInput.schema";
import { GenderEnumUncheckedUpdateInputObjectSchema } from "@schemas/objects/GenderEnumUncheckedUpdateInput.schema";
// import { GenderEnumOrderByWithAggregationInputObjectSchema } from "@schemas/objects/GenderEnumOrderByWithAggregationInput.schema"; //
// import { GenderEnumScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/GenderEnumScalarWhereWithAggregatesInput.schema"; //
import { GenderEnumUpdateManyMutationInputObjectSchema } from "@schemas/objects/GenderEnumUpdateManyMutationInput.schema"; //
// import { GenderEnumCountAggregateInputObjectSchema } from "@schemas/objects/GenderEnumCountAggregateInput.schema"; //
// import { GenderEnumMinAggregateInputObjectSchema } from "@schemas/objects/GenderEnumMinAggregateInput.schema"; //
// import { GenderEnumMaxAggregateInputObjectSchema } from "@schemas/objects/GenderEnumMaxAggregateInput.schema"; //

// export const GenderEnumAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       GenderEnumOrderByWithRelationInputObjectSchema,
//       GenderEnumOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: GenderEnumWhereInputObjectSchema.optional(),
//   cursor: GenderEnumWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), GenderEnumCountAggregateInputObjectSchema])
//     .optional(),
//   _min: GenderEnumMinAggregateInputObjectSchema.optional(),
//   _max: GenderEnumMaxAggregateInputObjectSchema.optional(),
// });

export const GenderEnumCreateManySchema = z.object({
  data: z.union([
    GenderEnumCreateManyInputObjectSchema,
    z.array(GenderEnumCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const GenderEnumCreateOneSchema = z.object({
  data: GenderEnumUncheckedCreateInputObjectSchema,
});

export const GenderEnumDeleteManySchema = z.object({
  where: GenderEnumWhereInputObjectSchema.optional(),
});

export const GenderEnumDeleteOneSchema = z.object({
  where: GenderEnumWhereUniqueInputObjectSchema,
});

export const GenderEnumFindFirstSchema = z.object({
  orderBy: z
    .union([
      GenderEnumOrderByWithRelationInputObjectSchema,
      GenderEnumOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GenderEnumWhereInputObjectSchema.optional(),
  cursor: GenderEnumWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(GenderEnumScalarFieldEnumSchema).optional(),
});

export const GenderEnumFindManySchema = z
  .object({
    orderBy: z
      .union([
        GenderEnumOrderByWithRelationInputObjectSchema,
        GenderEnumOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: GenderEnumWhereInputObjectSchema.optional(),
    cursor: GenderEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(GenderEnumScalarFieldEnumSchema).optional(),
  })
  .optional();

export const GenderEnumFindUniqueSchema = z.object({
  where: GenderEnumWhereUniqueInputObjectSchema,
});

// export const GenderEnumGroupBySchema = z.object({
//   where: GenderEnumWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       GenderEnumOrderByWithAggregationInputObjectSchema,
//       GenderEnumOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: GenderEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(GenderEnumScalarFieldEnumSchema),
// });

export const GenderEnumUpdateManySchema = z.object({
  data: GenderEnumUpdateManyMutationInputObjectSchema,
  where: GenderEnumWhereInputObjectSchema.optional(),
});

export const GenderEnumUpdateOneSchema = z.object({
  data: GenderEnumUncheckedUpdateInputObjectSchema,
  where: GenderEnumWhereUniqueInputObjectSchema,
});

// export const GenderEnumUpsertSchema = z.object({
//   where: GenderEnumWhereUniqueInputObjectSchema,
//   create: GenderEnumUncheckedCreateInputObjectSchema,
//   update: GenderEnumUncheckedCreateInputObjectSchema,
// });

export const GenderEnumCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     GenderEnumOrderByWithRelationInputObjectSchema,
    //     GenderEnumOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: GenderEnumWhereInputObjectSchema.optional(),
    // cursor: GenderEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
