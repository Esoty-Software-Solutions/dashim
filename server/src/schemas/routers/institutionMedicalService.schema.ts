import { z } from "zod";

import { InstitutionMedicalServiceScalarFieldEnumSchema } from "@schemas/enums/InstitutionMedicalServiceScalarFieldEnum.schema";
import { InstitutionMedicalServiceCreateManyInputObjectSchema } from "@schemas/objects/InstitutionMedicalServiceCreateManyInput.schema";
import { InstitutionMedicalServiceUncheckedCreateInputObjectSchema } from "@schemas/objects/InstitutionMedicalServiceUncheckedCreateInput.schema";
import { InstitutionMedicalServiceWhereInputObjectSchema } from "@schemas/objects/InstitutionMedicalServiceWhereInput.schema";
import { InstitutionMedicalServiceOrderByWithRelationInputObjectSchema } from "@schemas/objects/InstitutionMedicalServiceOrderByWithRelationInput.schema";
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from "@schemas/objects/InstitutionMedicalServiceWhereUniqueInput.schema";
import { InstitutionMedicalServiceUncheckedUpdateInputObjectSchema } from "@schemas/objects/InstitutionMedicalServiceUncheckedUpdateInput.schema";
// import { InstitutionMedicalServiceOrderByWithAggregationInputObjectSchema } from "@schemas/objects/InstitutionMedicalServiceOrderByWithAggregationInput.schema"; //
// import { InstitutionMedicalServiceScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/InstitutionMedicalServiceScalarWhereWithAggregatesInput.schema"; //
import { InstitutionMedicalServiceUpdateManyMutationInputObjectSchema } from "@schemas/objects/InstitutionMedicalServiceUpdateManyMutationInput.schema"; //
// import { InstitutionMedicalServiceCountAggregateInputObjectSchema } from "@schemas/objects/InstitutionMedicalServiceCountAggregateInput.schema"; //
// import { InstitutionMedicalServiceMinAggregateInputObjectSchema } from "@schemas/objects/InstitutionMedicalServiceMinAggregateInput.schema"; //
// import { InstitutionMedicalServiceMaxAggregateInputObjectSchema } from "@schemas/objects/InstitutionMedicalServiceMaxAggregateInput.schema"; //

// export const InstitutionMedicalServiceAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       InstitutionMedicalServiceOrderByWithRelationInputObjectSchema,
//       InstitutionMedicalServiceOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: InstitutionMedicalServiceWhereInputObjectSchema.optional(),
//   cursor: InstitutionMedicalServiceWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), InstitutionMedicalServiceCountAggregateInputObjectSchema])
//     .optional(),
//   _min: InstitutionMedicalServiceMinAggregateInputObjectSchema.optional(),
//   _max: InstitutionMedicalServiceMaxAggregateInputObjectSchema.optional(),
// });

export const InstitutionMedicalServiceCreateManySchema = z.object({
  data: z.union([
    InstitutionMedicalServiceCreateManyInputObjectSchema,
    z.array(InstitutionMedicalServiceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const InstitutionMedicalServiceCreateOneSchema = z.object({
  data: InstitutionMedicalServiceUncheckedCreateInputObjectSchema,
});

export const InstitutionMedicalServiceDeleteManySchema = z.object({
  where: InstitutionMedicalServiceWhereInputObjectSchema.optional(),
});

export const InstitutionMedicalServiceDeleteOneSchema = z.object({
  where: InstitutionMedicalServiceWhereUniqueInputObjectSchema,
});

// export const InstitutionMedicalServiceFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       InstitutionMedicalServiceOrderByWithRelationInputObjectSchema,
//       InstitutionMedicalServiceOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: InstitutionMedicalServiceWhereInputObjectSchema.optional(),
//   cursor: InstitutionMedicalServiceWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(InstitutionMedicalServiceScalarFieldEnumSchema).optional(),
// });

export const InstitutionMedicalServiceFindManySchema = z
  .object({
    orderBy: z
      .union([
        InstitutionMedicalServiceOrderByWithRelationInputObjectSchema,
        InstitutionMedicalServiceOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: InstitutionMedicalServiceWhereInputObjectSchema.optional(),
    cursor: InstitutionMedicalServiceWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(InstitutionMedicalServiceScalarFieldEnumSchema).optional(),
  })
  .optional();

export const InstitutionMedicalServiceFindUniqueSchema = z.object({
  where: InstitutionMedicalServiceWhereUniqueInputObjectSchema,
});

// export const InstitutionMedicalServiceGroupBySchema = z.object({
//   where: InstitutionMedicalServiceWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       InstitutionMedicalServiceOrderByWithAggregationInputObjectSchema,
//       InstitutionMedicalServiceOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: InstitutionMedicalServiceScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(InstitutionMedicalServiceScalarFieldEnumSchema),
// });

export const InstitutionMedicalServiceUpdateManySchema = z.object({
  data: InstitutionMedicalServiceUpdateManyMutationInputObjectSchema,
  where: InstitutionMedicalServiceWhereInputObjectSchema.optional(),
});

export const InstitutionMedicalServiceUpdateOneSchema = z.object({
  data: InstitutionMedicalServiceUncheckedUpdateInputObjectSchema,
  where: InstitutionMedicalServiceWhereUniqueInputObjectSchema,
});

// export const InstitutionMedicalServiceUpsertSchema = z.object({
//   where: InstitutionMedicalServiceWhereUniqueInputObjectSchema,
//   create: InstitutionMedicalServiceUncheckedCreateInputObjectSchema,
//   update: InstitutionMedicalServiceUncheckedCreateInputObjectSchema,
// });

export const InstitutionMedicalServiceCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     InstitutionMedicalServiceOrderByWithRelationInputObjectSchema,
    //     InstitutionMedicalServiceOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: InstitutionMedicalServiceWhereInputObjectSchema.optional(),
    // cursor: InstitutionMedicalServiceWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
