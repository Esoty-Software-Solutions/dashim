import { z } from "zod";

import { PatientServiceScalarFieldEnumSchema } from "@schemas/enums/PatientServiceScalarFieldEnum.schema";
import { PatientServiceCreateManyInputObjectSchema } from "@schemas/objects/PatientServiceCreateManyInput.schema";
import { PatientServiceUncheckedCreateInputObjectSchema } from "@schemas/objects/PatientServiceUncheckedCreateInput.schema";
import { PatientServiceWhereInputObjectSchema } from "@schemas/objects/PatientServiceWhereInput.schema";
import { PatientServiceOrderByWithRelationInputObjectSchema } from "@schemas/objects/PatientServiceOrderByWithRelationInput.schema";
import { PatientServiceWhereUniqueInputObjectSchema } from "@schemas/objects/PatientServiceWhereUniqueInput.schema";
import { PatientServiceUncheckedUpdateInputObjectSchema } from "@schemas/objects/PatientServiceUncheckedUpdateInput.schema";
// import { PatientServiceOrderByWithAggregationInputObjectSchema } from "@schemas/objects/PatientServiceOrderByWithAggregationInput.schema"; //
// import { PatientServiceScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/PatientServiceScalarWhereWithAggregatesInput.schema"; //
// import { PatientServiceUpdateManyMutationInputObjectSchema } from "@schemas/objects/PatientServiceUpdateManyMutationInput.schema"; //
// import { PatientServiceCountAggregateInputObjectSchema } from "@schemas/objects/PatientServiceCountAggregateInput.schema"; //
// import { PatientServiceMinAggregateInputObjectSchema } from "@schemas/objects/PatientServiceMinAggregateInput.schema"; //
// import { PatientServiceMaxAggregateInputObjectSchema } from "@schemas/objects/PatientServiceMaxAggregateInput.schema"; //

// export const PatientServiceAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       PatientServiceOrderByWithRelationInputObjectSchema,
//       PatientServiceOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: PatientServiceWhereInputObjectSchema.optional(),
//   cursor: PatientServiceWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), PatientServiceCountAggregateInputObjectSchema])
//     .optional(),
//   _min: PatientServiceMinAggregateInputObjectSchema.optional(),
//   _max: PatientServiceMaxAggregateInputObjectSchema.optional(),
// });

export const PatientServiceCreateManySchema = z.object({
  data: z.union([
    PatientServiceCreateManyInputObjectSchema,
    z.array(PatientServiceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const PatientServiceCreateOneSchema = z.object({
  data: PatientServiceUncheckedCreateInputObjectSchema,
});

export const PatientServiceDeleteManySchema = z.object({
  where: PatientServiceWhereInputObjectSchema.optional(),
});

export const PatientServiceDeleteOneSchema = z.object({
  where: PatientServiceWhereUniqueInputObjectSchema.optional(),
});

// export const PatientServiceFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       PatientServiceOrderByWithRelationInputObjectSchema,
//       PatientServiceOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: PatientServiceWhereInputObjectSchema.optional(),
//   cursor: PatientServiceWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(PatientServiceScalarFieldEnumSchema).optional(),
// });

export const PatientServiceFindManySchema = z
  .object({
    orderBy: z
      .union([
        PatientServiceOrderByWithRelationInputObjectSchema,
        PatientServiceOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: PatientServiceWhereInputObjectSchema.optional(),
    cursor: PatientServiceWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PatientServiceScalarFieldEnumSchema).optional(),
  })
  .optional();

export const PatientServiceFindUniqueSchema = z.object({
  where: PatientServiceWhereUniqueInputObjectSchema,
});

// export const PatientServiceGroupBySchema = z.object({
//   where: PatientServiceWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       PatientServiceOrderByWithAggregationInputObjectSchema,
//       PatientServiceOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: PatientServiceScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(PatientServiceScalarFieldEnumSchema),
// });

// export const PatientServiceUpdateManySchema = z.object({
//   data: PatientServiceUpdateManyMutationInputObjectSchema,
//   where: PatientServiceWhereInputObjectSchema.optional(),
// });

export const PatientServiceUpdateOneSchema = z.object({
  data: PatientServiceUncheckedUpdateInputObjectSchema,
  where: PatientServiceWhereUniqueInputObjectSchema,
});

// export const PatientServiceUpsertSchema = z.object({
//   where: PatientServiceWhereUniqueInputObjectSchema,
//   create: PatientServiceUncheckedCreateInputObjectSchema,
//   update: PatientServiceUncheckedCreateInputObjectSchema,
// });

export const PatientServiceCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     PatientServiceOrderByWithRelationInputObjectSchema,
    //     PatientServiceOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: PatientServiceWhereInputObjectSchema.optional(),
    // cursor: PatientServiceWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
