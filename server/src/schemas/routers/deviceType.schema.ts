import { z } from "zod";

import { DeviceTypeScalarFieldEnumSchema } from "@schemas/enums/DeviceTypeScalarFieldEnum.schema";
import { DeviceTypeCreateManyInputObjectSchema } from "@schemas/objects/DeviceTypeCreateManyInput.schema";
import { DeviceTypeUncheckedCreateInputObjectSchema } from "@schemas/objects/DeviceTypeUncheckedCreateInput.schema";
import { DeviceTypeWhereInputObjectSchema } from "@schemas/objects/DeviceTypeWhereInput.schema";
import { DeviceTypeOrderByWithRelationInputObjectSchema } from "@schemas/objects/DeviceTypeOrderByWithRelationInput.schema";
import { DeviceTypeWhereUniqueInputObjectSchema } from "@schemas/objects/DeviceTypeWhereUniqueInput.schema";
import { DeviceTypeUncheckedUpdateInputObjectSchema } from "@schemas/objects/DeviceTypeUncheckedUpdateInput.schema";
// import { DeviceTypeOrderByWithAggregationInputObjectSchema } from "@schemas/objects/DeviceTypeOrderByWithAggregationInput.schema"; //
// import { DeviceTypeScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/DeviceTypeScalarWhereWithAggregatesInput.schema"; //
import { DeviceTypeUpdateManyMutationInputObjectSchema } from "@schemas/objects/DeviceTypeUpdateManyMutationInput.schema"; //
// import { DeviceTypeCountAggregateInputObjectSchema } from "@schemas/objects/DeviceTypeCountAggregateInput.schema"; //
// import { DeviceTypeMinAggregateInputObjectSchema } from "@schemas/objects/DeviceTypeMinAggregateInput.schema"; //
// import { DeviceTypeMaxAggregateInputObjectSchema } from "@schemas/objects/DeviceTypeMaxAggregateInput.schema"; //

// export const DeviceTypeAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       DeviceTypeOrderByWithRelationInputObjectSchema,
//       DeviceTypeOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: DeviceTypeWhereInputObjectSchema.optional(),
//   cursor: DeviceTypeWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), DeviceTypeCountAggregateInputObjectSchema])
//     .optional(),
//   _min: DeviceTypeMinAggregateInputObjectSchema.optional(),
//   _max: DeviceTypeMaxAggregateInputObjectSchema.optional(),
// });

export const DeviceTypeCreateManySchema = z.object({
  data: z.union([
    DeviceTypeCreateManyInputObjectSchema,
    z.array(DeviceTypeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const DeviceTypeCreateOneSchema = z.object({
  data: DeviceTypeUncheckedCreateInputObjectSchema,
});

export const DeviceTypeDeleteManySchema = z.object({
  where: DeviceTypeWhereInputObjectSchema.optional(),
});

export const DeviceTypeDeleteOneSchema = z.object({
  where: DeviceTypeWhereUniqueInputObjectSchema,
});

export const DeviceTypeFindFirstSchema = z.object({
  orderBy: z
    .union([
      DeviceTypeOrderByWithRelationInputObjectSchema,
      DeviceTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DeviceTypeWhereInputObjectSchema.optional(),
  cursor: DeviceTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DeviceTypeScalarFieldEnumSchema).optional(),
});

export const DeviceTypeFindManySchema = z
  .object({
    orderBy: z
      .union([
        DeviceTypeOrderByWithRelationInputObjectSchema,
        DeviceTypeOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: DeviceTypeWhereInputObjectSchema.optional(),
    cursor: DeviceTypeWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(DeviceTypeScalarFieldEnumSchema).optional(),
  })
  .optional();

export const DeviceTypeFindUniqueSchema = z.object({
  where: DeviceTypeWhereUniqueInputObjectSchema,
});

// export const DeviceTypeGroupBySchema = z.object({
//   where: DeviceTypeWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       DeviceTypeOrderByWithAggregationInputObjectSchema,
//       DeviceTypeOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: DeviceTypeScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(DeviceTypeScalarFieldEnumSchema),
// });

export const DeviceTypeUpdateManySchema = z.object({
  data: DeviceTypeUpdateManyMutationInputObjectSchema,
  where: DeviceTypeWhereInputObjectSchema.optional(),
});

export const DeviceTypeUpdateOneSchema = z.object({
  data: DeviceTypeUncheckedUpdateInputObjectSchema,
  where: DeviceTypeWhereUniqueInputObjectSchema,
});

// export const DeviceTypeUpsertSchema = z.object({
//   where: DeviceTypeWhereUniqueInputObjectSchema,
//   create: DeviceTypeUncheckedCreateInputObjectSchema,
//   update: DeviceTypeUncheckedCreateInputObjectSchema,
// });

export const DeviceTypeCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     DeviceTypeOrderByWithRelationInputObjectSchema,
    //     DeviceTypeOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: DeviceTypeWhereInputObjectSchema.optional(),
    // cursor: DeviceTypeWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
