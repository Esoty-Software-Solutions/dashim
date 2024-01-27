import { z } from "zod";

import { MedicalServiceScalarFieldEnumSchema } from "@schemas/enums/MedicalServiceScalarFieldEnum.schema";
import { MedicalServiceCreateManyInputObjectSchema } from "@schemas/objects/MedicalServiceCreateManyInput.schema";
import { MedicalServiceUncheckedCreateInputObjectSchema } from "@schemas/objects/MedicalServiceUncheckedCreateInput.schema";
import { MedicalServiceWhereInputObjectSchema } from "@schemas/objects/MedicalServiceWhereInput.schema";
import { MedicalServiceOrderByWithRelationInputObjectSchema } from "@schemas/objects/MedicalServiceOrderByWithRelationInput.schema";
import { MedicalServiceWhereUniqueInputObjectSchema } from "@schemas/objects/MedicalServiceWhereUniqueInput.schema";
import { MedicalServiceUncheckedUpdateInputObjectSchema } from "@schemas/objects/MedicalServiceUncheckedUpdateInput.schema";
// import { MedicalServiceOrderByWithAggregationInputObjectSchema } from "@schemas/objects/MedicalServiceOrderByWithAggregationInput.schema"; //
// import { MedicalServiceScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/MedicalServiceScalarWhereWithAggregatesInput.schema"; //
import { MedicalServiceUpdateManyMutationInputObjectSchema } from "@schemas/objects/MedicalServiceUpdateManyMutationInput.schema"; //
// import { MedicalServiceCountAggregateInputObjectSchema } from "@schemas/objects/MedicalServiceCountAggregateInput.schema"; //
// import { MedicalServiceMinAggregateInputObjectSchema } from "@schemas/objects/MedicalServiceMinAggregateInput.schema"; //
// import { MedicalServiceMaxAggregateInputObjectSchema } from "@schemas/objects/MedicalServiceMaxAggregateInput.schema"; //

// export const MedicalServiceAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       MedicalServiceOrderByWithRelationInputObjectSchema,
//       MedicalServiceOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: MedicalServiceWhereInputObjectSchema.optional(),
//   cursor: MedicalServiceWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), MedicalServiceCountAggregateInputObjectSchema])
//     .optional(),
//   _min: MedicalServiceMinAggregateInputObjectSchema.optional(),
//   _max: MedicalServiceMaxAggregateInputObjectSchema.optional(),
// });

export const MedicalServiceCreateManySchema = z.object({
  data: z.union([
    MedicalServiceCreateManyInputObjectSchema,
    z.array(MedicalServiceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const MedicalServiceCreateOneSchema = z.object({
  data: MedicalServiceUncheckedCreateInputObjectSchema,
});

export const MedicalServiceDeleteManySchema = z.object({
  where: MedicalServiceWhereInputObjectSchema.optional(),
});

export const MedicalServiceDeleteOneSchema = z.object({
  where: MedicalServiceWhereUniqueInputObjectSchema,
});

// export const MedicalServiceFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       MedicalServiceOrderByWithRelationInputObjectSchema,
//       MedicalServiceOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: MedicalServiceWhereInputObjectSchema.optional(),
//   cursor: MedicalServiceWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(MedicalServiceScalarFieldEnumSchema).optional(),
// });

export const MedicalServiceFindManySchema = z
  .object({
    orderBy: z
      .union([
        MedicalServiceOrderByWithRelationInputObjectSchema,
        MedicalServiceOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: MedicalServiceWhereInputObjectSchema.optional(),
    cursor: MedicalServiceWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(MedicalServiceScalarFieldEnumSchema).optional(),
  })
  .optional();

export const MedicalServiceFindUniqueSchema = z.object({
  where: MedicalServiceWhereUniqueInputObjectSchema,
});

// export const MedicalServiceGroupBySchema = z.object({
//   where: MedicalServiceWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       MedicalServiceOrderByWithAggregationInputObjectSchema,
//       MedicalServiceOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: MedicalServiceScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(MedicalServiceScalarFieldEnumSchema),
// });

export const MedicalServiceUpdateManySchema = z.object({
  data: MedicalServiceUpdateManyMutationInputObjectSchema,
  where: MedicalServiceWhereInputObjectSchema.optional(),
});

export const MedicalServiceUpdateOneSchema = z.object({
  data: MedicalServiceUncheckedUpdateInputObjectSchema,
  where: MedicalServiceWhereUniqueInputObjectSchema,
});

// export const MedicalServiceUpsertSchema = z.object({
//   where: MedicalServiceWhereUniqueInputObjectSchema,
//   create: MedicalServiceUncheckedCreateInputObjectSchema,
//   update: MedicalServiceUncheckedCreateInputObjectSchema,
// });

export const MedicalServiceCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     MedicalServiceOrderByWithRelationInputObjectSchema,
    //     MedicalServiceOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: MedicalServiceWhereInputObjectSchema.optional(),
    // cursor: MedicalServiceWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
