import { z } from "zod";

import { DeviceTokenScalarFieldEnumSchema } from "@schemas/enums/DeviceTokenScalarFieldEnum.schema";
import { DeviceTokenCreateManyInputObjectSchema } from "@schemas/objects/DeviceTokenCreateManyInput.schema";
import { DeviceTokenUncheckedCreateInputObjectSchema } from "@schemas/objects/DeviceTokenUncheckedCreateInput.schema";
import { DeviceTokenWhereInputObjectSchema } from "@schemas/objects/DeviceTokenWhereInput.schema";
import { DeviceTokenOrderByWithRelationInputObjectSchema } from "@schemas/objects/DeviceTokenOrderByWithRelationInput.schema";
import { DeviceTokenWhereUniqueInputObjectSchema } from "@schemas/objects/DeviceTokenWhereUniqueInput.schema";
import { DeviceTokenUncheckedUpdateInputObjectSchema } from "@schemas/objects/DeviceTokenUncheckedUpdateInput.schema";
// import { DeviceTokenOrderByWithAggregationInputObjectSchema } from "@schemas/objects/DeviceTokenOrderByWithAggregationInput.schema"; //
// import { DeviceTokenScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/DeviceTokenScalarWhereWithAggregatesInput.schema"; //
import { DeviceTokenUpdateManyMutationInputObjectSchema } from "@schemas/objects/DeviceTokenUpdateManyMutationInput.schema"; //
// import { DeviceTokenCountAggregateInputObjectSchema } from "@schemas/objects/DeviceTokenCountAggregateInput.schema"; //
// import { DeviceTokenMinAggregateInputObjectSchema } from "@schemas/objects/DeviceTokenMinAggregateInput.schema"; //
// import { DeviceTokenMaxAggregateInputObjectSchema } from "@schemas/objects/DeviceTokenMaxAggregateInput.schema"; //

// export const DeviceTokenAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       DeviceTokenOrderByWithRelationInputObjectSchema,
//       DeviceTokenOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: DeviceTokenWhereInputObjectSchema.optional(),
//   cursor: DeviceTokenWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), DeviceTokenCountAggregateInputObjectSchema])
//     .optional(),
//   _min: DeviceTokenMinAggregateInputObjectSchema.optional(),
//   _max: DeviceTokenMaxAggregateInputObjectSchema.optional(),
// });

export const DeviceTokenCreateManySchema = z.object({
  data: z.union([
    DeviceTokenCreateManyInputObjectSchema,
    z.array(DeviceTokenCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const DeviceTokenCreateOneSchema = z.object({
  data: DeviceTokenUncheckedCreateInputObjectSchema,
});

export const DeviceTokenDeleteManySchema = z.object({
  where: DeviceTokenWhereInputObjectSchema.optional(),
});

export const DeviceTokenDeleteOneSchema = z.object({
  where: DeviceTokenWhereUniqueInputObjectSchema,
});

export const DeviceTokenFindFirstSchema = z.object({
  orderBy: z
    .union([
      DeviceTokenOrderByWithRelationInputObjectSchema,
      DeviceTokenOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DeviceTokenWhereInputObjectSchema.optional(),
  cursor: DeviceTokenWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DeviceTokenScalarFieldEnumSchema).optional(),
});

export const DeviceTokenFindManySchema = z
  .object({
    orderBy: z
      .union([
        DeviceTokenOrderByWithRelationInputObjectSchema,
        DeviceTokenOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: DeviceTokenWhereInputObjectSchema.optional(),
    cursor: DeviceTokenWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(DeviceTokenScalarFieldEnumSchema).optional(),
  })
  .optional();

export const DeviceTokenFindUniqueSchema = z.object({
  where: DeviceTokenWhereUniqueInputObjectSchema,
});

// export const DeviceTokenGroupBySchema = z.object({
//   where: DeviceTokenWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       DeviceTokenOrderByWithAggregationInputObjectSchema,
//       DeviceTokenOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: DeviceTokenScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(DeviceTokenScalarFieldEnumSchema),
// });

export const DeviceTokenUpdateManySchema = z.object({
  data: DeviceTokenUpdateManyMutationInputObjectSchema,
  where: DeviceTokenWhereInputObjectSchema.optional(),
});

export const DeviceTokenUpdateOneSchema = z.object({
  data: DeviceTokenUncheckedUpdateInputObjectSchema,
  where: DeviceTokenWhereUniqueInputObjectSchema,
});

// export const DeviceTokenUpsertSchema = z.object({
//   where: DeviceTokenWhereUniqueInputObjectSchema,
//   create: DeviceTokenUncheckedCreateInputObjectSchema,
//   update: DeviceTokenUncheckedCreateInputObjectSchema,
// });

export const DeviceTokenCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     DeviceTokenOrderByWithRelationInputObjectSchema,
    //     DeviceTokenOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: DeviceTokenWhereInputObjectSchema.optional(),
    // cursor: DeviceTokenWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
