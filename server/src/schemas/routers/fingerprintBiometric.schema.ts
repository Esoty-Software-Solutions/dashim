import { z } from "zod";

import { FingerprintBiometricScalarFieldEnumSchema } from "@schemas/enums/FingerprintBiometricScalarFieldEnum.schema";
import { FingerprintBiometricCreateManyInputObjectSchema } from "@schemas/objects/FingerprintBiometricCreateManyInput.schema";
import { FingerprintBiometricUncheckedCreateInputObjectSchema } from "@schemas/objects/FingerprintBiometricUncheckedCreateInput.schema";
import { FingerprintBiometricWhereInputObjectSchema } from "@schemas/objects/FingerprintBiometricWhereInput.schema";
import { FingerprintBiometricOrderByWithRelationInputObjectSchema } from "@schemas/objects/FingerprintBiometricOrderByWithRelationInput.schema";
import { FingerprintBiometricWhereUniqueInputObjectSchema } from "@schemas/objects/FingerprintBiometricWhereUniqueInput.schema";
import { FingerprintBiometricUncheckedUpdateInputObjectSchema } from "@schemas/objects/FingerprintBiometricUncheckedUpdateInput.schema";
// import { FingerprintBiometricOrderByWithAggregationInputObjectSchema } from "@schemas/objects/FingerprintBiometricOrderByWithAggregationInput.schema"; //
// import { FingerprintBiometricScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/FingerprintBiometricScalarWhereWithAggregatesInput.schema"; //
import { FingerprintBiometricUpdateManyMutationInputObjectSchema } from "@schemas/objects/FingerprintBiometricUpdateManyMutationInput.schema"; //
// import { FingerprintBiometricCountAggregateInputObjectSchema } from "@schemas/objects/FingerprintBiometricCountAggregateInput.schema"; //
// import { FingerprintBiometricMinAggregateInputObjectSchema } from "@schemas/objects/FingerprintBiometricMinAggregateInput.schema"; //
// import { FingerprintBiometricMaxAggregateInputObjectSchema } from "@schemas/objects/FingerprintBiometricMaxAggregateInput.schema"; //

// export const FingerprintBiometricAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       FingerprintBiometricOrderByWithRelationInputObjectSchema,
//       FingerprintBiometricOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: FingerprintBiometricWhereInputObjectSchema.optional(),
//   cursor: FingerprintBiometricWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), FingerprintBiometricCountAggregateInputObjectSchema])
//     .optional(),
//   _min: FingerprintBiometricMinAggregateInputObjectSchema.optional(),
//   _max: FingerprintBiometricMaxAggregateInputObjectSchema.optional(),
// });

export const FingerprintBiometricCreateManySchema = z.object({
  data: z.union([
    FingerprintBiometricCreateManyInputObjectSchema,
    z.array(FingerprintBiometricCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const FingerprintBiometricCreateOneSchema = z.object({
  data: FingerprintBiometricUncheckedCreateInputObjectSchema,
});

export const FingerprintBiometricDeleteManySchema = z.object({
  where: FingerprintBiometricWhereInputObjectSchema.optional(),
});

export const FingerprintBiometricDeleteOneSchema = z.object({
  where: FingerprintBiometricWhereUniqueInputObjectSchema,
});

// export const FingerprintBiometricFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       FingerprintBiometricOrderByWithRelationInputObjectSchema,
//       FingerprintBiometricOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: FingerprintBiometricWhereInputObjectSchema.optional(),
//   cursor: FingerprintBiometricWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(FingerprintBiometricScalarFieldEnumSchema).optional(),
// });

export const FingerprintBiometricFindManySchema = z
  .object({
    orderBy: z
      .union([
        FingerprintBiometricOrderByWithRelationInputObjectSchema,
        FingerprintBiometricOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: FingerprintBiometricWhereInputObjectSchema.optional(),
    cursor: FingerprintBiometricWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(FingerprintBiometricScalarFieldEnumSchema).optional(),
  })
  .optional();

export const FingerprintBiometricFindUniqueSchema = z.object({
  where: FingerprintBiometricWhereUniqueInputObjectSchema,
});

// export const FingerprintBiometricGroupBySchema = z.object({
//   where: FingerprintBiometricWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       FingerprintBiometricOrderByWithAggregationInputObjectSchema,
//       FingerprintBiometricOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: FingerprintBiometricScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(FingerprintBiometricScalarFieldEnumSchema),
// });

export const FingerprintBiometricUpdateManySchema = z.object({
  data: FingerprintBiometricUpdateManyMutationInputObjectSchema,
  where: FingerprintBiometricWhereInputObjectSchema.optional(),
});

export const FingerprintBiometricUpdateOneSchema = z.object({
  data: FingerprintBiometricUncheckedUpdateInputObjectSchema,
  where: FingerprintBiometricWhereUniqueInputObjectSchema,
});

// export const FingerprintBiometricUpsertSchema = z.object({
//   where: FingerprintBiometricWhereUniqueInputObjectSchema,
//   create: FingerprintBiometricUncheckedCreateInputObjectSchema,
//   update: FingerprintBiometricUncheckedCreateInputObjectSchema,
// });

export const FingerprintBiometricCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     FingerprintBiometricOrderByWithRelationInputObjectSchema,
    //     FingerprintBiometricOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: FingerprintBiometricWhereInputObjectSchema.optional(),
    // cursor: FingerprintBiometricWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
