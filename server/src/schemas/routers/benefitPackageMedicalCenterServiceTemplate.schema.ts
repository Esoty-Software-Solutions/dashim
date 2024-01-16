import { z } from "zod";

import { BenefitPackageMedicalCenterServiceTemplateScalarFieldEnumSchema } from "@schemas/enums/BenefitPackageMedicalCenterServiceTemplateScalarFieldEnum.schema";
import { BenefitPackageMedicalCenterServiceTemplateCreateManyInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalCenterServiceTemplateCreateManyInput.schema";
import { BenefitPackageMedicalCenterServiceTemplateUncheckedCreateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalCenterServiceTemplateUncheckedCreateInput.schema";
import { BenefitPackageMedicalCenterServiceTemplateWhereInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalCenterServiceTemplateWhereInput.schema";
import { BenefitPackageMedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalCenterServiceTemplateOrderByWithRelationInput.schema";
import { BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalCenterServiceTemplateWhereUniqueInput.schema";
import { BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateInput.schema";
// import { BenefitPackageMedicalCenterServiceTemplateOrderByWithAggregationInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalCenterServiceTemplateOrderByWithAggregationInput.schema"; //
// import { BenefitPackageMedicalCenterServiceTemplateScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalCenterServiceTemplateScalarWhereWithAggregatesInput.schema"; //
// import { BenefitPackageMedicalCenterServiceTemplateUpdateManyMutationInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalCenterServiceTemplateUpdateManyMutationInput.schema"; //
// import { BenefitPackageMedicalCenterServiceTemplateCountAggregateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalCenterServiceTemplateCountAggregateInput.schema"; //
// import { BenefitPackageMedicalCenterServiceTemplateMinAggregateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalCenterServiceTemplateMinAggregateInput.schema"; //
// import { BenefitPackageMedicalCenterServiceTemplateMaxAggregateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalCenterServiceTemplateMaxAggregateInput.schema"; //

// export const BenefitPackageMedicalCenterServiceTemplateAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       BenefitPackageMedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema,
//       BenefitPackageMedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BenefitPackageMedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
//   cursor: BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), BenefitPackageMedicalCenterServiceTemplateCountAggregateInputObjectSchema])
//     .optional(),
//   _min: BenefitPackageMedicalCenterServiceTemplateMinAggregateInputObjectSchema.optional(),
//   _max: BenefitPackageMedicalCenterServiceTemplateMaxAggregateInputObjectSchema.optional(),
// });

export const BenefitPackageMedicalCenterServiceTemplateCreateManySchema = z.object({
  data: z.union([
    BenefitPackageMedicalCenterServiceTemplateCreateManyInputObjectSchema,
    z.array(BenefitPackageMedicalCenterServiceTemplateCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const BenefitPackageMedicalCenterServiceTemplateCreateOneSchema = z.object({
  data: BenefitPackageMedicalCenterServiceTemplateUncheckedCreateInputObjectSchema,
});

export const BenefitPackageMedicalCenterServiceTemplateDeleteManySchema = z.object({
  where: BenefitPackageMedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
});

export const BenefitPackageMedicalCenterServiceTemplateDeleteOneSchema = z.object({
  where: BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema.optional(),
});

// export const BenefitPackageMedicalCenterServiceTemplateFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       BenefitPackageMedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema,
//       BenefitPackageMedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BenefitPackageMedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
//   cursor: BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(BenefitPackageMedicalCenterServiceTemplateScalarFieldEnumSchema).optional(),
// });

export const BenefitPackageMedicalCenterServiceTemplateFindManySchema = z
  .object({
    orderBy: z
      .union([
        BenefitPackageMedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema,
        BenefitPackageMedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: BenefitPackageMedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
    cursor: BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(BenefitPackageMedicalCenterServiceTemplateScalarFieldEnumSchema).optional(),
  })
  .optional();

export const BenefitPackageMedicalCenterServiceTemplateFindUniqueSchema = z.object({
  where: BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
});

// export const BenefitPackageMedicalCenterServiceTemplateGroupBySchema = z.object({
//   where: BenefitPackageMedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       BenefitPackageMedicalCenterServiceTemplateOrderByWithAggregationInputObjectSchema,
//       BenefitPackageMedicalCenterServiceTemplateOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: BenefitPackageMedicalCenterServiceTemplateScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(BenefitPackageMedicalCenterServiceTemplateScalarFieldEnumSchema),
// });

// export const BenefitPackageMedicalCenterServiceTemplateUpdateManySchema = z.object({
//   data: BenefitPackageMedicalCenterServiceTemplateUpdateManyMutationInputObjectSchema,
//   where: BenefitPackageMedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
// });

export const BenefitPackageMedicalCenterServiceTemplateUpdateOneSchema = z.object({
  data: BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateInputObjectSchema,
  where: BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
});

// export const BenefitPackageMedicalCenterServiceTemplateUpsertSchema = z.object({
//   where: BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
//   create: BenefitPackageMedicalCenterServiceTemplateUncheckedCreateInputObjectSchema,
//   update: BenefitPackageMedicalCenterServiceTemplateUncheckedCreateInputObjectSchema,
// });

export const BenefitPackageMedicalCenterServiceTemplateCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     BenefitPackageMedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema,
    //     BenefitPackageMedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: BenefitPackageMedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
    // cursor: BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
