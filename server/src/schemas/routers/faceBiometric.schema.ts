import { z } from "zod";

import { FaceBiometricScalarFieldEnumSchema } from "@schemas/enums/FaceBiometricScalarFieldEnum.schema";
import { FaceBiometricCreateManyInputObjectSchema } from "@schemas/objects/FaceBiometricCreateManyInput.schema";
import { FaceBiometricUncheckedCreateInputObjectSchema } from "@schemas/objects/FaceBiometricUncheckedCreateInput.schema";
import { FaceBiometricWhereInputObjectSchema } from "@schemas/objects/FaceBiometricWhereInput.schema";
import { FaceBiometricOrderByWithRelationInputObjectSchema } from "@schemas/objects/FaceBiometricOrderByWithRelationInput.schema";
import { FaceBiometricWhereUniqueInputObjectSchema } from "@schemas/objects/FaceBiometricWhereUniqueInput.schema";
import { FaceBiometricUncheckedUpdateInputObjectSchema } from "@schemas/objects/FaceBiometricUncheckedUpdateInput.schema";
// import { FaceBiometricOrderByWithAggregationInputObjectSchema } from "@schemas/objects/FaceBiometricOrderByWithAggregationInput.schema"; //
// import { FaceBiometricScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/FaceBiometricScalarWhereWithAggregatesInput.schema"; //
import { FaceBiometricUpdateManyMutationInputObjectSchema } from "@schemas/objects/FaceBiometricUpdateManyMutationInput.schema"; //
// import { FaceBiometricCountAggregateInputObjectSchema } from "@schemas/objects/FaceBiometricCountAggregateInput.schema"; //
// import { FaceBiometricMinAggregateInputObjectSchema } from "@schemas/objects/FaceBiometricMinAggregateInput.schema"; //
// import { FaceBiometricMaxAggregateInputObjectSchema } from "@schemas/objects/FaceBiometricMaxAggregateInput.schema"; //

// export const FaceBiometricAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       FaceBiometricOrderByWithRelationInputObjectSchema,
//       FaceBiometricOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: FaceBiometricWhereInputObjectSchema.optional(),
//   cursor: FaceBiometricWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), FaceBiometricCountAggregateInputObjectSchema])
//     .optional(),
//   _min: FaceBiometricMinAggregateInputObjectSchema.optional(),
//   _max: FaceBiometricMaxAggregateInputObjectSchema.optional(),
// });

export const FaceBiometricCreateManySchema = z.object({
  data: z.union([
    FaceBiometricCreateManyInputObjectSchema,
    z.array(FaceBiometricCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const FaceBiometricCreateOneSchema = z.object({
  data: FaceBiometricUncheckedCreateInputObjectSchema,
});

export const FaceBiometricDeleteManySchema = z.object({
  where: FaceBiometricWhereInputObjectSchema.optional(),
});

export const FaceBiometricDeleteOneSchema = z.object({
  where: FaceBiometricWhereUniqueInputObjectSchema,
});

export const FaceBiometricFindFirstSchema = z.object({
  orderBy: z
    .union([
      FaceBiometricOrderByWithRelationInputObjectSchema,
      FaceBiometricOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FaceBiometricWhereInputObjectSchema.optional(),
  cursor: FaceBiometricWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FaceBiometricScalarFieldEnumSchema).optional(),
});

export const FaceBiometricFindManySchema = z
  .object({
    orderBy: z
      .union([
        FaceBiometricOrderByWithRelationInputObjectSchema,
        FaceBiometricOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: FaceBiometricWhereInputObjectSchema.optional(),
    cursor: FaceBiometricWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(FaceBiometricScalarFieldEnumSchema).optional(),
  })
  .optional();

export const FaceBiometricFindUniqueSchema = z.object({
  where: FaceBiometricWhereUniqueInputObjectSchema,
});

// export const FaceBiometricGroupBySchema = z.object({
//   where: FaceBiometricWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       FaceBiometricOrderByWithAggregationInputObjectSchema,
//       FaceBiometricOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: FaceBiometricScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(FaceBiometricScalarFieldEnumSchema),
// });

export const FaceBiometricUpdateManySchema = z.object({
  data: FaceBiometricUpdateManyMutationInputObjectSchema,
  where: FaceBiometricWhereInputObjectSchema.optional(),
});

export const FaceBiometricUpdateOneSchema = z.object({
  data: FaceBiometricUncheckedUpdateInputObjectSchema,
  where: FaceBiometricWhereUniqueInputObjectSchema,
});

// export const FaceBiometricUpsertSchema = z.object({
//   where: FaceBiometricWhereUniqueInputObjectSchema,
//   create: FaceBiometricUncheckedCreateInputObjectSchema,
//   update: FaceBiometricUncheckedCreateInputObjectSchema,
// });

export const FaceBiometricCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     FaceBiometricOrderByWithRelationInputObjectSchema,
    //     FaceBiometricOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: FaceBiometricWhereInputObjectSchema.optional(),
    // cursor: FaceBiometricWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
