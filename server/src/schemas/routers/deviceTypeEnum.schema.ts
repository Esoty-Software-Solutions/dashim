import { z } from "zod";

import { DeviceTypeEnumScalarFieldEnumSchema } from "@schemas/enums/DeviceTypeEnumScalarFieldEnum.schema";
import { DeviceTypeEnumCreateManyInputObjectSchema } from "@schemas/objects/DeviceTypeEnumCreateManyInput.schema";
import { DeviceTypeEnumUncheckedCreateInputObjectSchema } from "@schemas/objects/DeviceTypeEnumUncheckedCreateInput.schema";
import { DeviceTypeEnumWhereInputObjectSchema } from "@schemas/objects/DeviceTypeEnumWhereInput.schema";
import { DeviceTypeEnumOrderByWithRelationInputObjectSchema } from "@schemas/objects/DeviceTypeEnumOrderByWithRelationInput.schema";
import { DeviceTypeEnumWhereUniqueInputObjectSchema } from "@schemas/objects/DeviceTypeEnumWhereUniqueInput.schema";
import { DeviceTypeEnumUncheckedUpdateInputObjectSchema } from "@schemas/objects/DeviceTypeEnumUncheckedUpdateInput.schema";
// import { DeviceTypeEnumOrderByWithAggregationInputObjectSchema } from "@schemas/objects/DeviceTypeEnumOrderByWithAggregationInput.schema"; //
// import { DeviceTypeEnumScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/DeviceTypeEnumScalarWhereWithAggregatesInput.schema"; //
import { DeviceTypeEnumUpdateManyMutationInputObjectSchema } from "@schemas/objects/DeviceTypeEnumUpdateManyMutationInput.schema"; //
// import { DeviceTypeEnumCountAggregateInputObjectSchema } from "@schemas/objects/DeviceTypeEnumCountAggregateInput.schema"; //
// import { DeviceTypeEnumMinAggregateInputObjectSchema } from "@schemas/objects/DeviceTypeEnumMinAggregateInput.schema"; //
// import { DeviceTypeEnumMaxAggregateInputObjectSchema } from "@schemas/objects/DeviceTypeEnumMaxAggregateInput.schema"; //

// export const DeviceTypeEnumAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       DeviceTypeEnumOrderByWithRelationInputObjectSchema,
//       DeviceTypeEnumOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: DeviceTypeEnumWhereInputObjectSchema.optional(),
//   cursor: DeviceTypeEnumWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), DeviceTypeEnumCountAggregateInputObjectSchema])
//     .optional(),
//   _min: DeviceTypeEnumMinAggregateInputObjectSchema.optional(),
//   _max: DeviceTypeEnumMaxAggregateInputObjectSchema.optional(),
// });

export const DeviceTypeEnumCreateManySchema = z.object({
  data: z.union([
    DeviceTypeEnumCreateManyInputObjectSchema,
    z.array(DeviceTypeEnumCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const DeviceTypeEnumCreateOneSchema = z.object({
  data: DeviceTypeEnumUncheckedCreateInputObjectSchema,
});

export const DeviceTypeEnumDeleteManySchema = z.object({
  where: DeviceTypeEnumWhereInputObjectSchema.optional(),
});

export const DeviceTypeEnumDeleteOneSchema = z.object({
  where: DeviceTypeEnumWhereUniqueInputObjectSchema,
});

export const DeviceTypeEnumFindFirstSchema = z.object({
  orderBy: z
    .union([
      DeviceTypeEnumOrderByWithRelationInputObjectSchema,
      DeviceTypeEnumOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DeviceTypeEnumWhereInputObjectSchema.optional(),
  cursor: DeviceTypeEnumWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DeviceTypeEnumScalarFieldEnumSchema).optional(),
});

export const DeviceTypeEnumFindManySchema = z
  .object({
    orderBy: z
      .union([
        DeviceTypeEnumOrderByWithRelationInputObjectSchema,
        DeviceTypeEnumOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: DeviceTypeEnumWhereInputObjectSchema.optional(),
    cursor: DeviceTypeEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(DeviceTypeEnumScalarFieldEnumSchema).optional(),
  })
  .optional();

export const DeviceTypeEnumFindUniqueSchema = z.object({
  where: DeviceTypeEnumWhereUniqueInputObjectSchema,
});

// export const DeviceTypeEnumGroupBySchema = z.object({
//   where: DeviceTypeEnumWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       DeviceTypeEnumOrderByWithAggregationInputObjectSchema,
//       DeviceTypeEnumOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: DeviceTypeEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(DeviceTypeEnumScalarFieldEnumSchema),
// });

export const DeviceTypeEnumUpdateManySchema = z.object({
  data: DeviceTypeEnumUpdateManyMutationInputObjectSchema,
  where: DeviceTypeEnumWhereInputObjectSchema.optional(),
});

export const DeviceTypeEnumUpdateOneSchema = z.object({
  data: DeviceTypeEnumUncheckedUpdateInputObjectSchema,
  where: DeviceTypeEnumWhereUniqueInputObjectSchema,
});

// export const DeviceTypeEnumUpsertSchema = z.object({
//   where: DeviceTypeEnumWhereUniqueInputObjectSchema,
//   create: DeviceTypeEnumUncheckedCreateInputObjectSchema,
//   update: DeviceTypeEnumUncheckedCreateInputObjectSchema,
// });

export const DeviceTypeEnumCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     DeviceTypeEnumOrderByWithRelationInputObjectSchema,
    //     DeviceTypeEnumOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: DeviceTypeEnumWhereInputObjectSchema.optional(),
    // cursor: DeviceTypeEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
