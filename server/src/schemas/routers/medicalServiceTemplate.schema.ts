import { z } from "zod";

import { MedicalServiceTemplateScalarFieldEnumSchema } from "@schemas/enums/MedicalServiceTemplateScalarFieldEnum.schema";
import { MedicalServiceTemplateCreateManyInputObjectSchema } from "@schemas/objects/MedicalServiceTemplateCreateManyInput.schema";
import { MedicalServiceTemplateUncheckedCreateInputObjectSchema } from "@schemas/objects/MedicalServiceTemplateUncheckedCreateInput.schema";
import { MedicalServiceTemplateWhereInputObjectSchema } from "@schemas/objects/MedicalServiceTemplateWhereInput.schema";
import { MedicalServiceTemplateOrderByWithRelationInputObjectSchema } from "@schemas/objects/MedicalServiceTemplateOrderByWithRelationInput.schema";
import { MedicalServiceTemplateWhereUniqueInputObjectSchema } from "@schemas/objects/MedicalServiceTemplateWhereUniqueInput.schema";
import { MedicalServiceTemplateUncheckedUpdateInputObjectSchema } from "@schemas/objects/MedicalServiceTemplateUncheckedUpdateInput.schema";
// import { MedicalServiceTemplateOrderByWithAggregationInputObjectSchema } from "@schemas/objects/MedicalServiceTemplateOrderByWithAggregationInput.schema"; //
// import { MedicalServiceTemplateScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/MedicalServiceTemplateScalarWhereWithAggregatesInput.schema"; //
// import { MedicalServiceTemplateUpdateManyMutationInputObjectSchema } from "@schemas/objects/MedicalServiceTemplateUpdateManyMutationInput.schema"; //
// import { MedicalServiceTemplateCountAggregateInputObjectSchema } from "@schemas/objects/MedicalServiceTemplateCountAggregateInput.schema"; //
// import { MedicalServiceTemplateMinAggregateInputObjectSchema } from "@schemas/objects/MedicalServiceTemplateMinAggregateInput.schema"; //
// import { MedicalServiceTemplateMaxAggregateInputObjectSchema } from "@schemas/objects/MedicalServiceTemplateMaxAggregateInput.schema"; //

// export const MedicalServiceTemplateAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       MedicalServiceTemplateOrderByWithRelationInputObjectSchema,
//       MedicalServiceTemplateOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: MedicalServiceTemplateWhereInputObjectSchema.optional(),
//   cursor: MedicalServiceTemplateWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), MedicalServiceTemplateCountAggregateInputObjectSchema])
//     .optional(),
//   _min: MedicalServiceTemplateMinAggregateInputObjectSchema.optional(),
//   _max: MedicalServiceTemplateMaxAggregateInputObjectSchema.optional(),
// });

export const MedicalServiceTemplateCreateManySchema = z.object({
  data: z.union([
    MedicalServiceTemplateCreateManyInputObjectSchema,
    z.array(MedicalServiceTemplateCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const MedicalServiceTemplateCreateOneSchema = z.object({
  data: MedicalServiceTemplateUncheckedCreateInputObjectSchema,
});

export const MedicalServiceTemplateDeleteManySchema = z.object({
  where: MedicalServiceTemplateWhereInputObjectSchema.optional(),
});

export const MedicalServiceTemplateDeleteOneSchema = z.object({
  where: MedicalServiceTemplateWhereUniqueInputObjectSchema.optional(),
});

// export const MedicalServiceTemplateFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       MedicalServiceTemplateOrderByWithRelationInputObjectSchema,
//       MedicalServiceTemplateOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: MedicalServiceTemplateWhereInputObjectSchema.optional(),
//   cursor: MedicalServiceTemplateWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(MedicalServiceTemplateScalarFieldEnumSchema).optional(),
// });

export const MedicalServiceTemplateFindManySchema = z
  .object({
    orderBy: z
      .union([
        MedicalServiceTemplateOrderByWithRelationInputObjectSchema,
        MedicalServiceTemplateOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: MedicalServiceTemplateWhereInputObjectSchema.optional(),
    cursor: MedicalServiceTemplateWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(MedicalServiceTemplateScalarFieldEnumSchema).optional(),
  })
  .optional();

export const MedicalServiceTemplateFindUniqueSchema = z.object({
  where: MedicalServiceTemplateWhereUniqueInputObjectSchema,
});

// export const MedicalServiceTemplateGroupBySchema = z.object({
//   where: MedicalServiceTemplateWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       MedicalServiceTemplateOrderByWithAggregationInputObjectSchema,
//       MedicalServiceTemplateOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: MedicalServiceTemplateScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(MedicalServiceTemplateScalarFieldEnumSchema),
// });

// export const MedicalServiceTemplateUpdateManySchema = z.object({
//   data: MedicalServiceTemplateUpdateManyMutationInputObjectSchema,
//   where: MedicalServiceTemplateWhereInputObjectSchema.optional(),
// });

export const MedicalServiceTemplateUpdateOneSchema = z.object({
  data: MedicalServiceTemplateUncheckedUpdateInputObjectSchema,
  where: MedicalServiceTemplateWhereUniqueInputObjectSchema,
});

// export const MedicalServiceTemplateUpsertSchema = z.object({
//   where: MedicalServiceTemplateWhereUniqueInputObjectSchema,
//   create: MedicalServiceTemplateUncheckedCreateInputObjectSchema,
//   update: MedicalServiceTemplateUncheckedCreateInputObjectSchema,
// });

export const MedicalServiceTemplateCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     MedicalServiceTemplateOrderByWithRelationInputObjectSchema,
    //     MedicalServiceTemplateOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: MedicalServiceTemplateWhereInputObjectSchema.optional(),
    // cursor: MedicalServiceTemplateWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
