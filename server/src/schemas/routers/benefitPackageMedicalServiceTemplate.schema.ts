import { z } from "zod";

import { BenefitPackageMedicalServiceTemplateScalarFieldEnumSchema } from "@schemas/enums/BenefitPackageMedicalServiceTemplateScalarFieldEnum.schema";
import { BenefitPackageMedicalServiceTemplateCreateManyInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceTemplateCreateManyInput.schema";
import { BenefitPackageMedicalServiceTemplateUncheckedCreateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceTemplateUncheckedCreateInput.schema";
import { BenefitPackageMedicalServiceTemplateWhereInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceTemplateWhereInput.schema";
import { BenefitPackageMedicalServiceTemplateOrderByWithRelationInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceTemplateOrderByWithRelationInput.schema";
import { BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceTemplateWhereUniqueInput.schema";
import { BenefitPackageMedicalServiceTemplateUncheckedUpdateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceTemplateUncheckedUpdateInput.schema";
// import { BenefitPackageMedicalServiceTemplateOrderByWithAggregationInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceTemplateOrderByWithAggregationInput.schema"; //
// import { BenefitPackageMedicalServiceTemplateScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceTemplateScalarWhereWithAggregatesInput.schema"; //
import { BenefitPackageMedicalServiceTemplateUpdateManyMutationInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceTemplateUpdateManyMutationInput.schema"; //
// import { BenefitPackageMedicalServiceTemplateCountAggregateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceTemplateCountAggregateInput.schema"; //
// import { BenefitPackageMedicalServiceTemplateMinAggregateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceTemplateMinAggregateInput.schema"; //
// import { BenefitPackageMedicalServiceTemplateMaxAggregateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceTemplateMaxAggregateInput.schema"; //

// export const BenefitPackageMedicalServiceTemplateAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       BenefitPackageMedicalServiceTemplateOrderByWithRelationInputObjectSchema,
//       BenefitPackageMedicalServiceTemplateOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BenefitPackageMedicalServiceTemplateWhereInputObjectSchema.optional(),
//   cursor: BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), BenefitPackageMedicalServiceTemplateCountAggregateInputObjectSchema])
//     .optional(),
//   _min: BenefitPackageMedicalServiceTemplateMinAggregateInputObjectSchema.optional(),
//   _max: BenefitPackageMedicalServiceTemplateMaxAggregateInputObjectSchema.optional(),
// });

export const BenefitPackageMedicalServiceTemplateCreateManySchema = z.object({
  data: z.union([
    BenefitPackageMedicalServiceTemplateCreateManyInputObjectSchema,
    z.array(BenefitPackageMedicalServiceTemplateCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const BenefitPackageMedicalServiceTemplateCreateOneSchema = z.object({
  data: BenefitPackageMedicalServiceTemplateUncheckedCreateInputObjectSchema,
});

export const BenefitPackageMedicalServiceTemplateDeleteManySchema = z.object({
  where: BenefitPackageMedicalServiceTemplateWhereInputObjectSchema.optional(),
});

export const BenefitPackageMedicalServiceTemplateDeleteOneSchema = z.object({
  where: BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema,
});

// export const BenefitPackageMedicalServiceTemplateFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       BenefitPackageMedicalServiceTemplateOrderByWithRelationInputObjectSchema,
//       BenefitPackageMedicalServiceTemplateOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BenefitPackageMedicalServiceTemplateWhereInputObjectSchema.optional(),
//   cursor: BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(BenefitPackageMedicalServiceTemplateScalarFieldEnumSchema).optional(),
// });

export const BenefitPackageMedicalServiceTemplateFindManySchema = z
  .object({
    orderBy: z
      .union([
        BenefitPackageMedicalServiceTemplateOrderByWithRelationInputObjectSchema,
        BenefitPackageMedicalServiceTemplateOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: BenefitPackageMedicalServiceTemplateWhereInputObjectSchema.optional(),
    cursor: BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(BenefitPackageMedicalServiceTemplateScalarFieldEnumSchema).optional(),
  })
  .optional();

export const BenefitPackageMedicalServiceTemplateFindUniqueSchema = z.object({
  where: BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema,
});

// export const BenefitPackageMedicalServiceTemplateGroupBySchema = z.object({
//   where: BenefitPackageMedicalServiceTemplateWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       BenefitPackageMedicalServiceTemplateOrderByWithAggregationInputObjectSchema,
//       BenefitPackageMedicalServiceTemplateOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: BenefitPackageMedicalServiceTemplateScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(BenefitPackageMedicalServiceTemplateScalarFieldEnumSchema),
// });

export const BenefitPackageMedicalServiceTemplateUpdateManySchema = z.object({
  data: BenefitPackageMedicalServiceTemplateUpdateManyMutationInputObjectSchema,
  where: BenefitPackageMedicalServiceTemplateWhereInputObjectSchema.optional(),
});

export const BenefitPackageMedicalServiceTemplateUpdateOneSchema = z.object({
  data: BenefitPackageMedicalServiceTemplateUncheckedUpdateInputObjectSchema,
  where: BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema,
});

// export const BenefitPackageMedicalServiceTemplateUpsertSchema = z.object({
//   where: BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema,
//   create: BenefitPackageMedicalServiceTemplateUncheckedCreateInputObjectSchema,
//   update: BenefitPackageMedicalServiceTemplateUncheckedCreateInputObjectSchema,
// });

export const BenefitPackageMedicalServiceTemplateCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     BenefitPackageMedicalServiceTemplateOrderByWithRelationInputObjectSchema,
    //     BenefitPackageMedicalServiceTemplateOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: BenefitPackageMedicalServiceTemplateWhereInputObjectSchema.optional(),
    // cursor: BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
