import { z } from "zod";

import { TenantTypeScalarFieldEnumSchema } from "@schemas/enums/TenantTypeScalarFieldEnum.schema";
import { TenantTypeCreateManyInputObjectSchema } from "@schemas/objects/TenantTypeCreateManyInput.schema";
import { TenantTypeUncheckedCreateInputObjectSchema } from "@schemas/objects/TenantTypeUncheckedCreateInput.schema";
import { TenantTypeWhereInputObjectSchema } from "@schemas/objects/TenantTypeWhereInput.schema";
import { TenantTypeOrderByWithRelationInputObjectSchema } from "@schemas/objects/TenantTypeOrderByWithRelationInput.schema";
import { TenantTypeWhereUniqueInputObjectSchema } from "@schemas/objects/TenantTypeWhereUniqueInput.schema";
import { TenantTypeUncheckedUpdateInputObjectSchema } from "@schemas/objects/TenantTypeUncheckedUpdateInput.schema";
// import { TenantTypeOrderByWithAggregationInputObjectSchema } from "@schemas/objects/TenantTypeOrderByWithAggregationInput.schema"; //
// import { TenantTypeScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/TenantTypeScalarWhereWithAggregatesInput.schema"; //
import { TenantTypeUpdateManyMutationInputObjectSchema } from "@schemas/objects/TenantTypeUpdateManyMutationInput.schema"; //
// import { TenantTypeCountAggregateInputObjectSchema } from "@schemas/objects/TenantTypeCountAggregateInput.schema"; //
// import { TenantTypeMinAggregateInputObjectSchema } from "@schemas/objects/TenantTypeMinAggregateInput.schema"; //
// import { TenantTypeMaxAggregateInputObjectSchema } from "@schemas/objects/TenantTypeMaxAggregateInput.schema"; //

// export const TenantTypeAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       TenantTypeOrderByWithRelationInputObjectSchema,
//       TenantTypeOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: TenantTypeWhereInputObjectSchema.optional(),
//   cursor: TenantTypeWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), TenantTypeCountAggregateInputObjectSchema])
//     .optional(),
//   _min: TenantTypeMinAggregateInputObjectSchema.optional(),
//   _max: TenantTypeMaxAggregateInputObjectSchema.optional(),
// });

export const TenantTypeCreateManySchema = z.object({
  data: z.union([
    TenantTypeCreateManyInputObjectSchema,
    z.array(TenantTypeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const TenantTypeCreateOneSchema = z.object({
  data: TenantTypeUncheckedCreateInputObjectSchema,
});

export const TenantTypeDeleteManySchema = z.object({
  where: TenantTypeWhereInputObjectSchema.optional(),
});

export const TenantTypeDeleteOneSchema = z.object({
  where: TenantTypeWhereUniqueInputObjectSchema,
});

export const TenantTypeFindFirstSchema = z.object({
  orderBy: z
    .union([
      TenantTypeOrderByWithRelationInputObjectSchema,
      TenantTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TenantTypeWhereInputObjectSchema.optional(),
  cursor: TenantTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TenantTypeScalarFieldEnumSchema).optional(),
});

export const TenantTypeFindManySchema = z
  .object({
    orderBy: z
      .union([
        TenantTypeOrderByWithRelationInputObjectSchema,
        TenantTypeOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: TenantTypeWhereInputObjectSchema.optional(),
    cursor: TenantTypeWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(TenantTypeScalarFieldEnumSchema).optional(),
  })
  .optional();

export const TenantTypeFindUniqueSchema = z.object({
  where: TenantTypeWhereUniqueInputObjectSchema,
});

// export const TenantTypeGroupBySchema = z.object({
//   where: TenantTypeWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       TenantTypeOrderByWithAggregationInputObjectSchema,
//       TenantTypeOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: TenantTypeScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(TenantTypeScalarFieldEnumSchema),
// });

export const TenantTypeUpdateManySchema = z.object({
  data: TenantTypeUpdateManyMutationInputObjectSchema,
  where: TenantTypeWhereInputObjectSchema.optional(),
});

export const TenantTypeUpdateOneSchema = z.object({
  data: TenantTypeUncheckedUpdateInputObjectSchema,
  where: TenantTypeWhereUniqueInputObjectSchema,
});

// export const TenantTypeUpsertSchema = z.object({
//   where: TenantTypeWhereUniqueInputObjectSchema,
//   create: TenantTypeUncheckedCreateInputObjectSchema,
//   update: TenantTypeUncheckedCreateInputObjectSchema,
// });

export const TenantTypeCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     TenantTypeOrderByWithRelationInputObjectSchema,
    //     TenantTypeOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: TenantTypeWhereInputObjectSchema.optional(),
    // cursor: TenantTypeWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
