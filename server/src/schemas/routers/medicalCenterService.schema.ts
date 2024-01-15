import { z } from "zod";

import { MedicalCenterServiceScalarFieldEnumSchema } from "@schemas/enums/MedicalCenterServiceScalarFieldEnum.schema";
import { MedicalCenterServiceCreateManyInputObjectSchema } from "@schemas/objects/MedicalCenterServiceCreateManyInput.schema";
import { MedicalCenterServiceUncheckedCreateInputObjectSchema } from "@schemas/objects/MedicalCenterServiceUncheckedCreateInput.schema";
import { MedicalCenterServiceWhereInputObjectSchema } from "@schemas/objects/MedicalCenterServiceWhereInput.schema";
import { MedicalCenterServiceOrderByWithRelationInputObjectSchema } from "@schemas/objects/MedicalCenterServiceOrderByWithRelationInput.schema";
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from "@schemas/objects/MedicalCenterServiceWhereUniqueInput.schema";
import { MedicalCenterServiceUncheckedUpdateInputObjectSchema } from "@schemas/objects/MedicalCenterServiceUncheckedUpdateInput.schema";
// import { MedicalCenterServiceOrderByWithAggregationInputObjectSchema } from "@schemas/objects/MedicalCenterServiceOrderByWithAggregationInput.schema"; //
// import { MedicalCenterServiceScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/MedicalCenterServiceScalarWhereWithAggregatesInput.schema"; //
// import { MedicalCenterServiceUpdateManyMutationInputObjectSchema } from "@schemas/objects/MedicalCenterServiceUpdateManyMutationInput.schema"; //
// import { MedicalCenterServiceCountAggregateInputObjectSchema } from "@schemas/objects/MedicalCenterServiceCountAggregateInput.schema"; //
// import { MedicalCenterServiceMinAggregateInputObjectSchema } from "@schemas/objects/MedicalCenterServiceMinAggregateInput.schema"; //
// import { MedicalCenterServiceMaxAggregateInputObjectSchema } from "@schemas/objects/MedicalCenterServiceMaxAggregateInput.schema"; //

// export const MedicalCenterServiceAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       MedicalCenterServiceOrderByWithRelationInputObjectSchema,
//       MedicalCenterServiceOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: MedicalCenterServiceWhereInputObjectSchema.optional(),
//   cursor: MedicalCenterServiceWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), MedicalCenterServiceCountAggregateInputObjectSchema])
//     .optional(),
//   _min: MedicalCenterServiceMinAggregateInputObjectSchema.optional(),
//   _max: MedicalCenterServiceMaxAggregateInputObjectSchema.optional(),
// });

export const MedicalCenterServiceCreateManySchema = z.object({
  data: z.union([
    MedicalCenterServiceCreateManyInputObjectSchema,
    z.array(MedicalCenterServiceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const MedicalCenterServiceCreateOneSchema = z.object({
  data: MedicalCenterServiceUncheckedCreateInputObjectSchema,
});

export const MedicalCenterServiceDeleteManySchema = z.object({
  where: MedicalCenterServiceWhereInputObjectSchema.optional(),
});

export const MedicalCenterServiceDeleteOneSchema = z.object({
  where: MedicalCenterServiceWhereUniqueInputObjectSchema.optional(),
});

// export const MedicalCenterServiceFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       MedicalCenterServiceOrderByWithRelationInputObjectSchema,
//       MedicalCenterServiceOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: MedicalCenterServiceWhereInputObjectSchema.optional(),
//   cursor: MedicalCenterServiceWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(MedicalCenterServiceScalarFieldEnumSchema).optional(),
// });

export const MedicalCenterServiceFindManySchema = z.object({
  orderBy: z
    .union([
      MedicalCenterServiceOrderByWithRelationInputObjectSchema,
      MedicalCenterServiceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MedicalCenterServiceWhereInputObjectSchema.optional(),
  cursor: MedicalCenterServiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MedicalCenterServiceScalarFieldEnumSchema).optional(),
});

export const MedicalCenterServiceFindUniqueSchema = z.object({
  where: MedicalCenterServiceWhereUniqueInputObjectSchema,
});

// export const MedicalCenterServiceGroupBySchema = z.object({
//   where: MedicalCenterServiceWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       MedicalCenterServiceOrderByWithAggregationInputObjectSchema,
//       MedicalCenterServiceOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: MedicalCenterServiceScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(MedicalCenterServiceScalarFieldEnumSchema),
// });

// export const MedicalCenterServiceUpdateManySchema = z.object({
//   data: MedicalCenterServiceUpdateManyMutationInputObjectSchema,
//   where: MedicalCenterServiceWhereInputObjectSchema.optional(),
// });

export const MedicalCenterServiceUpdateOneSchema = z.object({
  data: MedicalCenterServiceUncheckedUpdateInputObjectSchema,
  where: MedicalCenterServiceWhereUniqueInputObjectSchema,
});

// export const MedicalCenterServiceUpsertSchema = z.object({
//   where: MedicalCenterServiceWhereUniqueInputObjectSchema,
//   create: MedicalCenterServiceUncheckedCreateInputObjectSchema,
//   update: MedicalCenterServiceUncheckedCreateInputObjectSchema,
// });

export const MedicalCenterServiceCountSchema = z.object({
  // orderBy: z
  //   .union([
  //     MedicalCenterServiceOrderByWithRelationInputObjectSchema,
  //     MedicalCenterServiceOrderByWithRelationInputObjectSchema.array(),
  //   ])
  //   .optional(),
  where: MedicalCenterServiceWhereInputObjectSchema.optional(),
  // cursor: MedicalCenterServiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
