import { z } from "zod";

import { VoiceBiometricScalarFieldEnumSchema } from "@schemas/enums/VoiceBiometricScalarFieldEnum.schema";
import { VoiceBiometricCreateManyInputObjectSchema } from "@schemas/objects/VoiceBiometricCreateManyInput.schema";
import { VoiceBiometricUncheckedCreateInputObjectSchema } from "@schemas/objects/VoiceBiometricUncheckedCreateInput.schema";
import { VoiceBiometricWhereInputObjectSchema } from "@schemas/objects/VoiceBiometricWhereInput.schema";
import { VoiceBiometricOrderByWithRelationInputObjectSchema } from "@schemas/objects/VoiceBiometricOrderByWithRelationInput.schema";
import { VoiceBiometricWhereUniqueInputObjectSchema } from "@schemas/objects/VoiceBiometricWhereUniqueInput.schema";
import { VoiceBiometricUncheckedUpdateInputObjectSchema } from "@schemas/objects/VoiceBiometricUncheckedUpdateInput.schema";
// import { VoiceBiometricOrderByWithAggregationInputObjectSchema } from "@schemas/objects/VoiceBiometricOrderByWithAggregationInput.schema"; //
// import { VoiceBiometricScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/VoiceBiometricScalarWhereWithAggregatesInput.schema"; //
// import { VoiceBiometricUpdateManyMutationInputObjectSchema } from "@schemas/objects/VoiceBiometricUpdateManyMutationInput.schema"; //
// import { VoiceBiometricCountAggregateInputObjectSchema } from "@schemas/objects/VoiceBiometricCountAggregateInput.schema"; //
// import { VoiceBiometricMinAggregateInputObjectSchema } from "@schemas/objects/VoiceBiometricMinAggregateInput.schema"; //
// import { VoiceBiometricMaxAggregateInputObjectSchema } from "@schemas/objects/VoiceBiometricMaxAggregateInput.schema"; //

// export const VoiceBiometricAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       VoiceBiometricOrderByWithRelationInputObjectSchema,
//       VoiceBiometricOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: VoiceBiometricWhereInputObjectSchema.optional(),
//   cursor: VoiceBiometricWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), VoiceBiometricCountAggregateInputObjectSchema])
//     .optional(),
//   _min: VoiceBiometricMinAggregateInputObjectSchema.optional(),
//   _max: VoiceBiometricMaxAggregateInputObjectSchema.optional(),
// });

export const VoiceBiometricCreateManySchema = z.object({
  data: z.union([
    VoiceBiometricCreateManyInputObjectSchema,
    z.array(VoiceBiometricCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const VoiceBiometricCreateOneSchema = z.object({
  data: VoiceBiometricUncheckedCreateInputObjectSchema,
});

export const VoiceBiometricDeleteManySchema = z.object({
  where: VoiceBiometricWhereInputObjectSchema.optional(),
});

export const VoiceBiometricDeleteOneSchema = z.object({
  where: VoiceBiometricWhereUniqueInputObjectSchema.optional(),
});

// export const VoiceBiometricFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       VoiceBiometricOrderByWithRelationInputObjectSchema,
//       VoiceBiometricOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: VoiceBiometricWhereInputObjectSchema.optional(),
//   cursor: VoiceBiometricWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(VoiceBiometricScalarFieldEnumSchema).optional(),
// });

export const VoiceBiometricFindManySchema = z.object({
  orderBy: z
    .union([
      VoiceBiometricOrderByWithRelationInputObjectSchema,
      VoiceBiometricOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: VoiceBiometricWhereInputObjectSchema.optional(),
  cursor: VoiceBiometricWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VoiceBiometricScalarFieldEnumSchema).optional(),
});

export const VoiceBiometricFindUniqueSchema = z.object({
  where: VoiceBiometricWhereUniqueInputObjectSchema,
});

// export const VoiceBiometricGroupBySchema = z.object({
//   where: VoiceBiometricWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       VoiceBiometricOrderByWithAggregationInputObjectSchema,
//       VoiceBiometricOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: VoiceBiometricScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(VoiceBiometricScalarFieldEnumSchema),
// });

// export const VoiceBiometricUpdateManySchema = z.object({
//   data: VoiceBiometricUpdateManyMutationInputObjectSchema,
//   where: VoiceBiometricWhereInputObjectSchema.optional(),
// });

export const VoiceBiometricUpdateOneSchema = z.object({
  data: VoiceBiometricUncheckedUpdateInputObjectSchema,
  where: VoiceBiometricWhereUniqueInputObjectSchema,
});

// export const VoiceBiometricUpsertSchema = z.object({
//   where: VoiceBiometricWhereUniqueInputObjectSchema,
//   create: VoiceBiometricUncheckedCreateInputObjectSchema,
//   update: VoiceBiometricUncheckedCreateInputObjectSchema,
// });

export const VoiceBiometricCountSchema = z.object({
  // orderBy: z
  //   .union([
  //     VoiceBiometricOrderByWithRelationInputObjectSchema,
  //     VoiceBiometricOrderByWithRelationInputObjectSchema.array(),
  //   ])
  //   .optional(),
  where: VoiceBiometricWhereInputObjectSchema.optional(),
  // cursor: VoiceBiometricWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
