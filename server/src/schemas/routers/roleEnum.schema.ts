import { z } from "zod";

import { RoleEnumScalarFieldEnumSchema } from "@schemas/enums/RoleEnumScalarFieldEnum.schema";
import { RoleEnumCreateManyInputObjectSchema } from "@schemas/objects/RoleEnumCreateManyInput.schema";
import { RoleEnumUncheckedCreateInputObjectSchema } from "@schemas/objects/RoleEnumUncheckedCreateInput.schema";
import { RoleEnumWhereInputObjectSchema } from "@schemas/objects/RoleEnumWhereInput.schema";
import { RoleEnumOrderByWithRelationInputObjectSchema } from "@schemas/objects/RoleEnumOrderByWithRelationInput.schema";
import { RoleEnumWhereUniqueInputObjectSchema } from "@schemas/objects/RoleEnumWhereUniqueInput.schema";
import { RoleEnumUncheckedUpdateInputObjectSchema } from "@schemas/objects/RoleEnumUncheckedUpdateInput.schema";
// import { RoleEnumOrderByWithAggregationInputObjectSchema } from "@schemas/objects/RoleEnumOrderByWithAggregationInput.schema"; //
// import { RoleEnumScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/RoleEnumScalarWhereWithAggregatesInput.schema"; //
import { RoleEnumUpdateManyMutationInputObjectSchema } from "@schemas/objects/RoleEnumUpdateManyMutationInput.schema"; //
// import { RoleEnumCountAggregateInputObjectSchema } from "@schemas/objects/RoleEnumCountAggregateInput.schema"; //
// import { RoleEnumMinAggregateInputObjectSchema } from "@schemas/objects/RoleEnumMinAggregateInput.schema"; //
// import { RoleEnumMaxAggregateInputObjectSchema } from "@schemas/objects/RoleEnumMaxAggregateInput.schema"; //

// export const RoleEnumAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       RoleEnumOrderByWithRelationInputObjectSchema,
//       RoleEnumOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: RoleEnumWhereInputObjectSchema.optional(),
//   cursor: RoleEnumWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), RoleEnumCountAggregateInputObjectSchema])
//     .optional(),
//   _min: RoleEnumMinAggregateInputObjectSchema.optional(),
//   _max: RoleEnumMaxAggregateInputObjectSchema.optional(),
// });

export const RoleEnumCreateManySchema = z.object({
  data: z.union([
    RoleEnumCreateManyInputObjectSchema,
    z.array(RoleEnumCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const RoleEnumCreateOneSchema = z.object({
  data: RoleEnumUncheckedCreateInputObjectSchema,
});

export const RoleEnumDeleteManySchema = z.object({
  where: RoleEnumWhereInputObjectSchema.optional(),
});

export const RoleEnumDeleteOneSchema = z.object({
  where: RoleEnumWhereUniqueInputObjectSchema,
});

export const RoleEnumFindFirstSchema = z.object({
  orderBy: z
    .union([
      RoleEnumOrderByWithRelationInputObjectSchema,
      RoleEnumOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RoleEnumWhereInputObjectSchema.optional(),
  cursor: RoleEnumWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RoleEnumScalarFieldEnumSchema).optional(),
});

export const RoleEnumFindManySchema = z
  .object({
    orderBy: z
      .union([
        RoleEnumOrderByWithRelationInputObjectSchema,
        RoleEnumOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: RoleEnumWhereInputObjectSchema.optional(),
    cursor: RoleEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(RoleEnumScalarFieldEnumSchema).optional(),
  })
  .optional();

export const RoleEnumFindUniqueSchema = z.object({
  where: RoleEnumWhereUniqueInputObjectSchema,
});

// export const RoleEnumGroupBySchema = z.object({
//   where: RoleEnumWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       RoleEnumOrderByWithAggregationInputObjectSchema,
//       RoleEnumOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: RoleEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(RoleEnumScalarFieldEnumSchema),
// });

export const RoleEnumUpdateManySchema = z.object({
  data: RoleEnumUpdateManyMutationInputObjectSchema,
  where: RoleEnumWhereInputObjectSchema.optional(),
});

export const RoleEnumUpdateOneSchema = z.object({
  data: RoleEnumUncheckedUpdateInputObjectSchema,
  where: RoleEnumWhereUniqueInputObjectSchema,
});

// export const RoleEnumUpsertSchema = z.object({
//   where: RoleEnumWhereUniqueInputObjectSchema,
//   create: RoleEnumUncheckedCreateInputObjectSchema,
//   update: RoleEnumUncheckedCreateInputObjectSchema,
// });

export const RoleEnumCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     RoleEnumOrderByWithRelationInputObjectSchema,
    //     RoleEnumOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: RoleEnumWhereInputObjectSchema.optional(),
    // cursor: RoleEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
