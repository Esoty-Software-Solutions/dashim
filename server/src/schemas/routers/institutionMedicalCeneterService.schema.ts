import { z } from "zod";

import { InstitutionMedicalCeneterServiceScalarFieldEnumSchema } from "@schemas/enums/InstitutionMedicalCeneterServiceScalarFieldEnum.schema";
import { InstitutionMedicalCeneterServiceCreateManyInputObjectSchema } from "@schemas/objects/InstitutionMedicalCeneterServiceCreateManyInput.schema";
import { InstitutionMedicalCeneterServiceUncheckedCreateInputObjectSchema } from "@schemas/objects/InstitutionMedicalCeneterServiceUncheckedCreateInput.schema";
import { InstitutionMedicalCeneterServiceWhereInputObjectSchema } from "@schemas/objects/InstitutionMedicalCeneterServiceWhereInput.schema";
import { InstitutionMedicalCeneterServiceOrderByWithRelationInputObjectSchema } from "@schemas/objects/InstitutionMedicalCeneterServiceOrderByWithRelationInput.schema";
import { InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema } from "@schemas/objects/InstitutionMedicalCeneterServiceWhereUniqueInput.schema";
import { InstitutionMedicalCeneterServiceUncheckedUpdateInputObjectSchema } from "@schemas/objects/InstitutionMedicalCeneterServiceUncheckedUpdateInput.schema";
// import { InstitutionMedicalCeneterServiceOrderByWithAggregationInputObjectSchema } from "@schemas/objects/InstitutionMedicalCeneterServiceOrderByWithAggregationInput.schema"; //
// import { InstitutionMedicalCeneterServiceScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/InstitutionMedicalCeneterServiceScalarWhereWithAggregatesInput.schema"; //
// import { InstitutionMedicalCeneterServiceUpdateManyMutationInputObjectSchema } from "@schemas/objects/InstitutionMedicalCeneterServiceUpdateManyMutationInput.schema"; //
// import { InstitutionMedicalCeneterServiceCountAggregateInputObjectSchema } from "@schemas/objects/InstitutionMedicalCeneterServiceCountAggregateInput.schema"; //
// import { InstitutionMedicalCeneterServiceMinAggregateInputObjectSchema } from "@schemas/objects/InstitutionMedicalCeneterServiceMinAggregateInput.schema"; //
// import { InstitutionMedicalCeneterServiceMaxAggregateInputObjectSchema } from "@schemas/objects/InstitutionMedicalCeneterServiceMaxAggregateInput.schema"; //

// export const InstitutionMedicalCeneterServiceAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       InstitutionMedicalCeneterServiceOrderByWithRelationInputObjectSchema,
//       InstitutionMedicalCeneterServiceOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: InstitutionMedicalCeneterServiceWhereInputObjectSchema.optional(),
//   cursor: InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), InstitutionMedicalCeneterServiceCountAggregateInputObjectSchema])
//     .optional(),
//   _min: InstitutionMedicalCeneterServiceMinAggregateInputObjectSchema.optional(),
//   _max: InstitutionMedicalCeneterServiceMaxAggregateInputObjectSchema.optional(),
// });

export const InstitutionMedicalCeneterServiceCreateManySchema = z.object({
  data: z.union([
    InstitutionMedicalCeneterServiceCreateManyInputObjectSchema,
    z.array(InstitutionMedicalCeneterServiceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const InstitutionMedicalCeneterServiceCreateOneSchema = z.object({
  data: InstitutionMedicalCeneterServiceUncheckedCreateInputObjectSchema,
});

export const InstitutionMedicalCeneterServiceDeleteManySchema = z.object({
  where: InstitutionMedicalCeneterServiceWhereInputObjectSchema.optional(),
});

export const InstitutionMedicalCeneterServiceDeleteOneSchema = z.object({
  where: InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema.optional(),
});

// export const InstitutionMedicalCeneterServiceFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       InstitutionMedicalCeneterServiceOrderByWithRelationInputObjectSchema,
//       InstitutionMedicalCeneterServiceOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: InstitutionMedicalCeneterServiceWhereInputObjectSchema.optional(),
//   cursor: InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(InstitutionMedicalCeneterServiceScalarFieldEnumSchema).optional(),
// });

export const InstitutionMedicalCeneterServiceFindManySchema = z.object({
  orderBy: z
    .union([
      InstitutionMedicalCeneterServiceOrderByWithRelationInputObjectSchema,
      InstitutionMedicalCeneterServiceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InstitutionMedicalCeneterServiceWhereInputObjectSchema.optional(),
  cursor: InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(InstitutionMedicalCeneterServiceScalarFieldEnumSchema).optional(),
});

export const InstitutionMedicalCeneterServiceFindUniqueSchema = z.object({
  where: InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema,
});

// export const InstitutionMedicalCeneterServiceGroupBySchema = z.object({
//   where: InstitutionMedicalCeneterServiceWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       InstitutionMedicalCeneterServiceOrderByWithAggregationInputObjectSchema,
//       InstitutionMedicalCeneterServiceOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: InstitutionMedicalCeneterServiceScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(InstitutionMedicalCeneterServiceScalarFieldEnumSchema),
// });

// export const InstitutionMedicalCeneterServiceUpdateManySchema = z.object({
//   data: InstitutionMedicalCeneterServiceUpdateManyMutationInputObjectSchema,
//   where: InstitutionMedicalCeneterServiceWhereInputObjectSchema.optional(),
// });

export const InstitutionMedicalCeneterServiceUpdateOneSchema = z.object({
  data: InstitutionMedicalCeneterServiceUncheckedUpdateInputObjectSchema,
  where: InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema,
});

// export const InstitutionMedicalCeneterServiceUpsertSchema = z.object({
//   where: InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema,
//   create: InstitutionMedicalCeneterServiceUncheckedCreateInputObjectSchema,
//   update: InstitutionMedicalCeneterServiceUncheckedCreateInputObjectSchema,
// });

export const InstitutionMedicalCeneterServiceCountSchema = z.object({
  // orderBy: z
  //   .union([
  //     InstitutionMedicalCeneterServiceOrderByWithRelationInputObjectSchema,
  //     InstitutionMedicalCeneterServiceOrderByWithRelationInputObjectSchema.array(),
  //   ])
  //   .optional(),
  where: InstitutionMedicalCeneterServiceWhereInputObjectSchema.optional(),
  // cursor: InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
