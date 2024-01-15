import { z } from "zod";

import { SubscriberScalarFieldEnumSchema } from "@schemas/enums/SubscriberScalarFieldEnum.schema";
import { SubscriberCreateManyInputObjectSchema } from "@schemas/objects/SubscriberCreateManyInput.schema";
import { SubscriberUncheckedCreateInputObjectSchema } from "@schemas/objects/SubscriberUncheckedCreateInput.schema";
import { SubscriberWhereInputObjectSchema } from "@schemas/objects/SubscriberWhereInput.schema";
import { SubscriberOrderByWithRelationInputObjectSchema } from "@schemas/objects/SubscriberOrderByWithRelationInput.schema";
import { SubscriberWhereUniqueInputObjectSchema } from "@schemas/objects/SubscriberWhereUniqueInput.schema";
import { SubscriberUncheckedUpdateInputObjectSchema } from "@schemas/objects/SubscriberUncheckedUpdateInput.schema";
// import { SubscriberOrderByWithAggregationInputObjectSchema } from "@schemas/objects/SubscriberOrderByWithAggregationInput.schema"; //
// import { SubscriberScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/SubscriberScalarWhereWithAggregatesInput.schema"; //
// import { SubscriberUpdateManyMutationInputObjectSchema } from "@schemas/objects/SubscriberUpdateManyMutationInput.schema"; //
// import { SubscriberCountAggregateInputObjectSchema } from "@schemas/objects/SubscriberCountAggregateInput.schema"; //
// import { SubscriberMinAggregateInputObjectSchema } from "@schemas/objects/SubscriberMinAggregateInput.schema"; //
// import { SubscriberMaxAggregateInputObjectSchema } from "@schemas/objects/SubscriberMaxAggregateInput.schema"; //

// export const SubscriberAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       SubscriberOrderByWithRelationInputObjectSchema,
//       SubscriberOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: SubscriberWhereInputObjectSchema.optional(),
//   cursor: SubscriberWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), SubscriberCountAggregateInputObjectSchema])
//     .optional(),
//   _min: SubscriberMinAggregateInputObjectSchema.optional(),
//   _max: SubscriberMaxAggregateInputObjectSchema.optional(),
// });

export const SubscriberCreateManySchema = z.object({
  data: z.union([
    SubscriberCreateManyInputObjectSchema,
    z.array(SubscriberCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const SubscriberCreateOneSchema = z.object({
  data: SubscriberUncheckedCreateInputObjectSchema,
});

export const SubscriberDeleteManySchema = z.object({
  where: SubscriberWhereInputObjectSchema.optional(),
});

export const SubscriberDeleteOneSchema = z.object({
  where: SubscriberWhereUniqueInputObjectSchema.optional(),
});

// export const SubscriberFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       SubscriberOrderByWithRelationInputObjectSchema,
//       SubscriberOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: SubscriberWhereInputObjectSchema.optional(),
//   cursor: SubscriberWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(SubscriberScalarFieldEnumSchema).optional(),
// });

export const SubscriberFindManySchema = z.object({
  orderBy: z
    .union([
      SubscriberOrderByWithRelationInputObjectSchema,
      SubscriberOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SubscriberWhereInputObjectSchema.optional(),
  cursor: SubscriberWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SubscriberScalarFieldEnumSchema).optional(),
});

export const SubscriberFindUniqueSchema = z.object({
  where: SubscriberWhereUniqueInputObjectSchema,
});

// export const SubscriberGroupBySchema = z.object({
//   where: SubscriberWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       SubscriberOrderByWithAggregationInputObjectSchema,
//       SubscriberOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: SubscriberScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(SubscriberScalarFieldEnumSchema),
// });

// export const SubscriberUpdateManySchema = z.object({
//   data: SubscriberUpdateManyMutationInputObjectSchema,
//   where: SubscriberWhereInputObjectSchema.optional(),
// });

export const SubscriberUpdateOneSchema = z.object({
  data: SubscriberUncheckedUpdateInputObjectSchema,
  where: SubscriberWhereUniqueInputObjectSchema,
});

// export const SubscriberUpsertSchema = z.object({
//   where: SubscriberWhereUniqueInputObjectSchema,
//   create: SubscriberUncheckedCreateInputObjectSchema,
//   update: SubscriberUncheckedCreateInputObjectSchema,
// });

export const SubscriberCountSchema = z.object({
  // orderBy: z
  //   .union([
  //     SubscriberOrderByWithRelationInputObjectSchema,
  //     SubscriberOrderByWithRelationInputObjectSchema.array(),
  //   ])
  //   .optional(),
  where: SubscriberWhereInputObjectSchema.optional(),
  // cursor: SubscriberWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
