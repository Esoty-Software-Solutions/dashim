import { z } from "zod";

import { FingerTypeScalarFieldEnumSchema } from "@schemas/enums/FingerTypeScalarFieldEnum.schema";
import { FingerTypeCreateManyInputObjectSchema } from "@schemas/objects/FingerTypeCreateManyInput.schema";
import { FingerTypeUncheckedCreateInputObjectSchema } from "@schemas/objects/FingerTypeUncheckedCreateInput.schema";
import { FingerTypeWhereInputObjectSchema } from "@schemas/objects/FingerTypeWhereInput.schema";
import { FingerTypeOrderByWithRelationInputObjectSchema } from "@schemas/objects/FingerTypeOrderByWithRelationInput.schema";
import { FingerTypeWhereUniqueInputObjectSchema } from "@schemas/objects/FingerTypeWhereUniqueInput.schema";
import { FingerTypeUncheckedUpdateInputObjectSchema } from "@schemas/objects/FingerTypeUncheckedUpdateInput.schema";
// import { FingerTypeOrderByWithAggregationInputObjectSchema } from "@schemas/objects/FingerTypeOrderByWithAggregationInput.schema"; //
// import { FingerTypeScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/FingerTypeScalarWhereWithAggregatesInput.schema"; //
// import { FingerTypeUpdateManyMutationInputObjectSchema } from "@schemas/objects/FingerTypeUpdateManyMutationInput.schema"; //
// import { FingerTypeCountAggregateInputObjectSchema } from "@schemas/objects/FingerTypeCountAggregateInput.schema"; //
// import { FingerTypeMinAggregateInputObjectSchema } from "@schemas/objects/FingerTypeMinAggregateInput.schema"; //
// import { FingerTypeMaxAggregateInputObjectSchema } from "@schemas/objects/FingerTypeMaxAggregateInput.schema"; //

// export const FingerTypeAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       FingerTypeOrderByWithRelationInputObjectSchema,
//       FingerTypeOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: FingerTypeWhereInputObjectSchema.optional(),
//   cursor: FingerTypeWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), FingerTypeCountAggregateInputObjectSchema])
//     .optional(),
//   _min: FingerTypeMinAggregateInputObjectSchema.optional(),
//   _max: FingerTypeMaxAggregateInputObjectSchema.optional(),
// });

export const FingerTypeCreateManySchema = z.object({
  data: z.union([
    FingerTypeCreateManyInputObjectSchema,
    z.array(FingerTypeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const FingerTypeCreateOneSchema = z.object({
  data: FingerTypeUncheckedCreateInputObjectSchema,
});

export const FingerTypeDeleteManySchema = z.object({
  where: FingerTypeWhereInputObjectSchema.optional(),
});

export const FingerTypeDeleteOneSchema = z.object({
  where: FingerTypeWhereUniqueInputObjectSchema.optional(),
});

// export const FingerTypeFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       FingerTypeOrderByWithRelationInputObjectSchema,
//       FingerTypeOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: FingerTypeWhereInputObjectSchema.optional(),
//   cursor: FingerTypeWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(FingerTypeScalarFieldEnumSchema).optional(),
// });

export const FingerTypeFindManySchema = z.object({
  orderBy: z
    .union([
      FingerTypeOrderByWithRelationInputObjectSchema,
      FingerTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FingerTypeWhereInputObjectSchema.optional(),
  cursor: FingerTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FingerTypeScalarFieldEnumSchema).optional(),
});

export const FingerTypeFindUniqueSchema = z.object({
  where: FingerTypeWhereUniqueInputObjectSchema,
});

// export const FingerTypeGroupBySchema = z.object({
//   where: FingerTypeWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       FingerTypeOrderByWithAggregationInputObjectSchema,
//       FingerTypeOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: FingerTypeScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(FingerTypeScalarFieldEnumSchema),
// });

// export const FingerTypeUpdateManySchema = z.object({
//   data: FingerTypeUpdateManyMutationInputObjectSchema,
//   where: FingerTypeWhereInputObjectSchema.optional(),
// });

export const FingerTypeUpdateOneSchema = z.object({
  data: FingerTypeUncheckedUpdateInputObjectSchema,
  where: FingerTypeWhereUniqueInputObjectSchema,
});

// export const FingerTypeUpsertSchema = z.object({
//   where: FingerTypeWhereUniqueInputObjectSchema,
//   create: FingerTypeUncheckedCreateInputObjectSchema,
//   update: FingerTypeUncheckedCreateInputObjectSchema,
// });

export const FingerTypeCountSchema = z.object({
  // orderBy: z
  //   .union([
  //     FingerTypeOrderByWithRelationInputObjectSchema,
  //     FingerTypeOrderByWithRelationInputObjectSchema.array(),
  //   ])
  //   .optional(),
  where: FingerTypeWhereInputObjectSchema.optional(),
  // cursor: FingerTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
