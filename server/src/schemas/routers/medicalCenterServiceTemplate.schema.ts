import { z } from "zod";

import { MedicalCenterServiceTemplateScalarFieldEnumSchema } from "@schemas/enums/MedicalCenterServiceTemplateScalarFieldEnum.schema";
import { MedicalCenterServiceTemplateCreateManyInputObjectSchema } from "@schemas/objects/MedicalCenterServiceTemplateCreateManyInput.schema";
import { MedicalCenterServiceTemplateUncheckedCreateInputObjectSchema } from "@schemas/objects/MedicalCenterServiceTemplateUncheckedCreateInput.schema";
import { MedicalCenterServiceTemplateWhereInputObjectSchema } from "@schemas/objects/MedicalCenterServiceTemplateWhereInput.schema";
import { MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema } from "@schemas/objects/MedicalCenterServiceTemplateOrderByWithRelationInput.schema";
import { MedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from "@schemas/objects/MedicalCenterServiceTemplateWhereUniqueInput.schema";
import { MedicalCenterServiceTemplateUncheckedUpdateInputObjectSchema } from "@schemas/objects/MedicalCenterServiceTemplateUncheckedUpdateInput.schema";
// import { MedicalCenterServiceTemplateOrderByWithAggregationInputObjectSchema } from "@schemas/objects/MedicalCenterServiceTemplateOrderByWithAggregationInput.schema"; //
// import { MedicalCenterServiceTemplateScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/MedicalCenterServiceTemplateScalarWhereWithAggregatesInput.schema"; //
// import { MedicalCenterServiceTemplateUpdateManyMutationInputObjectSchema } from "@schemas/objects/MedicalCenterServiceTemplateUpdateManyMutationInput.schema"; //
// import { MedicalCenterServiceTemplateCountAggregateInputObjectSchema } from "@schemas/objects/MedicalCenterServiceTemplateCountAggregateInput.schema"; //
// import { MedicalCenterServiceTemplateMinAggregateInputObjectSchema } from "@schemas/objects/MedicalCenterServiceTemplateMinAggregateInput.schema"; //
// import { MedicalCenterServiceTemplateMaxAggregateInputObjectSchema } from "@schemas/objects/MedicalCenterServiceTemplateMaxAggregateInput.schema"; //

// export const MedicalCenterServiceTemplateAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema,
//       MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: MedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
//   cursor: MedicalCenterServiceTemplateWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), MedicalCenterServiceTemplateCountAggregateInputObjectSchema])
//     .optional(),
//   _min: MedicalCenterServiceTemplateMinAggregateInputObjectSchema.optional(),
//   _max: MedicalCenterServiceTemplateMaxAggregateInputObjectSchema.optional(),
// });

export const MedicalCenterServiceTemplateCreateManySchema = z.object({
  data: z.union([
    MedicalCenterServiceTemplateCreateManyInputObjectSchema,
    z.array(MedicalCenterServiceTemplateCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const MedicalCenterServiceTemplateCreateOneSchema = z.object({
  data: MedicalCenterServiceTemplateUncheckedCreateInputObjectSchema,
});

export const MedicalCenterServiceTemplateDeleteManySchema = z.object({
  where: MedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
});

export const MedicalCenterServiceTemplateDeleteOneSchema = z.object({
  where: MedicalCenterServiceTemplateWhereUniqueInputObjectSchema.optional(),
});

// export const MedicalCenterServiceTemplateFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema,
//       MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: MedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
//   cursor: MedicalCenterServiceTemplateWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(MedicalCenterServiceTemplateScalarFieldEnumSchema).optional(),
// });

export const MedicalCenterServiceTemplateFindManySchema = z
  .object({
    orderBy: z
      .union([
        MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema,
        MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: MedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
    cursor: MedicalCenterServiceTemplateWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(MedicalCenterServiceTemplateScalarFieldEnumSchema).optional(),
  })
  .optional();

export const MedicalCenterServiceTemplateFindUniqueSchema = z.object({
  where: MedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
});

// export const MedicalCenterServiceTemplateGroupBySchema = z.object({
//   where: MedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       MedicalCenterServiceTemplateOrderByWithAggregationInputObjectSchema,
//       MedicalCenterServiceTemplateOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: MedicalCenterServiceTemplateScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(MedicalCenterServiceTemplateScalarFieldEnumSchema),
// });

// export const MedicalCenterServiceTemplateUpdateManySchema = z.object({
//   data: MedicalCenterServiceTemplateUpdateManyMutationInputObjectSchema,
//   where: MedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
// });

export const MedicalCenterServiceTemplateUpdateOneSchema = z.object({
  data: MedicalCenterServiceTemplateUncheckedUpdateInputObjectSchema,
  where: MedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
});

// export const MedicalCenterServiceTemplateUpsertSchema = z.object({
//   where: MedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
//   create: MedicalCenterServiceTemplateUncheckedCreateInputObjectSchema,
//   update: MedicalCenterServiceTemplateUncheckedCreateInputObjectSchema,
// });

export const MedicalCenterServiceTemplateCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema,
    //     MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: MedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
    // cursor: MedicalCenterServiceTemplateWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
