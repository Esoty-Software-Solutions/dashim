import { z } from "zod";

import { RoleScalarFieldEnumSchema } from "@schemas/enums/RoleScalarFieldEnum.schema";
import { RoleCreateManyInputObjectSchema } from "@schemas/objects/RoleCreateManyInput.schema";
import { RoleUncheckedCreateInputObjectSchema } from "@schemas/objects/RoleUncheckedCreateInput.schema";
import { RoleWhereInputObjectSchema } from "@schemas/objects/RoleWhereInput.schema";
import { RoleOrderByWithRelationInputObjectSchema } from "@schemas/objects/RoleOrderByWithRelationInput.schema";
import { RoleWhereUniqueInputObjectSchema } from "@schemas/objects/RoleWhereUniqueInput.schema";
import { RoleUncheckedUpdateInputObjectSchema } from "@schemas/objects/RoleUncheckedUpdateInput.schema";
// import { RoleOrderByWithAggregationInputObjectSchema } from "@schemas/objects/RoleOrderByWithAggregationInput.schema"; //
// import { RoleScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/RoleScalarWhereWithAggregatesInput.schema"; //
import { RoleUpdateManyMutationInputObjectSchema } from "@schemas/objects/RoleUpdateManyMutationInput.schema"; //
// import { RoleCountAggregateInputObjectSchema } from "@schemas/objects/RoleCountAggregateInput.schema"; //
// import { RoleMinAggregateInputObjectSchema } from "@schemas/objects/RoleMinAggregateInput.schema"; //
// import { RoleMaxAggregateInputObjectSchema } from "@schemas/objects/RoleMaxAggregateInput.schema"; //

// export const RoleAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       RoleOrderByWithRelationInputObjectSchema,
//       RoleOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: RoleWhereInputObjectSchema.optional(),
//   cursor: RoleWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), RoleCountAggregateInputObjectSchema])
//     .optional(),
//   _min: RoleMinAggregateInputObjectSchema.optional(),
//   _max: RoleMaxAggregateInputObjectSchema.optional(),
// });

export const RoleCreateManySchema = z.object({
  data: z.union([
    RoleCreateManyInputObjectSchema,
    z.array(RoleCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const RoleCreateOneSchema = z.object({
  data: RoleUncheckedCreateInputObjectSchema,
});

export const RoleDeleteManySchema = z.object({
  where: RoleWhereInputObjectSchema.optional(),
});

export const RoleDeleteOneSchema = z.object({
  where: RoleWhereUniqueInputObjectSchema,
});

export const RoleFindFirstSchema = z.object({
  orderBy: z
    .union([
      RoleOrderByWithRelationInputObjectSchema,
      RoleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RoleWhereInputObjectSchema.optional(),
  cursor: RoleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RoleScalarFieldEnumSchema).optional(),
});

export const RoleFindManySchema = z
  .object({
    orderBy: z
      .union([
        RoleOrderByWithRelationInputObjectSchema,
        RoleOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: RoleWhereInputObjectSchema.optional(),
    cursor: RoleWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(RoleScalarFieldEnumSchema).optional(),
  })
  .optional();

export const RoleFindUniqueSchema = z.object({
  where: RoleWhereUniqueInputObjectSchema,
});

// export const RoleGroupBySchema = z.object({
//   where: RoleWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       RoleOrderByWithAggregationInputObjectSchema,
//       RoleOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: RoleScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(RoleScalarFieldEnumSchema),
// });

export const RoleUpdateManySchema = z.object({
  data: RoleUpdateManyMutationInputObjectSchema,
  where: RoleWhereInputObjectSchema.optional(),
});

export const RoleUpdateOneSchema = z.object({
  data: RoleUncheckedUpdateInputObjectSchema,
  where: RoleWhereUniqueInputObjectSchema,
});

// export const RoleUpsertSchema = z.object({
//   where: RoleWhereUniqueInputObjectSchema,
//   create: RoleUncheckedCreateInputObjectSchema,
//   update: RoleUncheckedCreateInputObjectSchema,
// });

export const RoleCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     RoleOrderByWithRelationInputObjectSchema,
    //     RoleOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: RoleWhereInputObjectSchema.optional(),
    // cursor: RoleWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
