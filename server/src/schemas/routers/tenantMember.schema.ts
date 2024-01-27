import { z } from "zod";

import { TenantMemberScalarFieldEnumSchema } from "@schemas/enums/TenantMemberScalarFieldEnum.schema";
import { TenantMemberCreateManyInputObjectSchema } from "@schemas/objects/TenantMemberCreateManyInput.schema";
import { TenantMemberUncheckedCreateInputObjectSchema } from "@schemas/objects/TenantMemberUncheckedCreateInput.schema";
import { TenantMemberWhereInputObjectSchema } from "@schemas/objects/TenantMemberWhereInput.schema";
import { TenantMemberOrderByWithRelationInputObjectSchema } from "@schemas/objects/TenantMemberOrderByWithRelationInput.schema";
import { TenantMemberWhereUniqueInputObjectSchema } from "@schemas/objects/TenantMemberWhereUniqueInput.schema";
import { TenantMemberUncheckedUpdateInputObjectSchema } from "@schemas/objects/TenantMemberUncheckedUpdateInput.schema";
// import { TenantMemberOrderByWithAggregationInputObjectSchema } from "@schemas/objects/TenantMemberOrderByWithAggregationInput.schema"; //
// import { TenantMemberScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/TenantMemberScalarWhereWithAggregatesInput.schema"; //
import { TenantMemberUpdateManyMutationInputObjectSchema } from "@schemas/objects/TenantMemberUpdateManyMutationInput.schema"; //
// import { TenantMemberCountAggregateInputObjectSchema } from "@schemas/objects/TenantMemberCountAggregateInput.schema"; //
// import { TenantMemberMinAggregateInputObjectSchema } from "@schemas/objects/TenantMemberMinAggregateInput.schema"; //
// import { TenantMemberMaxAggregateInputObjectSchema } from "@schemas/objects/TenantMemberMaxAggregateInput.schema"; //

// export const TenantMemberAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       TenantMemberOrderByWithRelationInputObjectSchema,
//       TenantMemberOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: TenantMemberWhereInputObjectSchema.optional(),
//   cursor: TenantMemberWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), TenantMemberCountAggregateInputObjectSchema])
//     .optional(),
//   _min: TenantMemberMinAggregateInputObjectSchema.optional(),
//   _max: TenantMemberMaxAggregateInputObjectSchema.optional(),
// });

export const TenantMemberCreateManySchema = z.object({
  data: z.union([
    TenantMemberCreateManyInputObjectSchema,
    z.array(TenantMemberCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const TenantMemberCreateOneSchema = z.object({
  data: TenantMemberUncheckedCreateInputObjectSchema,
});

export const TenantMemberDeleteManySchema = z.object({
  where: TenantMemberWhereInputObjectSchema.optional(),
});

export const TenantMemberDeleteOneSchema = z.object({
  where: TenantMemberWhereUniqueInputObjectSchema,
});

export const TenantMemberFindFirstSchema = z.object({
  orderBy: z
    .union([
      TenantMemberOrderByWithRelationInputObjectSchema,
      TenantMemberOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TenantMemberWhereInputObjectSchema.optional(),
  cursor: TenantMemberWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TenantMemberScalarFieldEnumSchema).optional(),
});

export const TenantMemberFindManySchema = z
  .object({
    orderBy: z
      .union([
        TenantMemberOrderByWithRelationInputObjectSchema,
        TenantMemberOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: TenantMemberWhereInputObjectSchema.optional(),
    cursor: TenantMemberWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(TenantMemberScalarFieldEnumSchema).optional(),
  })
  .optional();

export const TenantMemberFindUniqueSchema = z.object({
  where: TenantMemberWhereUniqueInputObjectSchema,
});

// export const TenantMemberGroupBySchema = z.object({
//   where: TenantMemberWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       TenantMemberOrderByWithAggregationInputObjectSchema,
//       TenantMemberOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: TenantMemberScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(TenantMemberScalarFieldEnumSchema),
// });

export const TenantMemberUpdateManySchema = z.object({
  data: TenantMemberUpdateManyMutationInputObjectSchema,
  where: TenantMemberWhereInputObjectSchema.optional(),
});

export const TenantMemberUpdateOneSchema = z.object({
  data: TenantMemberUncheckedUpdateInputObjectSchema,
  where: TenantMemberWhereUniqueInputObjectSchema,
});

// export const TenantMemberUpsertSchema = z.object({
//   where: TenantMemberWhereUniqueInputObjectSchema,
//   create: TenantMemberUncheckedCreateInputObjectSchema,
//   update: TenantMemberUncheckedCreateInputObjectSchema,
// });

export const TenantMemberCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     TenantMemberOrderByWithRelationInputObjectSchema,
    //     TenantMemberOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: TenantMemberWhereInputObjectSchema.optional(),
    // cursor: TenantMemberWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
